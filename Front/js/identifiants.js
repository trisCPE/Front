
/*Génère les clés d'API*/
const generateKey = () => {
	let d = new Date().getTime();
	
	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}
	
	let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		let r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

return uuid;
}

/*Affiche les clés d'API*/
const printKey = () => {
	const nameError = document.getElementById("nameError");
	let name = document.getElementById("basic-url").value;
	let apiKey = document.getElementById("apikey").value;

	if(name === ''){
		document.getElementById("basic-url").focus();
		nameError.innerHTML = "<p>Please, enter a key name</p>"
	}
	else {
		document.getElementById("apikey").value = generateKey();
		addRow(name);
		printName(printDate());
		printName(document.getElementById("apikey").value);
		name = '';
	}
}

/*Affiche les noms de clé*/
const printName = (value) => {

	let tbody = document.getElementById("body");  
	let td = document.createElement("td");
	let tdText = document.createTextNode(value);

	tbody.appendChild(td);		
	td.appendChild(tdText);
}

/*Affiche la date*/
const printDate = () => {

	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth()+1; //Janvier renvoie 0 
	let yyyy = today.getFullYear();

	if(dd<10) {
    	dd = `0${dd}`;
		} 

    if(mm<10) {
    	mm = `0${mm}`;
	} 

	today = `${dd} / ${mm} / ${yyyy}`;
	return today;
}

const addRow = (value) => {

	let tbody = document.getElementById('body');  
	let tr = document.createElement('tr');
    
    tbody.appendChild(tr);
	let td = document.createElement('td')
	tbody.appendChild(td);
	let tdText = document.createTextNode(value);
	td.appendChild(tdText);

}  






