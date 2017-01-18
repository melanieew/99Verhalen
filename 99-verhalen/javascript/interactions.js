// Hier maak ik alle benodigde variabelen aan //
var like,
	i,
	searchIcon,
	searchText,
	searchField,
	filter,
	filterSection,
	main;

// Dit is het stuk code dat de class "press" toevoegd aan de hartjes. Alle hartjes worden geselecteerd met behulp van getElementsByClassName, omdat alle hartjes dezelfde class dragen. Omdat getElementsByClassname alle elementen met de genoemde class selecteert en deze in een array zit is het nodig om een for loop te gebruiken om te bepalen op welk hartje er geklikt wordt. De funtie "toggle" zorgt er met 'this' voor dat dat er een nieuwe class aan het geklikte hartje gekoppeld wordt. Door gebruik te maken van toggle zorg ik ervoor dat bij de volgende klik de class weer verdwijnt.//

like = document.getElementsByClassName('fa-heart'); 					// variabele 'like' defineren

function toggle() {														// functie voor het toevoegen en verwijderen van de class (opgemaakt in css)	
	this.classList.toggle('press');
}

for (i = 0; i < like.length; i += 1) {									// for loop om te bepalen op welk hartje er geklikt wordt
	like.item(i).onclick = toggle;
}

// Het animeren van de zoekbalk wordt met de volgende code gedaan. Eerst definieer ik de variabelen die van toepassing zijn op de zoekfunctie. Dit doe ik door middel van querySelectoren. Vervolgens zorg ik er met het '.onclick' event voor dat wanneer de gebruiker op het woord 'zoeken' of op het zoek icoon drukt, de functie 'searchToggle' afgevuurd wordt. Deze functie geeft de class 'show' aan het input field in de unordered list.//

searchIcon = document.querySelector('ul li:nth-of-type(1) img');
searchText = document.querySelector('ul li:nth-of-type(1) p');
searchField = document.querySelector('ul li input');

function searchToggle() {
	searchField.classList.toggle('show');

}

searchIcon.onclick = searchToggle;
searchText.onclick = searchToggle;

// Onderstaande code wordt gebruikt voor het animeren van de filter. Hierbij woorden ook eerst drie variabelen gedefineerd. Vervolgens wordt er met behulp van het '.onclick' event de functie 'filterToggle' gestart. Deze functie zet voor twee elementen een nieuwe class aan of uit. //

filter = document.querySelector('section.sorteer img');
filterSection = document.querySelector('section.sorteer');
main = document.querySelector('main');

function filterToggle() {
	filterSection.classList.toggle('clicked');
	main.classList.toggle('opacity');
}

filter.onclick = filterToggle;