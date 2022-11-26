import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../../service/supabase'


export type LargeCardType = {
    id: number
    publicUrl: string,
    title: string,
    description: string,
    buttonText: string
}

type ResponseDataType = {
    data: LargeCardType
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
    const { data, error } = await supabase.from('random_large_card').select().limit(1).single()
    if (error || data == null) {
        res.status(500).json({ data: {} as LargeCardType, other: [] })
        return
    }

    res.status(200).json({
        data, other: [process.env.VERCEL_ENV!]
    })

}
