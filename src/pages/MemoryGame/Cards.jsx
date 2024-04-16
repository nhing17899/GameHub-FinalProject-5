import Cover from "../../images/Cover.png";


const HiddenCards = ({ card, selectedChoice, flipped}) => {

    
    const clickedCover = () => {
        selectedChoice(card);
    }
    
    return (
    <>
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <div>
                    <img className="reveal" src={card.src} alt="reveal" />
                    <img src= {Cover} alt="Cover" 
                    className="Cover" onClick={clickedCover}/>
                </div>
            </div>
        </div>
    </>
    )
}
export default HiddenCards;