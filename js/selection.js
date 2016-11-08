function addImgFunc(derp) {
	var allImg = document.getElementsByClassName(derp)
	for(i=0;i<allImg.length;i++){
		allImg[i].setAttribute("id","img"+i)
		allImg[i].setAttribute("onclick","imageSelect(this.id)")
	}
}

function imageSelect (id) {
	var ModImg = document.getElementById("mainImg")
	ModImg.src=document.getElementById(id).src;
	document.getElementById("mainText").innerHTML = document.getElementById(id).nextElementSibling.innerHTML;
}