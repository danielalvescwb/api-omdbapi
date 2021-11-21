interface DecodedToken {
  sub?: string;
  id?: number;
  name?: string;
  avatar_url?: string;
}

declare namespace Express {
  export interface Request {
    tokenDecoded: DecodedToken;
  }
}
