import { useEthers } from "@usedapp/core";
import { useEffect } from "react";

export default function Index() {
  const { account, activateBrowserWallet } = useEthers();

  useEffect(() => {
    console.log("DESDE INDEX", { account })
  }, [account])

  return (
    <div>
      You are logged in
      <button onClick={() => activateBrowserWallet()}></button>
    </div>
  );
}
