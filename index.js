// 1)Largest Odd Number in String



// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.



//    ANS


// function largestOddSubstring(num) {
//     for (let i = num.length - 1; i >= 0; i--) {
//         let c = num[i];
//         if (parseInt(c) % 2 === 1) {
//             return num.slice(0, i + 1);
//         }
//     }
//     return "";
// }

// // Example usage
// let num1 = "52";
// let res1 = largestOddSubstring(num1);
// console.log(res1);  // Output: "5"

// let num2 = "4206";
// let res2 = largestOddSubstring(num2);
// console.log(res2);  // Output: ""

// let num3 = "35427";
// let res3 = largestOddSubstring(num3);
// console.log(res3);  // Output: "35427"





// 2) A warehouse stores the records of certain items.

// A record office is checking for the items and quantity of records based on the rank number.

// code: {rankNum:10, Item: 'A', qty: 100}, {rankNum:100, Item: 'B', qty: 10}

// Approach: Follow these steps to manage and query warehouse records based on rank numbers. First, store each record in a list, including the rank number, item name, and quantity. Next, sort these records by rank number to make searching more efficient. Then, implement a search method to find a record by its rank number. This method involves checking each record in the list until you find a match, at which point you retrieve the item and its quantity. Finally, test your method by searching for various rank numbers to ensure it accurately identifies existing records and handles cases where records are not found. This structured approach allows you to manage and query warehouse records based on rank numbers efficiently.





// ANS 




// STEP 1) Store the records 

// let records = [

//     {rankNum:10,Item:'A',  qty:100 },
//     {rankNum:100, Item:'B', qty:10}
    
    

// ];

// //STEP 2) sort the records by rank Number 

// records.sort((a,b)=>a.rankNum - b.rankNum);


// // STEP 3) Implement the search method 
// function findRecordByRank(records,rankNum){

//     for(let record of records){

//         if(record.rankNum === rankNum){
//             return record;
//         }
//     }

//     return null;
// }

// let result = findRecordByRank(records,101);

// if(result){
//     console.log(`Item:${result.Item},Quentity:${result.qty}`)
// }
// else{
//     console.log("Record Not found")
// }





//  3). Write the code for the sum of digits of a number by reducing the number to a single digit using recursion.

//  To reduce a number to a single-digit sum using recursion in JavaScript, you first create a function to calculate the sum of its digits. This function repeatedly adds the last digit of the number (using the modulo operation) to the sum of the remaining digits (achieved by integer division). Then, you create another function that checks if the number is already a single digit and returns it if true. Otherwise, it uses the sum of digits function and recursively processes the result until the number is reduced to a single digit. This method ensures that any number can be reduced to a single-digit sum through a series of recursive calls.


//ANS 

// function sum_of_digit(num){

//     if(num === 0){
//         return 0
//     }

//     res1=(num%10)+(sum_of_digit(Math.floor(num/10)));
//     return res1


// }

// function reduceToSingleDigit(num){

//     if(num <10){
//         return num
//     }

//     res= reduceToSingleDigit(sum_of_digit(num));
//     return
    
    
// }

// let number = 12345

// let singleDigitSum = reduceToSingleDigit(number)
// console.log(singleDigitSum)



// 4). How do you sort an array without using built-in methods?

//  To sort an array without using built-in methods in JavaScript, you can implement the Bubble Sort algorithm. This involves repeatedly stepping through the array, comparing each pair of adjacent elements, and swapping them if they are in the wrong order. After each pass, the largest unsorted element moves to its correct position at the end of the array. This process is repeated for the remaining unsorted portion of the array until no swaps are needed, indicating that the array is sorted. An optimization can be added to stop the algorithm early if a pass completes without any swaps, meaning the array is already sorted. This method ensures the array is sorted by systematically moving the largest elements to their correct positions.


//ANS 



// function sortthearry(arr){

//     n=arr.length
    
//     for(let i=n-1;i>=0;i-- ){

//         for(let j=0;j<=i;j++){

//             if(arr[j]>arr[j+1]){

//                 let temp =arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }

//         }

 

//     }
//     return arr
// }


// let arr=[2,11,4,5,6,4,7]

// let res = sortthearry(arr)
// console.log(res.join(' '))






// 5). Write the code to find the top 5 students who have attended the training for the maximum hours and find the average time.

// Approach: To identify the top 5 students who have attended the training for the maximum hours and calculate the average training time, you start by collecting the students' names and training hours in an array of objects. Next, you sort this array in descending order based on the training hours, so that the students with the highest hours appear first. After sorting, you extract the first five students to determine the top 5 with the most training hours. To find the average training time, sum the training hours of all students and divide this sum by the total number of students. Finally, you print or return the top 5 students along with the average training time. This method ensures you can efficiently identify the top performers and calculate the average training time.


//ANS 

// let students = [
//     {name:'John',hours:120},
//     {name:'Emma',hours:150},
//     {name: 'Olivia',hours: 135},
//     { name: 'Liam', hours: 110 },
//     { name: 'Ava', hours: 160 },
//     { name: 'Sophia', hours: 130 },
//     { name: 'James', hours: 90 },
//     { name: 'Isabella', hours: 145 },
//     { name: 'Benjamin', hours: 95 },
//     { name: 'Lucas', hours: 125 }


// ];

// function findTop5AndAverage(students){

//     students.sort((a,b)=>b.hours - a.hours);
    

//     let top5Students = students.slice(0,5)
    
    
//     function xy(sum,student){
//         sum=sum+student.hours
//         return sum 

//     }

//     let totalhours=students.reduce(xy,0)
    

//     // let n = students.length
//     // var sum=0
//     // for(let i=0;i<n;i++){
//     //     sum=sum+students[i].hours

        
//     // }
//     // console.log(sum)

//     let averagehours = totalhours/students.length


//     // top5Students.forEach(students=> console.log(students))

//     //console.log(`Average training time: ${averagehours.toFixed(2)} hours`);


//     return { top5Students,averagehours}

    
    
    
    


// }


// let result = findTop5AndAverage(students);
// console.log(result.top5Students)
// console.log(result.averagehours)






// 6. Longest Common Prefix

// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
        

//ANS 


// var longestCommonPrefix = function(strs) {

//     let sortstring=strs.sort()
//     let n=strs.length
//     let first = strs[0]
//     let second = strs[n-1]
//     let result=""
 
//     for(let i=0;i<first.length;i++){
 
//      if(first[i] !== second[i]){
//          break;
//      }
//      result+=(first[i])
//  }
 
//  return result 
//  };

//  let strs=["flower","flow","flight"]
//  let res=longestCommonPrefix(strs)



// 7)Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

//ANS

// var isIsomorphic = function(s, t) {
    
//     m1= new Map()
//     m2 = new Map()

//     for (let i=0;i<s.length;i++){
//         s1=s[i]
//         t1=t[i]
        
//         if(!m1.has(s1)){
//             m1.set(s1,t1)

//         }
//         else{
//             if(m1.get(s1) !== t1){
//                 return false
//             }
//         }

//         if(!m2.has(t1)){
//             m2.set(t1,s1)

//         }
//         else{
//             if(m2.get(t1) !== s1){
//                 return false
//             }
//         }
//     }
//     return true
// };


// let s = "egg"
// let t = "add"
// let res =isIsomorphic(s,t)
// console.log(res)



// 8) Palindram Problem

// function palindram(string){
//     let n=string.length
    
//     let left = string[0]
//     let right = string.length-1
    
//     while(left<right){
//         if(left !== right){
//             return false
//         }
//         else{
//             left+=1 
//             right-=1
//         }
//     }
//     return true
// }



// let string = "MADAM"
// let res = palindram(string)
// console.log(res)
 
function reversestring(S){
    let len = S.length 
    let halflen = Math.floor(len/2)
    for(let i=0;i<halflen;i++){
        //swap s[i],s[len-1-i]
        let temp = S[i]
        S[i]=S[len-1-i]
        S[len-1-i]=temp 
    }
    return S
    
}


let S = ["h","e","l","l","o"]

let result = reversestring(S)
console.log(result)