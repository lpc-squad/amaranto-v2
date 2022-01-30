import { useEthers } from "@usedapp/core";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = { children: ReactNode };

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }: Props) => {
  const isFirstLogin = useRef(false);
  const [loading, setLoading] = useState(true);
  const { account, activateBrowserWallet } = useEthers();

  const loginWithMetamask = useCallback(async () => {
    await activateBrowserWallet();
  }, [activateBrowserWallet]);

  useEffect(() => {
    isFirstLogin.current = true;
    loginWithMetamask();
  }, [loginWithMetamask]);

  useEffect(() => {
    if (account) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [account]);

  return (
    <AuthContext.Provider value={null}>
      {loading ? <span>Loading</span> : children}
    </AuthContext.Provider>
  );
};
