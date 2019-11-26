var collapsed, burgerButton;

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

(function init(){
	collapsed = true;
    burgerButton = document.querySelector(".burgerbutton");
    burgerButton.addEventListener("click", dropDown);
    console.log("Hello World")
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
