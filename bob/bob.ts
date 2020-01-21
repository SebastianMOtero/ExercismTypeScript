class Bob {
    hey( input: string ) : string {
        // Your code here
        if (input.split("").filter(x => x!=='\t' && x !==' ' && x !=='\n' && x !== '\r').length === 0 ) {
            return 'Fine. Be that way!'
        }

        if (input.split(" ").filter(x => x!==' ').join("").slice(-1) === '?') {
            if (input === input.toUpperCase()) {
                if ( input.toUpperCase().split('').filter(x => x>= 'A' && x <='Z').length !== 0) {
                    return 'Calm down, I know what I\'m doing!'
                }
            }
            return 'Sure.'
        }

        if (input === input.toUpperCase()) {  //comprobar que haya letras
            if ( input.toUpperCase().split('').filter(x => x>= 'A' && x <='Z').length !== 0) {
                return 'Whoa, chill out!'
            }
        }

        return 'Whatever.'
    }
}

export default Bob