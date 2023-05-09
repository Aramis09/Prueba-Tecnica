export interface TokensType {
  Symbol :string,
  BaseAsset:string,
  QuoteAsset:string
  OpenPrice:string,
  LowPrice:string
  HighPrice:string,
  LastPrice:string,
  Volume:string,
  BidPrice:string,
  AskPrice:string,
  Date:string
}
export interface TokensTypeOld {
symbol: string;
baseAsset: string;
quoteAsset: string;
openPrice: string;
lowPrice: string;
highPrice: string;
lastPrice: string;
volume: string;
bidPrice: string;
askPrice: string;
at: string;
}

export interface AccountType {
  email:string
  password:string
}

export interface VerifyType {
  verify:boolean
  message: string
  error: string | undefined
} 

export interface DataUserType {
  email:string
  password:string
}

export interface VerifyTypeClient extends VerifyType {
  email: string;
}