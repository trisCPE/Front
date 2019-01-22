




function generateKey() {
	var d = new Date().getTime();
	
	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}
	
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

return uuid;
}

function printKey(){
	document.getElementById("apikey").value = generateKey();
	addRow(document.getElementById("apikey").value);

}

function addRow(value){ 

	let tr = document.createElement('tr');
	let tab = document.getElementById("tableau");  
    tab.appendChild(tr);

let td = document.createElement('td')
tab.appendChild(td);
let tdText = document.createTextNode(value);
td.appendChild(tdText);

}  





