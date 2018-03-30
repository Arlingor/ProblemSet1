 
 // Problem Set 1: JSON----------------
 var arr = json.actions; 
 
 arr[2] = {type : "notification",params : {title:"Big New World !!!", message:"No Message"}}; // Add New action of type                                        notification

 arr[0].params.action = null; // Set action property of the first action to null

 delete arr[0].params.link // remove link property

 console.log(arr); 

//  -----------------------------

// -------Problem Set 2: Underscore.js-------

if(typeof _ === 'function') {
    if(typeof _.reduce !== 'undefined') {
        console.log("It Works !!");
    }
  }
//  console.log(result)
console.log("It Doestn't Works !!");
_.extend(arr,{"type":"newway"});
// --------------------------------------------