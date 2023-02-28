// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = 'https://emaxis.jp/web/api/v1.php?col=doc_pdf_all';
  axios.get(url).then((response) => {
    // console.log(response.data);
    res.status(200).json(response.data)
  });
}
