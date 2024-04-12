const letterSpaces = document.getElementById('letterSpaces');

let phrase = "this is a test phrase"

function letterSpace() {
    return (
        <p className='letterBox'></p>
    );
};

function addLetterSpacesToPage() {
    const numOfSpaces = phrase.length;

    for (let i = 0; i < numOfSpaces; i++) {
        letterSpaces.innerHTML += letterSpace();
    }
    
}