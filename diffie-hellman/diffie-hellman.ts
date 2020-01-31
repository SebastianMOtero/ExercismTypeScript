export default class DiffieHellman{
    primeN: number;
    generator: number;

    constructor(p: number, g: number){
        if (!this.isPrime(p) || !this.isPrime(g)) { throw new Error(' '); }
        if (p < 2) { throw new Error(' '); }
        this.primeN = p;
        this.generator = g;
    }

    getPublicKeyFromPrivateKey(privateKey: number): number {
        if (privateKey < 2) { throw new Error('private key should be greater than 1'); }
        if (privateKey === this.primeN || privateKey > this.primeN) { throw new Error(''); }
        return this.generator**privateKey % this.primeN;
    }

    getSharedSecret(privateKey: number, publicKey: number): number {
        return publicKey**privateKey % this.primeN;
    }

    isPrime(num: number): boolean {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) { return false }
        }
        return true;
    }
}