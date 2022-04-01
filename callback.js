
//asynchronus
function enrollStudent(callback){
    setTimeout(() => {
      const data  = {  name : "Nitin",    age  : 25 , subject : "javascript"}

      callback(data)
        
    }, 3000);
}

console.log("start");
enrollStudent(function (data){
    setTimeout(() => {
console.log(data)
console.log("end")
    },1000);
});

