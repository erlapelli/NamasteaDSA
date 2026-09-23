// function searchfunction(arr,num){
    
//     for(let i=0; i<arr.length; i++){
        
//         if(arr[i] == num){

//             return i
//         }
// }

//     return -1
// }

// let arr= [44,55,66,3,2,1,6]
// let num = 50


// let result = searchfunction(arr,num)

// console.log(result)

// // Count Nagative numbers in array

// function countNagativeNumbers(arr) {
//     let count = 0 
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 0) {
//             count=count+1
//         }
//     }
//     return count
// }
// let arr = [2, -6, 4, 8, 1, -9,-4];
// let result = countNagativeNumbers(arr)
// console.log(result)


// //Find smalleest in array
// function findsmallestinarray(arr) {
//     let smallest = Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < smallest) {
//             smallest=arr[i]
//         }
//     }
//     return smallest
    
// }


// let arr = [2, -6, 4, 8, 1, -9,-4];
// let result = findsmallestinarray(arr)
// console.log(result)

// // Find  Largest in array
// function findLargestinarray(arr) {
//     let largest = -Infinity
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest

// }

// let arr = [2, -6, 4, 8, 1, -9,-4];
// let result = findLargestinarray(arr)
// console.log(result)



// //1) Second largest number in array

// function secondlargest(arr) {
//     if (arr.length < 2) {
//         return null
//     }

//     let Firstlargest = -Infinity
//     let secondlargest = -Infinity

//     for (let i = 0; i<arr.length; i++){

//         if (arr[i] > Firstlargest) {
//             secondlargest = Firstlargest
//             Firstlargest = arr[i]
//         }
    

//         else if (arr[i] > secondlargest && arr[i]!= Firstlargest) {
//             secondlargest = arr[i]
//         }
        
//     }

//     return secondlargest
// }


// let arr = [10,20,8,9,3,5,20]

// let result = secondlargest(arr)

// console.log(result)

// //2) Star patterns 

// //Square pattern
// let n = 4
// for (let i=0; i<n; i++){

//     let row = " "
//     for (let j = 0; j<n; j++){
//         row = row + "* "
//     }
//     console.log(row)
// } 


// let n = 4
// for (let i = 0; i < n; i++){
//     let row = "";

//     for (let j = 0; j <i+1; j++){

//          row = row + "* "

//     }
//     console.log(row)
// }


// let n = 4
// for (let i = 0; i < n; i++){
//     let row = "";

//     for (let j = 0; j<i+1; j++){

//          row = row + " "+ (j+1)

//     }
//     console.log(row)
// }

// let n = 4
// for (let i = 0; i < n; i++){
//     let row = "";

//     for (let j = 0; j <i+1; j++){

//          row = row + " "+ (i+1)

//     }
//     console.log(row)
// }


// let n = 7
// for (let i = 0; i<n; i++){
//     let row = "";
//     for (let j = 0; j<n - i; j++){
//         row = row + " " + (j + 1)
//     }
//     console.log(row)
// }



// let n = 5

// for (let i = 0; i < n; i++){

//     let row = " "
//     let toggle = 1
//     for (let j = 0; j < i + 1; j++){
//         row = row + toggle

//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else {
//             toggle=1
//         }
    
//     }
//     console.log(row)
// }


// let n = 5
// let toggle = 1
// for (let i = 0; i < n; i++){

//     let row = " "
    
//     for (let j = 0; j < i + 1; j++){
//         row = row + toggle

//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else {
//             toggle=1
//         }
    
//     }
//     console.log(row)
// }



// //Write a function that returns the count of digits in a number
//  function countdigits(n) {
//     if (n == 0) return 1;

// // converting negative numbers to positive
//     n = Math.abs(n)
    
//     let count = 0
//     while (n > 0) {
//         n = Math.floor(n / 10)
//         count=count+1
//     }
//     return count 
// }

// let num = 456589
// let result = countdigits(num)
// console.log(result) 

// //Palindram question

// function palindram(n) {
//     let xcopy = n 
//     let rev = 0
//     while (n > 0) {
//         let rem = (n % 10)
//         rev = (10 * rev) + rem
//         n=Math.floor(n/10)
//     }
//     if (rev === xcopy) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let num = 1215
// let result = palindram(num)
// console.log(result)

// //Reverse Integer
// function reverse(n) {
//     let nCopy = n
//     let rev = 0
//      n = Math.abs(n)
//     while (n > 0) {
//         let last = (n % 10)
//         rev = (10 * rev) + last
//         n = Math.floor(n / 10)
        
//     }

//     let limit = Math.pow(2, 31)
//     if (rev < -limit || rev > limit) return 0;
//     return (nCopy < 0) ? -rev : rev;
    
// }


// let num = -321
// let result = reverse(num)
// console.log(result)




// //Remove Duplication from sorted array  non-decreasing order [0,0,1,1,1,2,2,3,3,4]

// function duplicate(nums){
//   let x=0 
//   for(let i=0;i<nums.length;i++){

//     if(nums[i]>nums[x]){
//       x=x+1 
//       nums[x] = nums[i]


//     }
//   } 
//   return x+1 
// }

// let nums = [0,0,1,1,1,2,2,3,3,4]
// let result = duplicate(nums)
// console.log(result)




// //Remove element

// function removeelements(nums,val) {
//     let x = 0 
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] != val) {
//             nums[x] = nums[i]
//             x = x + 1
                 
//         }
//     }
//     return x
// }

// let nums = [3,1,6, 2, 3, 3, 4]

// let result = removeelements(nums,3)
// console.log(result)


// // Reverse string

// function reversestring(S){
//     let len = S.length 
//     let halflen = Math.floor(len/2)
//     for(let i=0;i<halflen;i++){
//         //swap s[i],s[len-1-i]
//         let temp = S[i]
//         S[i]=S[len-1-i]
//         S[len-1-i]=temp 
//     }
//     return S
    
// }


// let S = ["h","e","l","l","o"]

// let result = reversestring(S)
// console.log(result)


// //Best time to buy and sell stacks
// function buyandsellstack(prices) {

//     let min = prices[0]
//     let maxprofit = 0
//     for (let i = 1; i < prices.length; i++){
//         if (prices[i] - min > maxprofit) {
//             maxprofit=prices[i]-min
//         }
//         if (prices[i] < min) {
//             min = prices[i]
//         }
//     }
//     return maxprofit
// }


// let prices = [1, 3, 5, 7, 2, 8, 10]
// let result = buyandsellstack(prices)
// console.log(result)



// //Merge Sorted Array

// //1)Bruteforce apporach 

//  function merge(nums1, m, nums2, n) {
//     for (let i = m; i < nums1.length; i++){
//         nums1[i] = nums2[i - m]
        
//     }
//     return nums1.sort((a,b)=>a-b)

// }




// let nums1 = [1, 2, 3, 0, 0, 0]
// let nums2 = [2, 5, 6]
// let m = 3
// let n = 3

// let result = merge(nums1, m, nums2, n)
// console.log(result) 

// //2)Two pointer method approach 

//  function merge(nums1, m, nums2, n) {
//      let p1 = 0
//      let p2 = 0
//      let ncopy = nums1.slice(0, m)
//      for (let i = 0; i < m + n; i++){
//          if (p2>=n || p1<m && ncopy[p1] < nums2[p2]) {
//              nums1[i] = ncopy[p1]
//              p1++;
//          }
//          else {
//              nums1[i] = nums2[p2]
//              p2++;
//         }
//      }
//      return nums1

// }

// let nums1 = [1, 2, 3, 0, 0, 0]
// let nums2 = [2, 5, 6]
// let m = 3
// let n = 3

// let result = merge(nums1, m, nums2, n)
// console.log(result)


// //optimal approach
//  function merge(nums1, m, nums2, n) {
//      let p1 = m-1
//      let p2 = n-1
     
//      for (let i = m + n - 1; i >= 0; i--){
//          if (p2 < 0) break;
//          if (p1>=0 && nums1[p1] > nums2[p2]) {
//              nums1[i] = nums1[p1]
//              p1--;
//          }
//          else {
//              nums1[i] = nums2[p2]
//              p2--;
//         }
//      }
//      return nums1

// }




// let nums1 = [1, 2, 3, 0, 0, 0]
// let nums2 = [2, 5, 6]
// let m = 3
// let n = 3

// let result = merge(nums1, m, nums2, n)
// console.log(result)



// // Move zeors 
// function moveZeros(nums) {
//     let x = 0
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] !== 0) {
//             nums[x] = nums[i]
//             x++;
//         }
//     }
//     for (let i = x; i < nums.length; i++){
//         nums[i]=0
//     }

//     return nums;

// }


// let nums = [0, 1, 0, 3, 12]
// let result = moveZeros(nums)
// console.log(result)





// // max consequtive onces 



// function max_consequtive_onces(nums) {
//     let curcount = 0
//     let maxcount = 0
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] == 1) {
//             curcount++
//         }
//         else {
//             maxcount = Math.max(curcount, maxcount)
//             curcount =0
//         }
//     }

//     return Math.max(curcount,maxcount)
// }

// let nums = [1, 1, 0, 1, 1, 1]
// let result = max_consequtive_onces(nums)
// console.log(result)






// // missing number 

// function missingnumber(nums) {
//     let n = nums.length
//     let totalsum = n * (n + 1) / 2

//     let partialsum = 0
//     for (let i = 0; i < n; i++){
//         partialsum=partialsum+nums[i]
//     }

//     return totalsum - partialsum
    
// }
// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// let result = missingnumber(nums)
// console.log(result)



// single number TC=o(n) and SC=o(n)

// function singlenumber(nums) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++){
//         if (!hash[nums[i]]) {
//             hash[nums[i]]=1
//         }
//         else {
//             hash[nums[i]]++
//         }
        
//     }

//     for (let i = 0; i < nums.length; i++){
//         if (hash[nums[i]] == 1) {
//             return nums[i]
//         }
//     }
    
// }

// let nums = [4,1,2,1,2]
// let result = singlenumber(nums)
// console.log(result)

//method 2 TC=o(n) SC=o(1)
// function singlenumber(nums) {
//     let xor = 0
//     for (let i = 0; i < nums.length; i++){
//         xor=xor^nums[i]
//     }
//     return xor
  
    
// }

// let nums = [4,1,2,1,2]
// let result = singlenumber(nums)
// console.log(result)



// Q) The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).


// var fib = function(n) {

//     if(n <=1) return n;

//     return fib(n-1)+fib(n-2)
    
// };

// let arr= [4,9,1,0,2,3]

// function linearSearch(arr,target){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1;
// }




// let result = linearSearch(arr , 0)
// console.log(result)


//Binary Search 

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4



let nums = [-1,0,3,5,9,12]

let target = 9

let left =0 

let right = nums.length-1

let result = -1;

while(right >= left){


    let middle = Math.floor(left+right/2)

    if(target == nums[middle]){
        result = middle;
        break;
    }

    else if (target < nums[middle]){
        right = middle-1
    }
    else{
        left = middle+1
    }


}

console.log(result)










