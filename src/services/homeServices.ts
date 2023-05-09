import { TokensType } from "@/interfaces";

export const convertDate = (unixDate: string): string => {
  const fechaNormal = new Date(Number(unixDate)).toLocaleDateString("es-ES");
  return fechaNormal;
};

export async function getTokens(): Promise<TokensType[]> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/breakContractWithApi`
    );
    const tokens: TokensType[] = await response.json();
    if (!Array.isArray(tokens)) throw new Error("Get tokens failed");
    return tokens;
  } catch (error) {
    console.error(`Get tokens failed`);
    return [];
  }
}
