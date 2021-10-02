import {getLetterMatchCount} from "./index";

describe('Test the getLetterMatchCount', ()=> {
    const secretWord = 'party';

    test('Returns the correct count when there are no matching letters', ()=>{
       const letterMatchCount = getLetterMatchCount('bones', secretWord);
       expect(letterMatchCount).toBe(0);
    });

    test('Returns the correct count when there are three matching letters', ()=>{
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('Returns correct count when there are duplicate letters in the guess', ()=>{
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('Make the test fail', ()=>{
        const letterMatchCount = getLetterMatchCount('parka', 'parkaa');
        expect(letterMatchCount).toBe(5);
    });

    test('Make the test fail', ()=>{
        const letterMatchCount = getLetterMatchCount('p', 'ppppp');
        expect(letterMatchCount).toBe(1);
    });
})