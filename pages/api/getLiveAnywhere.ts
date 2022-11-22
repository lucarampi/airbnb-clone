import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../service/supabase'

export type LiveAnywereType = {
    id: number
    publicUrl: string,
    title: string,
}

type ResponseDataType = {
    data: LiveAnywereType[]
    other: string[]
}

type ErrorDataType = {
    body: string
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDataType | ErrorDataType>
) {
    if (req.method !== 'GET') {
        res.status(405).json({ body: 'Method Not Allowed' })
        return;
    }
    const { data, error } = await supabase.from('live_anywhere').select('*')
    if (error || data == null) {
        res.status(500).json({ data: [], other: [] })
        return
    }
    
    res.status(200).json({
        data, other: [process.env.VERCEL_ENV!]
    })

}
