interface AuthStatesType {
  accessToken: string;
  refreshToken: string;
}

type SetTokensProps = { access: string; refresh: string };

interface AuthHandlersType {
  setTokens: ({ access, refresh }: SetTokensProps) => void;
  clearStorage: () => void;
}

export interface AuthStoreType extends AuthStatesType, AuthHandlersType {}
