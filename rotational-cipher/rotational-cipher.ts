export function changeLetter(letter: string, isCapital: boolean, rot: number): string {
    let offset = isCapital ? 65 : 97
    return String.fromCharCode(((letter.charCodeAt(0)-offset+rot)%26)+offset);
}

export default class RotationalCipher {
    static rotate(text: string, rot: number): string{ 
        return text.replace(/[a-zA-Z]/g, (letter: string) => letter < 'Z' ? 
        changeLetter(letter,true, rot) : changeLetter(letter,false, rot));
    }
}
