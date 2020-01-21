export default class SpaceAge {
    private secondsInput: number;

    public constructor(public seconds: number)  {
        this.secondsInput=seconds;
    };

    years = () => (this.seconds / 31557600)

    onEarth() {
        return parseFloat((this.years()).toFixed(2))
    }

    onMercury() {
        return parseFloat((this.years() /  0.2408467 ).toFixed(2))
    }

    onVenus() {
        return parseFloat((this.years() / 0.61519726).toFixed(2))
    }

    onMars() {
        return parseFloat((this.years() /  1.8808158).toFixed(2))
    }

    onJupiter() {
        return parseFloat((this.years() / 11.862615).toFixed(2))
    }

    onSaturn() {
        return parseFloat((this.years() / 29.447498 ).toFixed(2))
    }

    onUranus() {
        return parseFloat((this.years() / 84.016846 ).toFixed(2))
    }

    onNeptune() {
        return parseFloat((this.years() / 164.79132 ).toFixed(2))
    }
}
