function merge(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++){
        nums1[i] = nums2[i - m]
        
    }
    return nums1.sort((a,b)=>a-b)

}




let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]
let m = 3
let n = 3

let result = merge(nums1, m, nums2, n)
console.log(result) 