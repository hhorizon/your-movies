const formatedSum = (sum: number) => {
  return sum.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};

export default formatedSum;
