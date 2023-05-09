import { TokensTypeOld } from "@/interfaces";
import { TOKEN_URL } from "@/utils/urls";

export async function getTokensFromExternalApi(): Promise<TokensTypeOld[]> {
  try {
    const response = await fetch(TOKEN_URL);
    const tokens: TokensTypeOld[] = await response.json();
    if (!Array.isArray(tokens)) throw new Error("Get tokens failed");
    return tokens;
  } catch (error) {
    console.error(`Get tokens failed`);
    return [];
  }
}