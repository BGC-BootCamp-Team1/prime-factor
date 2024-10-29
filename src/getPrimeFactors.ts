export function getPrimeFactors(num: number):number[] {
  if (num<=1) return [];

  let primeFactors: number[] = [];
  let currentNum: number = num;
  let distributer: number = num;
    while(currentNum % distributer==0 && distributer>1){
      primeFactors.push(distributer)
      currentNum = currentNum/distributer;
      distributer-= currentNum;
    }
  
  console.log(num);
  console.log(primeFactors);

  return primeFactors;
}