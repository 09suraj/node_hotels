function callback() {
    console.log("Now Callback is Calling")
}

const add = function(a,b,callback) {
    var c =a+b;
    console.log(c);//main function 
    callback();

} 


//add(1,2,callback)

add(2,3,() => console.log("Add Completed") );

