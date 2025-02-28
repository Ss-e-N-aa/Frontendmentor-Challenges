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
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const email = data.email.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError(true);
            return
        }

        setError(false);
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

                    <form className="inputSection" onSubmit={handleSubmit} noValidate>
                        <div className="labelContainer">
                            <label htmlFor=""><h5>Email address</h5></label>
                            {error && <label className='ErrorLabel'><h5>Valid email is required</h5></label>}
                        </div>
                        <input type="email" name='email' id='email' placeholder='email@company.com' className={error ? 'EmailError' : ""} />
                        <button>
                            Subscribe to monthly newsletter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
