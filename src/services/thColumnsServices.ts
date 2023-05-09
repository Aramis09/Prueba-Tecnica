import { TokensType } from "@/interfaces";

interface newOrderType {
  typeOrder: string;
  tokensList: TokensType[];
}

export function newOrderRequest({
  typeOrder,
  tokensList,
}: newOrderType): Promise<TokensType[]> {
  const dataBody = {
    typeOrder,
    tokensList,
  };
  const newOrder = fetch(`http://localhost:3000/api/orderTokens`, {
    method: "POST",
    body: JSON.stringify(dataBody),
  })
    .then((response) => response.json())
    .then((newOrderList) => newOrderList)
    .catch((error) => {
      console.error(error);
      return [];
    });

  return newOrder;
}
