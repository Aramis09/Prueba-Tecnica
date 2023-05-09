import { NextApiRequest, NextApiResponse } from "next";
import { getTokensFromExternalApi } from "./controllers/breakContractWithApiController";
import { TokensType, TokensTypeOld } from "@/interfaces";

  

export default async function handlerBreakeContract(
  req: NextApiRequest,
  res: NextApiResponse<TokensType[] | any>
) {
  try {
    if(req.method !== "GET") throw new Error("please, send a correctly method")
    const tokenList:TokensTypeOld[] = await getTokensFromExternalApi();
    const newContract = tokenList.map((token:TokensTypeOld) => ({
      Symbol :token.symbol,
      BaseAsset:token.baseAsset,
      QuoteAsset:token.quoteAsset,
      OpenPrice:token.openPrice,
      LowPrice:token.lowPrice,
      HighPrice:token.highPrice,
      LastPrice:token.lastPrice,
      Volume:token.volume,
      BidPrice:token.bidPrice,
      AskPrice:token.askPrice,
      Date:token.at,
    }))
    return res.status(200).json(newContract)
  } catch (error) {
    return res.status(200).json({error:error})
  }
}

