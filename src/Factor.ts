export function getPrimeFactor(number: number):number[] {
  let factors: number[] = [];
  let divisor:number = 2

  while (number >= 2) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }  if(number>1){
    factors.push(number);
  }

  return factors;
}