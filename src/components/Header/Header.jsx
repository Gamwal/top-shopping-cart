import styles from "./Header.module.css";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiMenu } from "@mdi/js";
import { mdiCart } from "@mdi/js";
import { mdiBell } from "@mdi/js";
import { mdiInformation } from "@mdi/js";
import { mdiFaceManProfile } from "@mdi/js";
import logo from "../../assets/appicon.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.topBar}>
        <img src={logo} alt="store icon" />
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <Icon path={mdiMagnify} size={1} color="var(--icon-color)" />
        </div>
        <div className={styles.icons}>
          <Icon path={mdiCart} size={1} color="var(--icon-color)" />
          <Icon path={mdiBell} size={1} color="var(--icon-color)" />
          <Icon path={mdiInformation} size={1} color="var(--icon-color)" />
          <Icon path={mdiFaceManProfile} size={1} color="var(--icon-color)" />
        </div>
      </div>
      <div className={styles.bottomBar}>
        <Icon path={mdiMenu} size={1} color="var(--icon-color)" />
        <a href="">Categories</a>
        <a href="">Bestsellers</a>
        <a href="">Inspirations</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
