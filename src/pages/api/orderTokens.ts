// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { orderTokensController, orderTokensControllerType } from './controllers/orderTokensController';
import { TokensType } from '@/interfaces';


export default function handlerOrderTokens(
  req: NextApiRequest,
  res: NextApiResponse<TokensType[] | any>
) {
 try {
   if(req.method !== "POST") throw new Error("please use a correctly method")
   const {typeOrder, tokensList}:orderTokensControllerType =  JSON.parse(req.body)
   if(!Array.isArray(tokensList)) throw new Error("please, send a correctly data ")
   const newOrderList = orderTokensController({typeOrder, tokensList})
   return res.status(200).json(newOrderList)
  
 } catch (error) {
    return res.status(409).json({error:error})
 }
}
