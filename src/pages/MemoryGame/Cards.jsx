
const HiddenCards = ({ card, selectedChoice, flipped}) => {

    
    const clickedCover = () => {
        selectedChoice(card);
    }
    
    return (
    <>
        <div className={flipped ? "flipped" : ""}>
            <div>
                <img src={card.src} alt="reveal" />
                <img src=".src\images\Cover.png" alt="Cover" 
                className="Cover" onClick={clickedCover}/>
            </div>
        </div>
    </>
    )
}
export default HiddenCards;