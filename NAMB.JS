
// function countnumber(n) {
//     if (n == 0) return 1

//     n=Math.abs(n)
//     let count=0

//     while (n > 0) {

//         n = Math.floor(n / 10)

//         count=count+1
//     }

//     return count
// }

// let n = 3456

// let result = countnumber(n)
// console.log(result)



// function palindram(n) {

//     let ncopy = n
//     let rev = 0
//     while (n > 0) {

//         let rem = n % 10

//         rev = (10 * rev) + rem

//         n = Math.floor(n / 10)
        
        
//     }

//     if (rev == ncopy) {
//         return true///
//     }
//     else {
//         return false
//     }
    
// }


// let n = 121

// let result = palindram(n)
// console.log(result)




//reverse integer




// function reverse(x){

//     let xcopy=x
//     x=Math.abs(x)
//     let rev=0 

//     while(x>0){

//         let last = x %10
//         rev= (10*rev)+last
//         x=Math.floor(x/10)

//     }

//     return (xcopy<0 ? -rev : rev)

// }




// let x=123467
// let result = reverse(x)
// console.log(result)






// function removeduplicatesinnondeceasindorder(nums) {

//     let x = 0 
//     for (let i = 0; i < nums.length; i++){

//         if (nums[i] > nums[x]) {
//             x = x + 1
//             nums[x] = nums[i]
//         }
//     }
//     return x+1

    
// }


// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

// let result = removeduplicatesinnondeceasindorder(nums)
// console.log(result)


// function removeduplicates(nums,val) {

//     let x = 0 
//     for (let i = 0; i < nums.length; i++){

//         if (nums[i] != val) {

//             nums[x] = nums[i]
//             x=x+1
//        }
//     }
//     return x

    
// }


// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

// let result = removeduplicates(nums,2)
// console.log(result)




// function reversestring(num){

//     let length = num.length
//     let halflength = Math.floor(length/2)

//     for(let i=0;i<halflength;i++){
//         let temp = num[i]
//         num[i]=num[length-1-i]
//         num[length-1-i] = temp
//     }

//     return num


// }



// let num =['h','e','l','l','o']

// let result = reversestring(num)
// console.log(result)




// function besttimesell(prices){

//     let min = prices[0]
//     let maxprofit = 0 

//     for(let i=1; i<prices.length; i++){
        
//         if(prices[i]-min > maxprofit){
//             maxprofit = prices[i]-min
//         }
//         if(prices[i] < min){
//             min = prices[i]
//         }

//     }

//     return maxprofit
// }




// let prices=[7,1,5,3,6,4]

// let result = besttimesell(prices)

// console.log(result)












function mergesort(num1,m,num2,n){


    n1copy=num1.slice(0,m)
    let p1=0
    let p2=0
    for(let i=0; i<m+n; i++){

        if (p2 >= n || (n1copy[p1]<num2[p2] && p1<m)){
            num1[i] = n1copy[p1]
            p1++
        }

        else{
            num1[i] = num2[p2]
            p2++
        }


    }
    return num1
}



num1 = [1,2,3,0,0,0], m = 3, num2 = [2,5,6], n = 3

let result = mergesort(num1,m,num2,n)

console.log(result)


// function mergesort(num1,m,num2,n){

//     p1=m-1
//     p2=n-1

   

//     for(let i = m+n-1; i>=0;i--){

//          if(p2<0) {

//          break;
//     }

//         if( p1>=0 && num1[p1] > num2[p2]){

//             num1[i] = num1[p1]
//             p1--
//         }

//         else{
//             num1[i]=num2[p2]
//             p2--
//         }
//     }
//     return num1
// }



// num1 = [1,2,3,0,0,0], m = 3, num2 = [2,5,6], n = 3

// let result = mergesort(num1,m,num2,n)

// console.log(result)







// Given a binary array nums, return the maximum number of consecutive 1's in the array.

//  Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


// function consecutive(nums){

//     let currcount=0
//     let maxcount=0

//     for(let i=0;i<nums.length;i++){

//         if(nums[i] == 1){

//             currcount++

//         }
//         else{
//             maxcount=Math.max(currcount,maxcount)
//             currcount=0
//         }

//     }
//     return Math.max(currcount,maxcount)
// }

// let nums = [1,1,0,1,1,1,]
// let result = consecutive(nums)

// console.log(result)



// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
//  2 is the missing number in the range since it does not appear in nums.


// var missingNumber = function(nums) {

//      nums.sort((a, b) => a - b);

//     if(nums[0] !=0) return 0;
//     for(let i=1;i<nums.length;i++){

//         if(nums[i] != nums[i-1]+1){
//             return nums[i-1]+1

//         }
//     }

//     return nums.length

// };


// var missingNumber = function(nums) {

//     let n = nums.length

//     let total_sum = (n * (n+1))/2

//     let sum_1=0

//     for(let i=0;i<nums.length;i++){

//         sum_1+=nums[i]
//     }
    
//     return total_sum - sum_1
    
// };




// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1



//First Approach




// function find_single_one(nums){

// let hash={}

// for(let i=0;i<nums.length;i++){

//     if(!hash[nums[i]]){
//         hash[nums[i]] = 1
//     }
//     else{
//         hash[nums[i]] = hash[nums[i]]+1
//     }
// }

// for(let i=0; i<nums.length; i++){
//     if(hash[nums[i]] ==1){
//         return nums[i]
//     }

// }
// }

// nums=[4,1,2,1,2]

// let result = find_single_one(nums)

// console.log(result)



//Second Approach


// function find_single_one(nums){

//     let xor=0

//     for(let i=0;i<nums.length;i++){
//          xor=xor^nums[i]

//          return xor

//     }
// }




// nums=[4,1,2,1,2]

// let result = find_single_one(nums)

// console.log(result)





// function  recursion(num){


//     if(num < 1){
//         return 
//     }

//     console.log(num)

//     num=num-1
//     recursion(num)


// }



// let num = 10

// recursion(num)



//Print 1 to N using Recurssion 



// let n=10
// function recursion(x){

//     if(x>n){
//         return
//     }

//     console.log(x)

//     x=x+1 

//     recursion(x)
// }

// let x=1

// recursion(x)


// function sum_of_numbers(num){

//     if (num === 0 ) return 0

//     return num + sum_of_numbers(num-1)

// }


// let num = 5

// let result = sum_of_numbers(num)
// console.log(result)





// function sum_of_arrry(n){

//     if (n == 0) return arr[0]

//     return arr[n] + sum_of_arrry(n-1)

// }

// let arr = [5,3,2,0,1]

// let result = sum_of_arrry(arr.length-1)
// console.log(result)


// return sum of odd numbers in array 

// function sum_of_arrry(n){

//     isodd = (arr[n] % 2 != 0)

//     if (n == 0) return isodd ? arr[0] : 0

//     return (isodd ? arr[n] :0 )+ sum_of_arrry(n-1)

// }

// let arr = [5,3,2,0,1]

// let result = sum_of_arrry(arr.length-1)
// console.log(result)


//factorial of n using recursion

// function fact(n){

//     if (n == 1) return 1

//      return n*fact(n-1)

// }


// let n=5
// let result = fact(n)
// console.log(result)





//Power of two

// var isPowerOfTwo = function(n) {
    
//     if(n==1) return true;

//     else if ((n%2 != 0) || n<1) return false

//     return isPowerOfTwo(n/2);
// };


console.log( 2%2 == 0)











