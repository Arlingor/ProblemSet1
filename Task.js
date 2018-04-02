 //JSON----------------

 //  Using JavaScript, add a new action of type notification, with parameters title and message (string values)

 var arr = myjson.actions;
   arr[2] = {
     type: "notification",
     params: {
         title: "Big New World !!!",
         message: "No Message"
     }
 };
//  Set action property of the first action to null and remove the link property

 arr[0].params.action = null; 
 delete arr[0].params.link;
 
 console.log(arr);

 //Underscore.js-------
// Extract action types
 var action = _.filter(myjson.actions);

//  Convert actions array into an object where the key is the actions' type and the value are its params, i.e.:
 var conv = _.pairs(action);


//  Calculate the sum and average for the following input (non-number elements should be ignored): ["0", 2, 4, 6, null, [], 8, 10]
 var arrAll = ["0", 2, 4, 6, null, [], 8, 10];

 function ArrayFactory(arrAll) {

     var s = [];

     for (let i = 0; i < arrAll.length; i++) {
         if (typeof arrAll[i] === 'number') {
             s += arrAll[i];
         }
     }
     var arr = s.split('');

     return arr;
 }

 var newarray = ArrayFactory(arrAll);
 //-----------------------
 //Debug -> 
 function average(newarray) {
     return _.reduce(arr, function (memo, num) {
         return memo + num;
     }, 0) / (arr.length === 0 ? 1 : arr.length);
 };


 function sum(array) {
     return _.reduce(arr, function (memo, num) {
         return memo + num;
     }, 0);
 }

//  Questions
//  In the above task, what would happen if there were two actions of a same type?
 
 // JavaScript------------------------------------

 //  Insert a textarea element into the DOM and fill it with the JSON structure from the first task. Bonus points if JSON in the textarea is nicely formatted.

 var textarea = document.querySelector("textarea");

 var parce = (function () {
     return textarea.value = JSON.stringify(myjson, null, "\t");
 })();

 //Make an AJAX request to www.ipify.org API to retrieve your machine's public IP. Log only the IP address to the console.

 var AJAX = (function loadAJAX() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://api.ipify.org?format=json", true);
    xmlhttp.send();
})(); // The Problem can not be solved with AJAX request: CORS issue 
