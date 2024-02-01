const TOKEN_KEY = 'loop-nft-token';

export const saveTokenToLocalStorage = (token: string) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};
export const getTokenFromLocalStorage = (): string | null => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  return token ? token : null;
};
export const clearTokenAndAccountFromLocalStorage = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};
