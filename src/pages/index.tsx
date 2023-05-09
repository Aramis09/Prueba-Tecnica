import { useContext } from "react";
import Login from "../components/Login/login";
import { AccountContext } from "@/context/accountContext";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();
  const { accountStatus, setAccountStatus } = useContext(AccountContext);
  accountStatus.verify && router.push("/home");
  return (
    <main>
      <Login />
    </main>
  );
}
