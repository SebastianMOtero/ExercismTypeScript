const solution: { [key:string]: number } = {
  A: 0,
  C: 0,
  G: 0,
  T: 0
}

class NucleotideCount {
  static nucleotideCounts(nucleotides: string ): { [key:string]: number } {
    for (const nucleotide in solution) { solution[nucleotide] = 0;}
    if (nucleotides.match(/[^ACGT]/g)) { throw new Error('Invalid nucleotide in strand'); }
    nucleotides.split("").map((nucleotide: string) => { solution[nucleotide]++; }
    );
    return solution;
  }
}

export default NucleotideCount;
