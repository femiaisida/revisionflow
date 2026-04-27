const validMarks = {
  Biology: [1,2,3,4,5,6],
  Chemistry: [1,2,3,4,5,6],
  Physics: [1,2,3,4,5,6],
  Maths: [1,2,3,4,5,6,7,8],
};

export function validateQuestion(subject, marks) {
  if (!validMarks[subject]) {
    throw new Error("Invalid subject");
  }

  if (!validMarks[subject].includes(marks)) {
    throw new Error(`Invalid mark (${marks}) for ${subject}`);
  }

  return true;
}
