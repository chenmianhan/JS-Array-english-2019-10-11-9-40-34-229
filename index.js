// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a is a string, b is an Array;

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(j = 0; j < a.length; j++) {
    a[j]*=2;
}  
console.log(a);   

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join(","));
// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(var1,var2){
    return  var2-var1;
})
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
if(a.length==0)console.log("the array length is zero.");
else if(a.length==1)console.log(a[0]);
else {
    a.sort();
var max=a[0];
var maxNum=1,curNum=1;
//TODO should output: 'a'
for(j=1;j<a.length;j++){
    if(a[j]==a[j-1])curNum++;
    else {
        if(maxNum<curNum){
            maxNum=curNum;
            max=a[j];
        }
        curNum=1;
    }
}
if(maxNum<curNum){
    maxNum=curNum;
    max=a[a.length-1];
}
console.log(max);
}
