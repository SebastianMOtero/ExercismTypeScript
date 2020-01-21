export default class Clock {
    constructor(private hours: number, private minutes: number = 0) { }

    plus = (minutes: number) => {
        return new Clock(this.hours, this.minutes + minutes)
    }

    minus = (minutes: number) => {
        return new Clock(this.hours, this.minutes - minutes)
    }

    toString() {
        const minutes = this.hours * 60 + this.minutes
        const rolledOverTotalMinutes = (minutes % (24 * 60) + (24 * 60)) % (24 * 60)

        const rolledOverHour = Math.floor(rolledOverTotalMinutes / 60)
        const rolledOverMinutes = rolledOverTotalMinutes % 60

        return `${rolledOverHour.toString().padStart(2, '0')}:${rolledOverMinutes.toString().padStart(2, '0')}`
    }

    equals(otherClock: Clock) {
        return this.toString() === otherClock.toString()
    }
}


// (0, 1723)
// 1723 / 60  me da 28 horas 43 min
// 28 / 24 1 dia y 4 horas