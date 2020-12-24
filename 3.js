/**
 * @param {string} s
 * @return {number}
 */

// 最暴力的函数 性能无法通过
// var lengthOfLongestSubstring = function(s) {
//   const isRepeatStr = (substr) => {
//     substr = substr.split('');
//     for (let i = 0; i < substr.length; i++) {
//       const now = substr[i];
//       if (substr.slice(substr.indexOf(now) + 1).includes(now)) {
//         return true;
//       }
//     }
//     return false;
//   }
//   let substr = '';
//   let finalstr = '';
//   let maxlen = 0;
//   for (let i = 0;i < s.length;i++) {
//     for (let j = i;j <= s.length;j++) {
//       substr = s.slice(i, j);
//       if (!isRepeatStr(substr) && maxlen < substr.length) {
//         maxlen = substr.length;
//         finalstr = substr;
//       }
//     }
//   }
//   return maxlen;
// };

var lengthOfLongestSubstring = function(s) {
  const occ = new Set();
  let rk = -1, maxlen = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    // console.log('occ', occ);
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      rk++;
      console.log('occ', occ);
    }
    maxlen = Math.max(maxlen, rk - i + 1);
  }
  return maxlen;
};

console.log(
  lengthOfLongestSubstring("bbbbb")
);


// const isRepeatStr = (substr) => {
//   console.log('substr', substr);
//   substr = substr.split('');
//   for (let i = 0; i < substr.length; i++) {
//     const now = substr[i];
//     if (substr.slice(substr.indexOf(now) + 1).includes(now)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isRepeatStr('pwke'))