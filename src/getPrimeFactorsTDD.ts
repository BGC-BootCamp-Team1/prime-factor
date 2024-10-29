export function getPrimeFactorsTDD(num: number): number[] {
  let primeFactors: number[] = [];
  if (num % 2 == 0) {
    primeFactors.push(2);
  }
  return primeFactors;
}
