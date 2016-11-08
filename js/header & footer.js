function head_foot() {
	let header = document.createElement("header");
	let footer = document.createElement("footer");
	/*document.getElementsByTagName("html").insertBefore(header,"body");*/
	let x = document.getElementsByTagName("html")
	x.appendChild(footer);
}

head_foot()