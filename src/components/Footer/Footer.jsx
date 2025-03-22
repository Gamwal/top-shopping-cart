import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";
import logo from "../../assets/appicon.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <p>Get connected with us on social networks:</p>
        <div className={styles.icons}>
          <FaFacebookF color="var(--icon-color)" />
          <FaXTwitter color="var(--icon-color)" />
          <FaGoogle color="var(--icon-color)" />
          <FaInstagram color="var(--icon-color)" />
          <FaLinkedin color="var(--icon-color)" />
          <FaGithub color="var(--icon-color)" />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.column}>
          <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src={logo} alt="store icon" />
            <strong>JIBOWU ONLINE</strong>
          </p>
          <p>
            Jibowu Online is your one stop shopping website that is created for
            all to enjoy <br /> Jibowu Online is your one stop shopping website
            that is created for all to enjoy
          </p>
        </div>
        <div className={styles.column}>
          <p>
            <strong>PRODUCTS</strong>
          </p>
          <p>Dresses</p>
          <p>Skirts</p>
          <p>Jeans</p>
          <p>Accessories</p>
        </div>
        <div className={styles.column}>
          <p>
            <strong>USEFUL LINKS</strong>
          </p>
          <p>Pricing</p>
          <p>Settings</p>
          <p>Orders</p>
          <p>Help</p>
        </div>
        <div className={styles.column}>
          <p>
            <strong>CONTACT</strong>
          </p>
          <div className={styles.row}>
            <FaHome color="var(--icon-color)" />
            <p>Jibowu, Lagos, Nigeria</p>
          </div>
          <div className={styles.row}>
            <MdEmail color="var(--icon-color)" />
            <p>info@jibowuonline.com</p>
          </div>
          <div className={styles.row}>
            <MdLocalPhone color="var(--icon-color)" />
            <p>+234 012 345 6289</p>
          </div>
          <div className={styles.row}>
            <MdChatBubble color="var(--icon-color)" />
            <p>+234 012 345 6289</p>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <FaRegCopyright />
        <p>
          2025 Copyright: <strong>Gamwal</strong>
        </p>
      </div>
    </div>
  );
}
