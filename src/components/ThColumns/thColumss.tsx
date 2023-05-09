import { TokensType } from "@/interfaces";
import { newOrderRequest } from "@/services/thColumnsServices";
import styles from "./thColumss.module.css";
import { useRef } from "react";
interface ThColumnsType {
  thName: string;
  setTokenList: (tokens: TokensType[]) => void;
  tokensList: TokensType[];
}

export default function ThColumns({
  thName,
  setTokenList,
  tokensList,
}: ThColumnsType): JSX.Element {
  //El useRef  es para evitar algunas request innecesarias cuando solo cambia la direccion orden del mismo array
  const orderDirection = useRef({
    typeOrder: "",
    changeDirection: false,
  });
  const HandleOrderTable = async () => {
    if (
      !orderDirection.current.changeDirection ||
      orderDirection.current.typeOrder !== thName
    ) {
      orderDirection.current.changeDirection = true;
      orderDirection.current.typeOrder = thName;
      const newOrderList = await newOrderRequest({
        typeOrder: thName,
        tokensList,
      });
      setTokenList(newOrderList);
      return;
    }
    orderDirection.current.changeDirection = false;
    const newOrder = [...tokensList].reverse();
    setTokenList(newOrder);
  };

  return (
    <th className={styles.thColums}>
      <div className={styles.colum}>
        {thName}
        <p onClick={HandleOrderTable}>↕</p>
      </div>
    </th>
  );
}
