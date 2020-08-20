import { evaluate } from "mathjs";

export const solve = expression => {
  try {
    return evaluate(expression);
  } catch (e) {
    return null;
  }
};
