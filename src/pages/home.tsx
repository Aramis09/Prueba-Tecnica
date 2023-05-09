import TokensRender from "@/components/TokensTable/tokensTable";
import { AccountContext } from "@/context/accountContext";
import { TokensType } from "@/interfaces";
import { changeComponent } from "@/services/generalServices";
import { getTokens } from "@/services/homeServices";
import { useContext, useState } from "react";
interface HomePropsType {
  tokens: TokensType[];
}

export default function Home({ tokens }: HomePropsType): JSX.Element {
  const [tokenList, setTokenList] = useState<TokensType[]>(tokens);
  const { accountStatus, setAccountStatus } = useContext(AccountContext);

  return (
    <>
      {changeComponent(
        accountStatus.verify,
        <TokensRender tokensArray={tokenList} setTokenList={setTokenList} />,
        <>Please login session</>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const tokens = await getTokens();
  return {
    props: { tokens },
  };
}
