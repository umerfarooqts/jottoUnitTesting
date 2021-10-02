/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word or Input from the user
 * @param {string} secretWord - Secret Word.
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetters  = secretWord.split('');
    const matchingLetters = secretLetters.filter((letter) => {
        let findLetter = guessedWord.indexOf(letter);
        if (findLetter > -1) {
            guessedWord = guessedWord.replace(letter, '-');
            return true;
        }
        return  false;

    });
    return matchingLetters.length;
};