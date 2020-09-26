function Time()
{
	var TIME=new Date();
	var bsentence="";
	var date=TIME.getDate();
	var month=(TIME.getMonth()+1);
	var year=TIME.getFullYear()+"&nbsp&nbsp";
	var day=TIME.getDay();
	var week_days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	if(date<10)
	{
		date="0"+date;
	}
	if(month<10)
	{
		month="0"+month;
	}
	bsentence=date+" / "+month+" / "+year+"&nbsp&nbsp"+week_days[day];
	document.getElementById("TheTime").innerHTML=bsentence;
	setTimeout("Time()",1000);
}
function ActualTime()
{
	var TIME=new Date();
	var asentence="";
	var hour=TIME.getHours();
	var minute=TIME.getMinutes();
	var second=TIME.getSeconds();
	if(hour<10)
	{
		hour="0"+hour;
	}
	if(minute<10)
	{
		minute="0"+minute;
	}
	if(second<10)
	{
		second="0"+second;
	}
	asentence=hour+" : "+minute+" : "+second;
	document.getElementById("TheTime1").innerHTML=asentence;
	setTimeout("ActualTime()",1000);
}