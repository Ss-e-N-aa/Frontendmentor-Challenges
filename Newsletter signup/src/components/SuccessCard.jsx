import successImg from '../assets/icon-success.svg'

export default function SuccessCard() {
    return (
        <div className="successCard">
            <div className="successCardContent">
                <img src={successImg} alt="success icon image" />
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has ben sent to <span>ash@loremcompany.com</span>.Please open it and click the button inside to confirm your subscription.
                </p>
                <button>
                    Dismiss message
                </button>
            </div>
        </div>
    )
}
