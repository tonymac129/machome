setInterval(function () {
  let monday = ["School","Club","Dinner & Free","Coding","Video Editing","Reading","Sleep"];
  let tuesday = ["School","Free","HW & Reading","Typing & Coding","Dinner & Free","Coding","Video Editing","Reading","Sleep"];
  let wednesday = ["School","Club","HW & Reading","Typing & Coding","Dinner & Free","Coding","Video Editing","Reading","Sleep"];
  let thursday = ["School","Club","Dinner & Free","Coding","Video Editing","Reading","Sleep"];
  let friday = ["School","Free","HW & Reading","Coding","Dinner & Free","Coding","Video Editing","Reading","Writing Essays","Free","Sleep"];
  let saturday = ["Breakfast & Free","Reading","Free","Learning Math","Lunch & Free","Video Editing","Free","Sports","Gardening","Dinner & Free","Coding","Video Editing","Reading","Writing Essays","Free","Sleep"];
  let sunday = ["Breakfast & Free","Reading","Free","Learning Math","Lunch & Free","Video Editing","Free","Reading","Gardening","Dinner & Free","Coding","Video Editing","Reading","Sleep"];
}, 60000);


setInterval(function(){
  var time = new Date();
  const text = document.getElementById("time");
  const date = document.getElementById("date");
  const greeting = document.getElementById("greeting");
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var sdate = time.getDate().toString();
  var month = time.getMonth()+1;
  var smonth = month.toString();
  var day = time.getDay();
  var syear = time.getFullYear().toString();
  var sday = smonth+"-"+sdate+"-"+syear;
  var ssecond = second.toString().padStart(2,"0");
  var shour = hour.toString().padStart(2, "0"); // Add leading zero if hour is single digit
  var sminute = minute.toString().padStart(2, "0"); // Add leading zero if minute is single digit
  var current = shour + ":" + sminute+":"+ssecond;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let sgreeting; 
  if (shour<=12) {
    sgreeting = "Good morning!";
  } else if (shour<=18) {
    sgreeting = "Good afternoon!";
  } else {
    sgreeting = "Good night!";
  }

var dayName = days[day];

  text.innerText = current;
  greeting.innerText = sgreeting;
  date.innerText = sday+", "+dayName;
}, 1000);