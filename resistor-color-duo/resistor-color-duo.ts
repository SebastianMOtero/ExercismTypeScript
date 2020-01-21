export class ResistorColor {
  private colors: string[];
  private values = ["black", "brown", "red", "orange", "yellow", 
            "green", "blue", "violet", "grey", "white"];

  constructor(colors: string[]) {
    this.colors = colors;
    if (this.colors.length < 2) {
      throw Error("At least two colors need to be present");
    }
  };


  value = (): number => {
    return 10*this.values.indexOf(this.colors[0]) + this.values.indexOf(this.colors[1])
  };
}
