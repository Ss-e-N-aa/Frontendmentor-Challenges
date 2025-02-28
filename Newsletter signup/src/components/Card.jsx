import desktopImg from '../assets/illustration-sign-up-desktop.svg'
import mobileImg from '../assets/illustration-sign-up-mobile.svg'
import iconImg from '../assets/icon-list.svg'

import { useState } from 'react'

const infoList = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!'
]

export default function Card({ onSuccess }) {

    const [formValues, setFormValues] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        setFormValues(data);
        console.log(data);
        onSuccess();
    }

    return (
        <div className="card">
            <div className="cardContent">
                <picture>
                    <source media="(max-width: 375px)" srcSet={mobileImg} />
                    <img
                        className="sideImage"
                        src={desktopImg}
                        alt="newsletter side image" />
                </picture>

                <div className="overview">
                    <div className="infoSection">
                        <h1>Stay updated!</h1>
                        <p>
                            Join 60,000+ product managers receiving monthly updates on:
                        </p>
                    </div>

                    <ul className='listSection'>
                        {infoList.map((i, index) => (
                            <li key={index}>
                                <img
                                    className='iconImage'
                                    src={iconImg} alt="icon list image" />
                                <span>{i}</span>
                            </li>
                        ))}
                    </ul>

                    <form className="inputSection" onSubmit={handleSubmit}>
                        <label htmlFor="">Email address</label>
                        <input type="email" name='email' id='email' placeholder='email@company.com' required />
                        <button>
                            Subscribe to monthly newsletter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
