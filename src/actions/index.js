export const add = amount => {
  return {
    type: "ADD",
    amount: amount
  };
};

export const reset = () => {
  return {
    type: "RESET"
  };
};
