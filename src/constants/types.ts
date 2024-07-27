import { Address } from "viem";

export interface Token {
    id: string;
    address: Address;
    chainId: number;
    creator: Address;
    name: string;
    symbol: string;
    marketCap: string;
    targetMcap: string;
    description: string;
    logoUrl: string;
    timestamp: string;
  }
  
export interface TokensData {
    tokens: {
      items: Token[];
    };
  }
  
export interface TokenDetail extends Token {
    isMigrated: boolean;
    lpAddress: string | null;
  }
  
export interface TokenWithPrices extends TokenDetail {
    prices: {
      items: {
        id: number;
        open: string;
        high: string;
        low: string;
        close: string;
        average: string;
        count: string;
      }[];
    };
  }
  
export interface TokenData {
    token: TokenWithPrices;
  }