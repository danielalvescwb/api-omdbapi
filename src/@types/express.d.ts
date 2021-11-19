interface DecodedToken {
  sub?: string;
  id?: number;
  name?: string;
  avatar_url?: strin;
}

declare namespace Express {
  export interface Request {
    tokenDecoded: DecodedToken;
  }
}
