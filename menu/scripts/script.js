var collapsed, burgerButton, calendarDays, calendarButtons, selectedDate, bookNowBtn, modalBg, closeBtn, Food, starterTitles, starterDescriptions, starterPrices, pizzaTitles, pizzaDescriptions, pizzaPrices, dessertTitles, dessertDescriptions, dessertPrices, createdFoods, foodWrapperCount;

var startersDone, pizzasDone, dessertsDone = false;

///STARTERS
//////////////////////////////////////////////////

starterTitles = ["BURRATA", "CAMPANA", "VEGGIE CAMPANA (V)", "MIXED OLIVES", "NOCELLARA OLIVES", "BOWL OF SALTED CRISPS", "CAPRESE SALAD", "ORANGE AND FENNEL SALAD", "SIDE SALAD"];

starterDescriptions = ["whole burrata, cherry tomatoes, wild rocket whole burrata, cherry tomatoes and our house bread.", "buffalo mozzarella, prosciutto crudo (cured ham), salame napoli and wild boar salame, wild rocket, radicchio, semi-dried tomato salad and house bread", "vegetarian fior di latte, roasted peppers and artichokes, toasted almonds, kalamata olives, wild rocket, radicchio, semi-dried tomato salad and house bread", "", "Dressed with lemon, ev olive oil", "", "buffalo mozzarella, tomato, fresh basil and e.v olive oil", "fresh fennel, capers, radicchio, fennel seeds, olives, orange and olive dressing, grated parmesan and orange segments", "wild rocket, radicchio, parmesan shavings and balsamic dressing"];

starterPrices = ["6.20", "7.90", "7.90", "3.50", "3.50", "0.80", "2.50", "2.50", "2.50"];

///PIZZAS
//////////////////////////////////////////////////

pizzaTitles =["MARINARA (VE)", "MARGHERITA", "MARGHERITA CON BUFALA", "PORTOBELLO", "SALAME",
"CALABRESE", "TONNO", "TARANTINA", "ANCOZZESE (*WHITE PIZZA)", "CAPRICCIOSA", "CARNI", "ROMAGNOLA"];

pizzaDescriptions = ["Tomato, garlic, oregano, basil, ev olive oil", "Tomato, fior di latte (mozzarella), basil, parmesan and e.v olive oil", "Our margherita, but with a buffalo mozzarella switch", "Tomato, fior di latte, portobello mushroom, basil, oregano, sea salt, parmesan and garlic oil. Great as a white pizza*", "Tomato, fior di latte, napoli salami, basil and e.v olive oil. Great as a white pizza*", "Tomato, fior di latte, basil and spicy n’duja sausage (soft calabrian sausage that melts into the pizza – beware, it’s hot!)", "Tomato, fior di latte, parmesan, tuna, green chilli, red onions, roquito peppers, basil and e.v. olive oil", "Tomato, fior di latte, anchovies, capers, kalamata olives, oregano, basil and e.v olive oil", "Chilli flakes, smoked mozzarella, tuscan sausage, friarielli and e.v olive oil", 
"Tomato, fior di latte, parmesan, prosciutto cotto, kalamata olives, portobello mushroom, artichoke hearts, basil and e.v olive oil", "Tomato, fior di latte, parmesan, salame napoli, salame picante, wild boar salame, red and green chilli, chilli flakes, basil and e.v olive oil", "Margherita, rocket, prosciutto crudo (cured ham), parmesan shavings and e.v olive oil"];

pizzaPrices = ["4.90", "6.50", "8.40", "7.50", "7.90", "8.20", "8.40", "8.90", "8.90", "8.90", "8.90", "8.90"];

///DESSERTS
//////////////////////////////////////////////////

dessertTitles =["TIRAMISU", "TARTUFO", "CHOCOLATE TORTE (V)", "AFFOGATO (V/GF)", "ICE CREAM (V)", "Falooda"];

dessertDescriptions = ["made fresh every day with amaretto and ammaretti biscuits", "Classic Italian dessert", "Served with orange mascarpone", "Shot of espresso over vanilla ice cream (add a liqueur +2.00)", " ", "Falooda is a cold, sweet beverage made with rose syrup, vermicelli & tapioca seeds. Available in Vanilla & Kulfi flavour."];

dessertPrices =["4.00", "2.90", "3.50", "4.50", "2.50", "3.99"]

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

function insertFoods(){
	
	foodWrapperCount = 0;
	createdFoods = [];
    if(!startersDone){
        var index = 0;
        var title, description, price;
		var wrapper;
		while(true){
			while(true){
				if(createdFoods.length !== 3){
					title = starterTitles[index];
                    description = starterDescriptions[index];
                    price = starterPrices[index];
					createdFoods.push("<div class='food'><div class='foodtitle'>" + title + "</div><div class='fooddescription'>" + description + "</div><div class='foodprice'>" + "£" + price + "</div></div>")
					index++;
				}
				if(createdFoods.length === 3 ||index === starterTitles.length){
					var menuSheet = document.querySelector(".menusheet");
					menuSheet.insertAdjacentHTML("beforeend", "<div class='foodwrapper'>" + createdFoods[0] + createdFoods [1] + createdFoods[2] + "</div>");
					createdFoods = [];
					if(index === starterTitles.length) {
						startersDone = true;
						break;
					}
				}
			}
			if(startersDone){
				break;
			}
		}
    }
	
	menuSheet.insertAdjacentHTML("beforeend", "<div class='foodheading'>PIZZAS</div>")
	foodWrapperCount = 0;
	createdFoods = [];
    if(!pizzasDone){
        index = 0;
        title, description, price;
		wrapper;
		while(true){
			while(true){
				if(createdFoods.length !== 3){
					title = pizzaTitles[index];
                    description = pizzaDescriptions[index];
                    price = pizzaPrices[index];
					createdFoods.push("<div class='food'><div class='foodtitle'>" + title + "</div><div class='fooddescription'>" + description + "</div><div class='foodprice'>" + "£" + price + "</div></div>")
					index++;
				}
				if(createdFoods.length === 3 || index === pizzaTitles.length){
					menuSheet = document.querySelector(".menusheet");
					menuSheet.insertAdjacentHTML("beforeend", "<div class='foodwrapper'>" + createdFoods[0] + createdFoods [1] + createdFoods[2] + "</div>");
					createdFoods = [];
					if(index === pizzaTitles.length) {
						pizzasDone = true;
						break;
					}
				}
			}
			if(startersDone){
				break;
			}
		}	
    }
	
	menuSheet.insertAdjacentHTML("beforeend", "<div class='foodheading'>DESSERTS</div>")
	foodWrapperCount = 0;
	createdFoods = [];
    if(!dessertsDone){
        index = 0;
        title, description, price;
		wrapper;
		while(true){
			while(true){
				if(createdFoods.length !== 3){
					title = dessertTitles[index];
                    description = dessertDescriptions[index];
                    price = dessertPrices[index];
					createdFoods.push("<div class='food'><div class='foodtitle'>" + title + "</div><div class='fooddescription'>" + description + "</div><div class='foodprice'>" + "£" + price + "</div></div>")
					index++;
				}
				if(createdFoods.length === 3 || index === dessertTitles.length){
					menuSheet = document.querySelector(".menusheet");
					menuSheet.insertAdjacentHTML("beforeend", "<div class='foodwrapper'>" + createdFoods[0] + createdFoods [1] + createdFoods[2] + "</div>");
					createdFoods = [];
					if(index === dessertTitles.length) {
						dessertsDone = true;
						break;
					}
				}
			}
			if(dessertsDone){
				break;
			}
		}
	}
}

function scanFoods(){
	var samples = document.querySelectorAll(".food");
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

window.addEventListener('DOMContentLoaded', insertFoods);