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

export default function ActivityCard({ data, className }) {
    return (
        <div className={`${className} cardContainer`}>
            {imageList[data.title] && (
                <img className='backgroundIcon' src={imageList[data.title]} alt="image" />
            )} *
            <div className="overview">
                <div className="cardContent">
                    <header>
                        <h2>{data.title}</h2>
                        <img src={ellipsisImg} alt="image of an ellipissi icon" />
                    </header>
                    <div className="timeSection">
                        <h1>{data.timeframes.daily.current}hrs</h1>
                        <span>Last day - {data.timeframes.daily.previous}hrs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
