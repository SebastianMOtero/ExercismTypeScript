class Transcriptor {
    toRna(chain: string ) {
        let sn = ""
        
        chain.split("").map(x => {
            switch(x) {
                case "A":
                    sn += "U"
                    break;
                case "C":
                    sn += "G"
                    break;
                case "G":
                    sn += "C"
                    break;
                case "T":
                    sn += "A"
                    break;
                default:
                    throw new Error('Invalid input DNA.')
            }
        });
        return sn;
    }
}

export default Transcriptor
