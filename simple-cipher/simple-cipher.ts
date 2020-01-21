const randomChar = () => toChar(Math.floor(Math.random() * 26))
const toOrd = (char: string) => char.charCodeAt(0) - 97
const toChar = (ord: number) => String.fromCharCode(ord + 97)

const ENCODE = 1
const DECODE = -1

class SimpleCipher {
  public key: string

  constructor(key?: string) {
    if (typeof key !== "undefined") {
      this.validateKey(key)
    }
    this.key = key || this.generateRandomKey()
  }

  private validateKey(key: string) {
    const validateRe = /^[a-z]+$/
    if (!validateRe.test(key)) {
      throw new Error("Bad key")
    }
  }

  private generateRandomKey() {
    return [...Array(100).keys()].map(randomChar).join("")
  }

  private applyCipher(value: string, direction: typeof ENCODE | typeof DECODE) {
    const applyToChar = (char: string, index: number) => {
      const code = toOrd(char)
      const keyLength = this.key.length
      const keyChar = this.key[(index + keyLength) % keyLength]
      const keyCode = toOrd(keyChar)

      const newCode = (code + direction * keyCode + 26) % 26
      return toChar(newCode)
    }
    return value
      .split("")
      .map(applyToChar)
      .join("")
  }

  encode(value: string) {
    return this.applyCipher(value, ENCODE)
  }

  decode(value: string) {
    return this.applyCipher(value, DECODE)
  }
}

export default SimpleCipher