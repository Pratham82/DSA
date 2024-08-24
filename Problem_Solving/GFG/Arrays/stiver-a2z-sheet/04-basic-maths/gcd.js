// brute force sol soln
// function findGcdAndLcm(a, b) {
//   const getGCD = (a, b) => {
//     let gcd = 0;
//     const end = Math.min(...[a, b]);
//     for (let i = 1; i <= end; i++) {
//       if (a % i === 0 && b % i === 0) {
//         gcd = i;
//       }
//     }
//     return gcd;
//   };

//   const getLCM = (a, b) => {
//     return (a * b) / getGCD(a, b);
//   };

//   return [getGCD(a, b), getLCM(a, b)];
// }

// optimized apporach (Euclidean Algorithm)

// function findGcdAndLcm2(a, b) {
//   const getGCD = (a, b) => {
//     if (a > 0 && b > 0) {
//       if (a > b) {
//         a = a % b;
//       } else {
//         b = b % a;
//       }
//     }
//     if (a === 0) {
//       return b;
//     }
//     return a;
//   };

//   const getLCM = (a, b) => {
//     return (a * b) / getGCD(a, b);
//   };

//   return [getLCM(a, b), getGCD(a, b)];
// }

// most optimized by gfg
function lcmAndGcd(a, b) {
  // find gcd recursively
  const getGCD = (a, b) => {
    if (a === 0) {
      return b;
    }
    return getGCD(b % a, a);
  };
  const gcd = getGCD(a, b);
  const lcm = (a * b) / gcd;
  return [lcm, gcd];
}

// console.log(findGcdAndLcm(9, 12));
// console.log(findGcdAndLcm(14, 8));
// console.log(findGcdAndLcm(5, 10));

console.log(lcmAndGcd(9, 12));
console.log(lcmAndGcd(14, 8));
console.log(lcmAndGcd(5, 10));
