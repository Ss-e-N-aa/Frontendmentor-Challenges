import profileImg from '../assets/image-jeremy.png'

export default function ProfileCard() {

    function handleClick(e) {
        e.preventDefault();
    }

    return (
        <div className="profileContainer">
            <div className="profileHeader">
                <div className="profileContent">
                    <img src={profileImg} alt="profile image" />
                    <div className="profileInfo">
                        <span>Report for</span>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
            </div>
            <div className="linksContainer">
                <a onClick={handleClick}>Daily</a>
                <a onClick={handleClick}>Weekly</a>
                <a onClick={handleClick}>Monthly</a>
            </div>
        </div>
    );
}
