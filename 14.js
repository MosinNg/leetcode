const arr = ["flower","flow","flight"];

const fn = (arr) => {
  let res = '';
  if (arr.length === 0 ) return '';
  let maxArrItem = arr[0];
  arr.map((v) => {
    if (v.length > maxArrItem.length) {
      maxArrItem = v;
    }
  });
  

  for (let i = 0; i < maxArrItem.length; i++) {
    const str = maxArrItem.slice(0, i + 1);
    if (arr.filter(v => v.startsWith(str)).length === arr.length) {
      res = str;
    }
  }
  return res;
};

console.log(fn(arr))
