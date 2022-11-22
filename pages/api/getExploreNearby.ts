import type { NextApiRequest, NextApiResponse } from 'next'
import { StaticImageData } from 'next/image'
import supabase from '../../service/supabase'

export type DataType = {
    id: number
    img: string,
    location: string,
    time_distance: string
}

type ResponseDataType = {
    image: string
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
    const { data, error } = await supabase.from('explore_nearby').select('*')
    if (error || data == null) {
        res.status(500).json({ data: [] })
        return
    }
    res.status(200).json({ data })

}
