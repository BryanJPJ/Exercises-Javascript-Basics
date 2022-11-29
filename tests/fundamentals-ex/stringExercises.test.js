import { concatenateStrings, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test ('should say Hello', () => {
        /* agrega la línea que falta */
        const word = "Hello";
         const result = returnHello(word);
        expect(result).toBe('Hello');
    });

    test ('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const word = 'Hello World'
        const result = returnAString(word);
        expect(result).toBe('Hello World');
    });

    test ('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
        const firstWord = 'I';
        const secondWord = 'Love';
        const thirdWord = 'JS';
        const result = firstWord.concat(" ", secondWord, " ", thirdWord);
        expect(result).toBe('I Love JS');
    });

    test ('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        const dog = 'dog';
        const result = dog.charAt(2);
        expect(result).toBe('g');
    });

    test ('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        const phrase = "Once upon a time!!!";
        const wordToSearch = 'Butterfly';
        const result = phrase.indexOf(wordToSearch);
        expect(result).toEqual(-1);
    });

    test ('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */
        let phrase = 'Give a Man a Fish';
        let result = phrase.replace("Fish","Pussy Cat");
        expect(result).toBe('Give a Man a Pussy Cat');
    });

    test ('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        let phrase = 'Ride Him, Cowboy!';
        let result = phrase.toUpperCase().slice(0,-1);
        expect(result).toBe('RIDE HIM, COWBOY');
    });

    test ('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        let phrase = '    Hands Down    ';
        let result= phrase.trim();
        expect(result).toBe('Hands Down');
    });
});