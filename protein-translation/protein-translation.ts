const PROTEIN = ["Methionine", "Phenylalanine", "Leucine", "Serine", "Tyrosine", "Cysteine", "Tryptophan"];

const CODON_PROTEIN = new Map([
    [ "AUG", PROTEIN[0] ], 
    [ "UUU", PROTEIN[1] ], 
    [ "UUC", PROTEIN[1] ],
    [ "UUA", PROTEIN[2] ], 
    [ "UUG", PROTEIN[2] ], 
    [ "UCU", PROTEIN[3] ],
    [ "UCC", PROTEIN[3] ], 
    [ "UCA", PROTEIN[3] ], 
    [ "UCG", PROTEIN[3] ],
    [ "UAU", PROTEIN[4] ], 
    [ "UAC", PROTEIN[4] ], 
    [ "UGU", PROTEIN[5] ],
    [ "UGC", PROTEIN[5] ], 
    [ "UGG", PROTEIN[6] ], 
    [ "UAA", "STOP" ],
    [ "UAG", "STOP" ], 
    [ "UGA", "STOP" ]
]);

class ProteinTranslation {
    static proteins(rna: string) :string[] {
        let translation: string[] = [];
        (rna.match(/\w{3}/g) || []).every((codon: string) => {
            let protein = CODON_PROTEIN.get(codon);
            if (!protein) { throw new Error('Protein doesn\'t exist.')}
            else if(protein === "STOP") { return false; }
            translation.push(protein);
            return true;
        });
        return translation;
    }
}

export default ProteinTranslation
