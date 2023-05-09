import { TokensType } from "@/interfaces"
import { convertDate } from "@/services/homeServices";


export interface orderTokensControllerType {
  typeOrder: "Symbol"|"QuoteAsset"| "OpenPrice"|"LowPrice"|"HighPrice"|"LastPrice"|"Date"
  tokensList:TokensType[]
}

export function orderTokensController({typeOrder,tokensList}:orderTokensControllerType) {
  const verifyIsOrderOfString:boolean = typeOrder === "Symbol" || typeOrder === "QuoteAsset" ||typeOrder === "Date"
  if(typeOrder === "Date") return tokensList.sort(callBackToOrderDates);
  
  if(verifyIsOrderOfString) return tokensList.sort((a:TokensType, b:TokensType) => a[typeOrder].localeCompare(b[typeOrder]))
  return tokensList.sort((a, b) => Number(a[typeOrder]) - Number((b[typeOrder])))
}








const callBackToOrderDates = function(tokenOne:TokensType, tokenTwo:TokensType) {
  const dateArrayOne = convertDate(tokenOne.Date).split("/")
  const dateArraytwo = convertDate(tokenTwo.Date).split("/")
  const dateOne = {
    year:dateArrayOne[2],
    month:dateArrayOne[1],
    day:dateArrayOne[0]
  }
  const dateTwo = {
    year:dateArraytwo[2],
    month:dateArraytwo[1],
    day:dateArraytwo[0]
  }
  if(dateOne.year > dateTwo.year) return 1
  if(dateOne.year === dateTwo.year) {
    if(dateOne.month > dateTwo.month) return 1
    if(dateOne.month === dateTwo.month){
      if(dateOne.day > dateTwo.day) return 1
      return - 1
    }
    return -1
  }
  return -1
}




