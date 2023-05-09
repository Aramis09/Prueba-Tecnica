import { TokensType } from "../../interfaces";
import styles from "./tokenRows.module.css";
export type TokenRowType = Omit<
  TokensType,
  "BaseAsset" | "Volume" | "BidPrice" | "AskPrice"
>;

export default function TokenRow({
  Symbol,
  QuoteAsset,
  OpenPrice,
  LowPrice,
  HighPrice,
  LastPrice,
  Date,
}: TokenRowType): JSX.Element {
  return (
    <tr className={styles.tableTr}>
      <td> {Symbol}</td>
      <td> {QuoteAsset}</td>
      <td> {OpenPrice}</td>
      <td> {LowPrice}</td>
      <td> {HighPrice}</td>
      <td> {LastPrice}</td>
      <td> {Date}</td>
    </tr>
  );
}
