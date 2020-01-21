export default class Rational {
    public a1: number = 0;
    public b1: number;

    constructor(n1: number, n2: number) {
        this.a1 = n1;
        this.b1 = n2;
    }

    lower(num1: number, num2: number) : Rational {
        if (num2%num1 === 0) {
            let n2 = num2 / Math.abs(num1);
            let n1 = num1 / Math.abs(num1);
            return new Rational(n1, n2)
        }
        if (num1%num2 === 0) {
            let n2 = num2 / Math.abs(num2);
            let n1 = num1 / Math.abs(num2);
            return new Rational(n1, n2)
        }
        return new Rational(num1, num2);
    }

    add(secondRational: Rational) : Rational {
        let num1 = this.a1 * secondRational.b1 + secondRational.a1 * this.b1;
        let num2 = Math.abs(this.b1 * secondRational.b1);

        return this.lower(num1, num2);
    }

    sub(secondRational: Rational) : Rational {
        let num1 = this.a1 * secondRational.b1 - secondRational.a1 * this.b1;
        let num2 = Math.abs(this.b1 * secondRational.b1);

        return this.lower(num1, num2);
    }

    mul(secondRational: Rational) : Rational {
        let num1 = this.a1 * secondRational.a1 ;
        let num2 = Math.abs(this.b1 * secondRational.b1);

        return this.lower(num1, num2);
    }

    div(secondRational: Rational) : Rational {
        let num1 = this.a1 * secondRational.b1 ;
        let num2 = this.b1 * secondRational.a1 ;

        if (num1<0 && num2<0) {
            num1 = Math.abs(num1);
            num2 = Math.abs(num2);
        }

        if (num1>0 && num2<0) {
            num1 = num1*-1
            num2 = Math.abs(num2);
        }
        return this.lower(num1, num2);
    }

    abs() : Rational {
        this.a1 < 0 ? this.a1 = this.a1 * -1 : null
        this.b1 < 0 ? this.b1 = this.b1 * -1 : null
        return this
    }

    exprational(pow: number) : Rational {
        this.a1 = Math.pow(this.a1, pow)
        this.b1 = Math.pow(this.b1, pow)
        return this;
    }

    expreal(input: number) : Number{
       // root(x^a, b), where root(p, q) is the qth root of p.
       return Math.round(Math.pow(Math.pow(input, this.a1), 1/this.b1))

    }

    reduce() {
        let asd = this.lower(this.a1, this.b1);
        if (asd.a1>0 && asd.b1<0) {
            asd.a1 = asd.a1*-1
            asd.b1 = Math.abs(asd.b1);
        }

        return asd;
    }
}