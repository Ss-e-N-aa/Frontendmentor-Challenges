import styles from './Modal.module.css'
import icon_facebook from "../assets/icon-facebook.svg";
import icon_twitter from "../assets/icon-twitter.svg";
import icon_pinterest from "../assets/icon-pinterest.svg";

export default function Modal({ isOpen }) {
    if (!isOpen) return null;

    return (
        <div className={`${isOpen ? styles.shareCardSelected : styles.shareCardUnselected}`}>
            <span className={styles.shareSpan}>Share</span>
            <img src={icon_facebook} alt="Facebook" />
            <img src={icon_twitter} alt="Twitter" />
            <img src={icon_pinterest} alt="Pinterest" />
        </div>
    )
}
