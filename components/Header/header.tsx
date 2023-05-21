import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Caradex</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">Ma collection</Link>
          </li>
          <li>
            <Link href="/about">Mes succès</Link>
          </li>
          <li>
            <Link href="/about">Mes amis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
