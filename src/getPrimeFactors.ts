export function getPrimeFactors(num: number): number[] {
  let primeFactors: number[] = [];
  let currentNum: number = num;
  for(let distributer: number = 2; distributer<=currentNum; distributer++) {
    while (currentNum > 1 && currentNum % distributer == 0) {
      primeFactors.push(distributer);
      currentNum = currentNum / distributer;
    }
  }
  return primeFactors;
}