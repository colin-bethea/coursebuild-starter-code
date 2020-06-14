import styles from "../styles/components/Header.module.css"

const Header = () => {

    return (
      <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src="/logo.png" />
          <h1>Boilerplate</h1>
        </div>
        <div>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
        </div>
      </div>
      </div>
    );

};

export default Header;
