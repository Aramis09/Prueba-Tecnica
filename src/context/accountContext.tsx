import { VerifyTypeClient } from "@/interfaces";
import { createContext, useState } from "react";

interface AccountProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface AccountContextType {
  accountStatus: VerifyTypeClient;
  setAccountStatus: (newStatus: VerifyTypeClient) => void;
}

export const AccountContext = createContext<AccountContextType>(
  {} as AccountContextType
);

export const AccountProvider = ({ children }: AccountProviderProps) => {
  const [accountStatus, setAccountStatus] = useState<VerifyTypeClient>({
    verify: false,
    message: "complete all field",
    error: undefined,
    email: "",
  });
  return (
    <AccountContext.Provider value={{ accountStatus, setAccountStatus }}>
      <div data-testid="accountStatus">{children}</div>
    </AccountContext.Provider>
  );
};
