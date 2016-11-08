function head_foot() {
	let header = document.createElement("header");
	let footer = document.createElement("footer");
	let x = document.getElementById("top")
	let body = document.getElementById("body")
	x.appendChild(footer);
	x.insertBefore(header,body);
	
}

head_foot()