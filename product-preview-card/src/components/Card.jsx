import styles from './Card.module.css'
import desktopImg from '../assets/image-product-desktop.jpg'
import mobileImg from '../assets/image-product-mobile.jpg'
import iconImg from '../assets/icon-cart.svg'

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <picture>
                    <source
                        srcSet={mobileImg}
                        media='(max-width: 686px)'
                        width='686'
                        height='480'
                    />

                    <img
                        src={desktopImg}
                        alt="product image"
                        width='600'
                        height='900'
                    />
                </picture>

                <div className={styles.textSection}>
                    <span className={styles.tag}>perfume</span>
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <p>
                        A floral,solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.
                    </p>

                    <div className={styles.priceContainer}>
                        <h2>$149.99</h2>
                        <small>$169.99</small>
                    </div>

                    <button className={styles.cartBtn}>
                        <img src={iconImg} alt="cart icon image" />
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    )
}
