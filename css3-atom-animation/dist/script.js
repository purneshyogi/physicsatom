//Dont have time to refactor right now
let Dtime = document.getElementById("distime")

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

Dtime.textContent = dateTime


