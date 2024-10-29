export function getPrimeFactorsTDD(num: number): number[] {
  let primeFactors: number[] = [];
  while (num % 2 == 0) {
    primeFactors.push(2);
    num = num/2;
  }
  if (num % 3 == 0) {
    primeFactors.push(3);
  }
  return primeFactors;
}
