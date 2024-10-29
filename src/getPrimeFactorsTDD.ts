export function getPrimeFactorsTDD(num: number): number[] {
  let primeFactors: number[] = [];
  for(let divisor = 2; divisor<=num; divisor++){
    while (num % divisor == 0) {
      primeFactors.push(divisor);
      num = num/divisor;
    }
  }
  return primeFactors;
}
