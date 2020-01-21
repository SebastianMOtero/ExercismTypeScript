export default class GradeSchool {
    protected roster: Map<string, string[]>

    constructor() {
        this.roster = new Map()
    }

    studentRoster = (): Map<string, string[]> => {
        const copied = new GradeSchool()
        this.roster.forEach(
            (value, grade) => value.forEach(
                name => copied.addStudent(name, grade)
            ))
        return copied.roster
    }

    addStudent = (name: string, grade: number | string): void => {
        const currentGradelings = this.roster.get(`${grade}`) || []
        this.roster.set(`${grade}`, [name, ...currentGradelings].sort())        
    }

    studentsInGrade = (grade: number | string): string[] => 
        [...(this.roster.get(`${grade}`) || [])]
}