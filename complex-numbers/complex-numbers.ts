export default class ComplexNumber {
    public real: number;
    public imag: number;
  
    constructor(a: number, b: number) {
      this.real = a;
      this.imag = b;
    }
  
    public get conj(): ComplexNumber {
      return new ComplexNumber(0 + this.real,0 - this.imag);
    }
  
    public get abs(): number {
      return Math.sqrt(this.real ** 2 + this.imag ** 2)
    }
  
    public get exp(): ComplexNumber {
      return new ComplexNumber(
        Math.exp(this.real) * Math.cos(this.imag),
        Math.exp(this.real) * Math.sin(this.imag)
      );
    }
  
    public add(complexNumber: ComplexNumber): ComplexNumber {
      return new ComplexNumber(this.real + complexNumber.real,this.imag + complexNumber.imag);
    }
  
    public sub(complexNumber: ComplexNumber): ComplexNumber {
      return new ComplexNumber(this.real - complexNumber.real,this.imag - complexNumber.imag);
    }
  
    public mul(complexNumber: ComplexNumber): ComplexNumber {
      return new ComplexNumber(
        this.real * complexNumber.real - this.imag * complexNumber.imag,
        this.imag * complexNumber.real + this.real * complexNumber.imag
      );
    }
  
    public div(complexNumber: ComplexNumber): ComplexNumber {
      return new ComplexNumber(
        (this.real * complexNumber.real + this.imag * complexNumber.imag) / 
        (complexNumber.real ** 2 + complexNumber.imag ** 2),
        (this.imag * complexNumber.real - this.real * complexNumber.imag) / 
        (complexNumber.real ** 2 + complexNumber.imag ** 2)
      );
    }
  }