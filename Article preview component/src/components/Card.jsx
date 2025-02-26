import { useState } from 'react'
import styles from './Card.module.css'
import Modal from './Modal'

// images
import mainImg from '../assets/drawers.jpg'
import profileImg from '../assets/avatar-michelle.jpg'
import shareIcn from '../assets/icon-share.svg'

export default function Card() {
    const [isModalOpen, setisModalOpen] = useState(false)

    const toggleOptions = () => {
        setisModalOpen((currState) => !currState);
    };

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <figure className={styles.imageContainer}>
                    <img
                        className={styles.mainImg}
                        src={mainImg}
                        alt="picture of green drawers" />

                </figure>

                <div className={styles.cardContent}>
                    <h1>
                        Shift the overall look and feel by adding these wonderful touches to furniture in your home
                    </h1>

                    <p>
                        Ever been in a room and felt like something was missing ? Perhaps it felt slightly bare and uninviting. I&apos;ve got some simple tips to help you make any room feel complete.
                    </p>

                    {/* footer */}
                    <div className={styles.cardFooter}>
                        <div className={styles.profileContainer}>
                            <img
                                className={styles.profileImg}
                                src={profileImg}
                                alt="profile picture of Michelle" />
                            <div className={styles.profileTexts}>
                                <h5>Michelle Appleton</h5>
                                <small>28 Jun 2020</small>
                            </div>
                        </div>
                        {/* Share Button */}
                        <button onClick={toggleOptions} className={`${styles.shareBtn} ${isModalOpen ? styles.btnSelected : styles.btnUnselected}`} >
                            <img
                                src={shareIcn}
                                alt="Share icon" />
                        </button>
                        <Modal isOpen={isModalOpen} />
                    </div>
                </div>
            </div>
        </div>
    )
}
