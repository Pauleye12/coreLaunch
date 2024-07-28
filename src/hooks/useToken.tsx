import { client } from "../utils/graphql";
import { useQuery } from "@tanstack/react-query";
import { GET_TOKENS, GET_TOKEN } from "../utils/query";
import {
  TokenData,
  Token,
  TokenWithPrices,
  TokensData,
} from "../constants/types";

export const useTokens = (chainId: number, orderBy: string, limit: number) => {
  const fetchTokens = async (
    chainId: number,
    orderBy: string,
    limit: number,
  ) => {
    const { tokens } = await client.request<TokensData>(GET_TOKENS, {
      orderBy,
      chainId,
      limit,
    });
    return tokens.items;
  };

  return useQuery<Token[], Error>({
    queryKey: ["tokens", chainId, orderBy, limit],
    queryFn: () => fetchTokens(chainId, orderBy, limit),
  });
};

export const useToken = (id: string) => {
  const fetchToken = async (id: string): Promise<TokenWithPrices | null> => {
    if (id === "") {
      return null;
    }
    const { token } = await client.request<TokenData>(GET_TOKEN, { id });
    return token;
  };

  return useQuery<TokenWithPrices | null, Error>({
    queryKey: ["token", id],
    queryFn: () => fetchToken(id),
    enabled: id !== "", // Only run the query if id is not an empty string
  });
};
