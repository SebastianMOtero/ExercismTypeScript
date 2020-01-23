export default class Acronym {
  public static parse(phrase: string): string {
    return (phrase.match(/([A-Z]{1}[a-z]+)|([A-Z]+)|\w+/g) || []).map((word:string) => word[0].toUpperCase()).join("");
  }
}
