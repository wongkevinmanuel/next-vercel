// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//Utilizado pq es un tipo especifico
//y no se expandera
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  //<Data> para extender de la interfaz Data en el objeto NextApi..
  res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
