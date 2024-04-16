
const HiddenCards = ({ card, selectedChoice}) => {

    
    const clickedCover = () => {
        selectedChoice(card);
    }
    
    return (
    <>
        <div>
            <img src={card.src} alt="reveal" />
            <img src=".src\images\Cover.png" alt="Cover" 
            className="Cover" onClick={clickedCover}/>
        </div>
    </>
    )
}
export default HiddenCards;