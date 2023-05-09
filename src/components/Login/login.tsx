import styles from "./login.module.css";
import { AccountContext } from "@/context/accountContext";
import { useCallback, useContext } from "react";
import { verifyDataUser } from "@/services/loginServices";
//Formulario no controlado, por lo que el useCallback capaz no es tan necesario debido a las pocas cantiad de render
export default function Login() {
  const { accountStatus, setAccountStatus } = useContext(AccountContext);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const fields = Object.fromEntries(new window.FormData(form));
      const checkData = await verifyDataUser({ fields });
      setAccountStatus(checkData);
    },
    []
  );

  return (
    <form onSubmit={handleSubmit} className={styles.formLogin}>
      <input
        className={styles.inputLogin}
        type="email"
        name="email"
        placeholder="Email"
        maxLength={25}
        minLength={3}
        required
        data-testid="email-input"
      />
      <input
        className={styles.inputLogin}
        type="text"
        name="password"
        placeholder="Password"
        pattern=".*[A-Z].*"
        title="It must have at least one capital letter"
        maxLength={10}
        minLength={5}
        required
        data-testid="password-input"
      />
      <p className={styles.messageLogin}>
        {accountStatus && accountStatus.message}
      </p>
      {accountStatus && accountStatus.verify && (
        <p className={styles.messageLogin}>
          {"You will be redirected in a few seconds"}
        </p>
      )}

      <button type="submit" name="login">
        Login
      </button>
    </form>
  );
}
