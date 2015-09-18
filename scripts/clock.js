var context;
var d;
var str;
function getClock()
{

    //Get Current Time
    d = new Date();
    str = prefixZero(d.getHours(), d.getMinutes(), d.getSeconds());

    //Get the Context 2D or 3D
    context = clock.getContext("2d");
    context.clearRect(0, 0, 100, 25);
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.fillText(str, 15, 25);

}

function prefixZero(hour, min, sec)
{
     var curTime;
     if(hour < 10)
        curTime = "0"+hour.toString();
     else
        curTime = hour.toString(); 

     if(min < 10)
        curTime += ":0"+min.toString();                           
     else
        curTime += ":"+min.toString();  

     if(sec < 10)
        curTime += ":0"+sec.toString();                           
     else
        curTime += ":"+sec.toString();  
    return curTime;
}

setInterval(getClock, 1000);