/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//   let firstVal = '';
//   while (l1.next) {
//     firstVal + l1.val;
//   }
//   firstVal = firstVal.reverse();
//   let secondVal = '';
//   while (l2.next) {
//     secondVal + l2.val;
//   }
//   secondVal = secondVal.reverse();
//   const finalVal = parseInt(secondVal) + parseInt(firstVal);
//   return finalVal.toString().reverse();

// };

var addTwoNumbers = function(l1, l2) {
  let firstVal = '';
  while (l1.next) {
    firstVal + l1.val;
  }
  firstVal = firstVal.reverse();
  let secondVal = '';
  while (l2.next) {
    secondVal + l2.val;
  }
  secondVal = secondVal.reverse();
  const finalVal = parseInt(secondVal) + parseInt(firstVal);
  return finalVal.toString().reverse();

};
addTwoNumbers();