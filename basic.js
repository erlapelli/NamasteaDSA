//1) // Reverse an array using ExtraSpace   method-1


// function reverseArray(arr,n){

    
//     let ans = new Array(n)
    
//     for(let i = n-1;i>=0; i--){
//         ans[n-i-1]=arr[i]
        
//     }
//     return ans 
    
// }
// let arr=[5,4,3,2,1]
// let n=arr.length
// let res = reverseArray(arr,n)
// console.log(res)



// 2) Reverse the array using recursion method 



// function reverse(arr,start,end){

//     if(start<end){

//         [arr[start],arr[end]]=[arr[end],arr[start]]
//         reverse(arr,start+1, end-1)
//     }
     

   

// }

// let arr=[5,4,3,2,1]

// let n=arr.length

//  reverse(arr,0,n-1)
//  console.log(arr)






//3) count frequency of elements 

// TC = o(n)
//Sc =o(n)

// function count_frequency(arr){

//     let map = new Map();
    
//     for (let item of arr){
//         if(map.has(item)){
//             map.set(item,map.get(item)+1)
//         }
//         else{
//             map.set(item,1)
            
//         }
        
//     }
//     return map 
    
//     }
    
//     let arr = [10, 5, 10, 15, 10, 5]  
//     let res= count_frequency(arr)
//     console.log(res)
 



//4)SELECTION SORT 
// o(n**2)

// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = arr[minIndex];
//         arr[minIndex] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }

// let arr = [8, 6, 2, 5, 1];
// let res = selectionSort(arr);
// console.log(res);



//5)Bubble sort 
// Time complexity (worst and average is (o(n**2)))
// in best Case TC is o(n)

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = n; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
    
//     // Print sorted array
//     console.log(arr.join(" "))
    
// }

// // Example usage
// let arr = [13, 46, 24, 52, 20, 9];
// bubbleSort(arr);


// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = n; i > 0; i--) {
//         let didswap=false
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 didswap=true 
//             }
//         }
//         if(!didswap){
//             break
//         }
//     }
    
//     // Print sorted array
//     console.log(arr.join(" "))
    
// }

// let arr = [1,2,3,4,5,6];
// bubbleSort(arr);





