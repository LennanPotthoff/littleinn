var collapsed, burgerButton;

function isVisible(sample){
	var sampleRect = sample.getBoundingClientRect();
	if(sampleRect.top >=-75 && sampleRect.bottom <= window.innerHeight + 75){
		return true;
	}
	else{
		return false;
	}
}

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

function scanFoods(){
	var samples = document.querySelectorAll(".sample");
	samples.forEach(function(sample){
		if(isVisible(sample)){
			sample.style.opacity = 1;
		}
		else{
			sample.style.opacity = 0;
		}
	})
}

(function init(){
	collapsed = true;
    burgerButton = document.querySelector(".burgerbutton");
    burgerButton.addEventListener("click", dropDown);
	document.addEventListener("scroll", scanFoods);
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





