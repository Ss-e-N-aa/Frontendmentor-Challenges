import styles from "./Card.module.css"
import data from "../Recipe.json"
import recipleImg from "./../assets/image-omelette.jpeg"

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <img src={recipleImg} alt="omelette recipe image" />
                <section className={styles.textContainer}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>

                    {/* Highlight Area */}
                    <div className={styles.highlightCard}>
                        <h2 className={styles.highlightTitle}>Preparation time</h2>
                        <ul className={styles.highlightInfo}>
                            {Object.entries(data.preparation_time).map(([key, value], index) => (
                                <li key={index}>
                                    <div className={styles.highlightTexts}>
                                        <span>{`${key}:`}</span>
                                        <p>{value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ingredients Section */}
                    <h3>Ingredients</h3>
                    <ul className={styles.ingredientsInfo}>
                        {data.ingredients.map((i, index) => (
                            <li key={index}>
                                <div className={styles.ingredientsTexts}>
                                    {i}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <hr className={styles.horizontalLine} />

                    {/* Instructions Section */}
                    <section className={styles.instructionsSection}>
                        <h3>Instructions</h3>
                        <ol className={styles.instructionsInfo}>
                            {data.instructions.map((i, index) => (
                                <li key={index}>
                                    <div className={styles.instructionsTexts}>
                                        <h5>{`${i.title}:`}</h5>
                                        <p>{i.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <hr className={styles.horizontalLine} />

                    {/* Nutrition Section */}
                    <section className={styles.tableSection}>
                        <h3>Nutrition</h3>
                        <p>The table below shows nutritional values per serving without the additional fillings.</p>
                        <ul className={styles.nutritionInfo}>
                            {Object.entries(data.nutrition).map(([key, value], index) => (
                                <li key={index}>
                                    <div className={styles.nutritionTexts}>
                                        <h5 className={styles.nutritionKey}>{key}</h5>
                                        <p className={styles.nutritionValue}>{value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </div>
        </div>
    )
}
