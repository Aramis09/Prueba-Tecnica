import { thTableList } from "@/utils/constants";
import TokenRow from "../TokenRows/tokenRow";
import ThColumns from "../ThColumns/thColumss";
import { TokensType } from "@/interfaces";
import { convertDate } from "@/services/homeServices";
import styles from "./tokensTable.module.css";
import TokensRenderSkeleton from "../TokenRenderSkeleton/tokenRenderSkeleton";
import { changeComponent } from "@/services/generalServices";
interface TokenRenderTypes {
  tokensArray: TokensType[];
  setTokenList: (tokens: TokensType[]) => void;
}
export default function TokensRender({
  tokensArray,
  setTokenList,
}: TokenRenderTypes): JSX.Element {
  return changeComponent(
    tokensArray.length,
    <table className={styles.table}>
      <thead>
        {thTableList.map((thName) => (
          <ThColumns
            key={thName}
            thName={thName}
            setTokenList={setTokenList}
            tokensList={tokensArray}
          />
        ))}
      </thead>
      <tbody>
        {(Array.isArray(tokensArray) &&
          tokensArray.map((token) => (
            <TokenRow
              key={token.Symbol}
              Symbol={token.Symbol}
              QuoteAsset={token.QuoteAsset}
              OpenPrice={token.OpenPrice}
              LowPrice={token.LowPrice}
              HighPrice={token.HighPrice}
              LastPrice={token.LastPrice}
              Date={convertDate(token.Date)}
            />
          ))) || <p>Upss, try agai please ...</p>}
      </tbody>
    </table>,
    <TokensRenderSkeleton />
  );
}
