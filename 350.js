const  nums1 = [1,2,2,1], nums2 = [2,2];
// const nums1 = [4,9,5];
// const nums2 = [9,4,9,8,4];

console.log(nums1, nums2);


const intersect = (nums1, nums2) => {
 const map = new Map(); 
 const resSet = [];
 nums1.map(v => {
   if (map.has(v)) {
    map.set(v, map.get(v) + 1);
   } else {
    map.set(v, 1);
   }
 });
 nums2.map(v => {
  if (map.has(v) && map.get(v) > 0) {
    resSet.push(v);
    map.set(v, map.get(v) - 1);
  }
 });
 return resSet;
}

console.log(intersect(nums1, nums2));