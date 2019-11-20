//bigocheatsheet.com
//bubble sorter
let nums = [10,5,3,8,2,6,4,7,9,1];

//Try and sort the array nums.

function bubble(nums) {
    do {
         var swapped = false;
        for (let i = 0; i < nums.length; i++) {
            //do stuff
            if (nums[i + 1 < nums [i]]) { //5 < 10
                let temp = nums[i]; //nums i gonna be store into temp because 5 < 10
                nums[i] = nums[i + 1];// so 10 is going to be 5 for temporaliy
                nums[i + 1] = temp; // then put switch spots with 10.
                swapped = true;
            }
        }
    } while (swapped);
    
    console.log(nums);
    
}

function insertion(nums) {
    //insertion sorter
    //snapshots deduplicate
   
        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                
                if (nums[i] < nums[j]) {
                    const splice = nums.splice(i, 1); //
                    nums.splice(j, 0, splice[0]);// insert something in that array
                }
            }
        }
    console.log(nums)
    
}
insertion(nums);