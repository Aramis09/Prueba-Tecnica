import Link from "next/link";
import styles from "./navBar.module.css";
import { useContext } from "react";
import { AccountContext } from "@/context/accountContext";
import { useRouter } from "next/router";
import Login from "../Login/login";
import { changeComponent } from "@/services/generalServices";

export default function NavBar() {
  const router = useRouter();
  const { accountStatus, setAccountStatus } = useContext(AccountContext);
  const handleDisconect = () => {
    const disconectConfig = { ...accountStatus, verify: false };
    setAccountStatus(disconectConfig);
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link href={"/about"} className={styles.link}>
          About
        </Link>
        <Link
          href={changeComponent(accountStatus.verify, "/home", "/")}
          className={styles.link}
          onClick={handleDisconect}
        >
          {changeComponent(accountStatus.verify, "Desconectar", "Login")}
        </Link>
      </nav>
    </header>
  );
}
