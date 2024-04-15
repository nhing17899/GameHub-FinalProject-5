export default function Row({ word, markColor, correctWord }) {
    return (
        <div className="row">
            {word.split("").map((letter, index) => {
                let bgClassName = "";
                if (correctWord.includes(letter)) {
                    if (correctWord[index] === letter) bgClassName = "correct";
                    else bgClassName = "misplaced";
                }
                else {
                    bgClassName = "incorrect";
                }
                return (
                    <div className={`letter ${markColor && `${bgClassName}`}`} key={index}>
                        {letter}
                    </div>
                )
            })}
        </div>
    )
}