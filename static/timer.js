const w = window.location

const time = (Time) =>{
  document.getElementById('timer').innerHTML = Time + ":" + 00;
}

if (window.location.href.indexOf("/extemporaneous/") > -1) {  
  time(30)
} else {time(7)}


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);

}

function checkSecond(sec) {
  if(sec < 10 && sec >= 0){
    sec = "0" + sec
  } if (sec < 0){
    sec = "59"
  } else if (sec < 00){
    alert('times up');
  };
  return sec;
}