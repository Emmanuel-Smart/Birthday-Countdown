const targetDate = new Date("sep 11, 2024 10:00:00").getTime();

let interval = setInterval(countDown, 1000);

function countDown()
{
	var currentDate = new Date().getTime();
	var timeToTarget = targetDate - currentDate;
	
	if(timeToTarget <= 0)
	{
		let countDownTimer = document.getElementById("countDownTimer");
         let after = document.getElementById("after");
         let head = document.getElementById("head");


		countDownTimer.style.display = "none";
		head.style.display = "none";
         after.style.display = "block";
		

		clearInterval(interval);
		setTime(0, 0, 0, 0);
	}
	else
	{
		let leftDays = Math.floor(timeToTarget / (1000 * 60 * 60 * 24));
    	let leftHours = Math.floor((timeToTarget % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	let leftMinutes = Math.floor((timeToTarget % (1000 * 60 * 60)) / (1000 * 60));
    	let leftSeconds = Math.floor((timeToTarget % (1000 * 60)) / 1000);

    	setTime(leftDays, leftHours, leftMinutes, leftSeconds);	
	}
}

function setTime(days, hours, minutes, seconds)
{
	document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

