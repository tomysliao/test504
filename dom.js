const testMode = 0;
// Start date of 台灣 國小 109學年度 下學期 第ㄧ周 : 2021-02-21
var dateStart = new Date("2021-02-21T00:00:00.000+08:00");
//count time diff, calculate week# for even/odd weeks
var msecStart = dateStart.getTime();
var msecNow = Date.now();  // get msec of Local-Time
var weekNo =  Math.floor((msecNow - msecStart) / ( 7* 24 * 3600000)) + 1;

var timenow = Math.floor((msecNow-msecStart))


// get Today's Date & Week String
// const dateNow = new Date();
const dateNow = new Date('2021-06-08T14:56:00.000+08:00'); // fake now for tessting

const weekdayStr = [ '日','ㄧ','二','三','四','五','六' ];
var weekDay = dateNow.getDay();
console.log(weekDay);

// assembly display string
var msgWeek = '今天是 ' + dateNow.toLocaleDateString();
msgWeek += ' 第' + weekNo + '周 ' ;
if ((weekNo % 2) == 0) {  msgWeek += " (雙周) "; } 
else { msgWeek += " (單周) "; };

msgWeek += '星期' + weekdayStr[dateNow.getDay()] ;

console.log(msgWeek);
document.getElementById("weekmsg").innerHTML = msgWeek ;

// 

var date = dateNow.getDay();
console.log('date=',date);

var tdEl = document.getElementsByTagName('td');
//
// check which session this time is
//
//console.log('Now: ' + Date().toLocaleString().slice(16,21));
//console.log(tdEl);
function sessionNum () {
  const timeStrNow = dateNow.toLocaleTimeString('en-US', { hour12: false});
  console.log('now=', timeStrNow);
  if ( timeStrNow >= "14:40" && timeStrNow <="15:30") { return 7; }
  else if ( timeStrNow >= "14:40" && timeStrNow <="15:30") { return 7; }
  else if ( timeStrNow >= "13:50" && timeStrNow <="14:40") { return 6; }
  else if ( timeStrNow >= "12:00" && timeStrNow <="13:50") { return 5; }
  else if ( timeStrNow >= "11:10" && timeStrNow <="12:00") { return 4; }
  else if ( timeStrNow >= "10:15" && timeStrNow <="11:00") { return 3; }
  else if ( timeStrNow >= "09:35" && timeStrNow <="10:15") { return 2; }
  else if ( timeStrNow >= "08:35" && timeStrNow <="09:35") { return 1; } 
  else return 0;
}
console.log( 'Current Session Number is ' + sessionNum());

// (sessionNum,date,weekNo)
function nowSess(sessionNum,date,weekNo){

  if (date >=1 && date <=5) {
    if(((weekNo % 2) != 0) ){
      date-=1;
      
      
      var now = Math.floor(sessionNum*5+date)
      console.log('now='+now); 
      return now;
    }
    else if(((weekNo % 2) == 0)){
      date-=1;
      
      
      var now = Math.floor(sessionNum*5+date+40);
      console.log('now='+now);    
      return now;

    }

  }
  else{
    return 80;
  }
  
}
console.log(nowSess(sessionNum (),weekDay,weekNo))
var nowTime = nowSess;
//console.log(nowTime(1,1))

tdEl[nowTime(sessionNum(),weekDay,weekNo)].style.backgroundColor = "red";
//tdEl[75].style.backgroundColor = "red";
// console.log(tdEl[90]);

// tdEl[nowTime(sessionNum (),weekDay,weekNo)].style.textDecoration = "none";
// tdEl[nowTime(sessionNum (),weekDay,weekNo)].style.color = '#ffffff';

console.log(tdEl)