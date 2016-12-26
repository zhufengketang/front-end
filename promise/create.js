function delayed_log(time, message) {
  
  return new Promise( (resolve, reject) => {
    setTimeout(function() {
      console.log(message)
      resolve("success") 
      //reject("rejected")
    }, time)
  })
  
}


var promise = delayed_log(2000, "Hello ")
promise.then( result => {
  console.log(2)
  console.log(" world!")  
})

promise.catch( error => {
  console.log(error)
})
