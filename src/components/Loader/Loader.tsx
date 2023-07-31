import styles from "./Loader.module.css";

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loaderBackdrop}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
