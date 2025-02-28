import successImg from '../assets/icon-success.svg'

export default function SuccessCard({ onDismiss }) {
    return (
        <div className="successCard">
            <div className="successCardContent">
                <div className='successCardInfo'>
                    <img src={successImg} alt="success icon image" />
                    <h1>Thanks for subscribing!</h1>
                    <p>
                        A confirmation email has ben sent to <span>ash@loremcompany.com</span>.Please open it and click the button inside to confirm your subscription.
                    </p>
                </div>

                <div className="successCardBtn">
                    <button onClick={onDismiss}>
                        Dismiss message
                    </button>
                </div>
            </div>
        </div>
    )
}
