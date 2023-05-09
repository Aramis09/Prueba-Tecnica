import styles from "./fallbackComponent.module.css";
export default function ErrorJavaScript(): JSX.Element {
  return (
    <div className={styles.conatiner}>
      <p>
        Sorry, there is a technical problem. You can try again or come back
        later when we fix the problem
      </p>
      <button onClick={() => window.location.reload()}> Try again</button>
    </div>
  );
}
