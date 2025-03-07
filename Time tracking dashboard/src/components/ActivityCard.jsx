import ellipsisImg from '../assets/icon-ellipsis.svg'
import exerciseImg from '../assets/icon-exercise.svg'
import playImg from '../assets/icon-play.svg'
import selfcareImg from '../assets/icon-self-care.svg'
import socialImg from '../assets/icon-social.svg'
import studyImg from '../assets/icon-study.svg'
import workImg from '../assets/icon-work.svg'

const imageList = {
    "Exercise": exerciseImg,
    "Play": playImg,
    "Self Care": selfcareImg,
    "Social": socialImg,
    "Study": studyImg,
    "Work": workImg
}

export default function ActivityCard({ title, timeframe, timeframes, className }) {

    const getPreviousTimeFrame = (timeframe) => {
        switch (timeframe) {
            case 'daily':
                return "Yesterday";
            case 'weekly':
                return 'Last Week';
            case 'monthly':
                return 'Last Month';
            default:
                return "Last Week";
        }
    }

    //  ex , timeframes.daily.current;
    const currentStats = timeframes[timeframe].current;
    const previousStats = timeframes[timeframe].previous;

    return (
        <div className={`${className} cardContainer`}>
            {imageList[title] && (
                <img className='backgroundIcon' src={imageList[title]} alt={`${imageList[title]} icon`} />
            )}
            <div className="overview">
                <div className="cardContent">
                    <header>
                        <h2>{title}</h2>
                        <img className='ellipsisIcon' src={ellipsisImg} alt="image of an ellipissi icon" />
                    </header>
                    <div className="timeSection">
                        <h1>
                            {currentStats}{currentStats === 1 ? "hr" : "hrs"}
                        </h1>
                        <span>
                            {getPreviousTimeFrame(timeframe)} - {previousStats}{previousStats === 1 ? 'hr' : 'hrs'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
