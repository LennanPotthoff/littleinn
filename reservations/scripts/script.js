var collapsed, burgerButton, calendarDays, calendarButtons, selectedDate, bookNowBtn, modalBg, closeBtn;

function dropDown(){
		var navPoints;
	if(collapsed){
		navPoints = document.querySelector(".navpointsdropcollapsed");
		navPoints.classList += " navpointsdrop";
		navPoints.classList.remove("navpointsdropcollapsed");
		collapsed = false;
	}
	else{
    	navPoints = document.querySelector(".navpointsdrop");
		navPoints.classList += " navpointsdropcollapsed";
		navPoints.classList.remove("navpointsdrop");	
		collapsed = true;
	}
	
}

function modalPopup(){
	modalBg = document.querySelector(".modal-bg");
	modalBg.classList.add("modal-bgactive");
}

function closeModal(){
	modalBg = document.querySelector(".modal-bg");
	modalBg.classList.remove("modal-bgactive");
}

function setCalendarListeners(){
	setDayListeners();
	calendarButtons = document.querySelector(".fc-right");
	console.log(calendarButtons);
	calendarButtons.addEventListener("click", setDayListeners);
}

function setDayListeners(){
	calendarDays = document.querySelectorAll('.fc-day');
    calendarDays.forEach(function(day){
		day.addEventListener("click", function(){
			console.log(day.dataset.date);
			day.style.backgroundColor = "grey";
			if(typeof selectedDate !== 'undefined'){
				selectedDate.style.backgroundColor = "white";
			}
			if(selectedDate === day){
				day.style.backgroundColor = "grey";
			}
			selectedDate = day;
			
		})
	})
}

(function init(){
	collapsed = true;
    burgerButton = document.querySelector(".burgerbutton");
    burgerButton.addEventListener("click", dropDown);
	closeBtn = document.querySelector(".modal-close")
	closeBtn.addEventListener("click", closeModal);
		window.addEventListener("resize", function(){
		if(screen.width >= 1200){
		var navPoints;
		navPoints = document.querySelector(".navpointsdrop");
		navPoints.classList += " navpointsdropcollapsed";
		navPoints.classList.remove("navpointsdrop");	
		collapsed = true;
		}
	});
})();

window.addEventListener('DOMContentLoaded', setCalendarListeners);