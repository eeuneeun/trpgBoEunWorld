import jwt, { JwtPayload } from "jsonwebtoken";

// ★ JWT 패키지를 이용하여 제공하는 헬퍼 함수

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

// # JWT 객체에 존재하는 sign 함수를 이용하여 token 을 얻어, 리턴
export function signJwtAccessToken(payload: JwtPayload, options: SignOption = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

// # 이후 통신에 있어서 API CALLER 가 던지는 token 의 유효성을 검증
export function verifyJwt(token: string) {
    try {
      const secret_key = process.env.SECRET_KEY;
      const decoded = jwt.verify(token, secret_key!);
      return decoded as JwtPayload;
    } catch (error) {
      console.log(error);
      return null;
    }
  }