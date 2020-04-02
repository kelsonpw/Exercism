export class GradeSchool {
  currentRoster = {};

  roster() {
    return Object.entries(this.currentRoster).reduce(
      (acc, [k, v]) => ({
        ...acc,
        [k]: [...v]
      }),
      {}
    );
  }

  add(student, grade) {
    this.currentRoster[grade] = [
      ...(this.currentRoster[grade] || []),
      student
    ].sort();
  }

  grade(gradeNumber) {
    return [...(this.currentRoster[gradeNumber] || [])];
  }
}
