function myFunction() {   
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Change the document"; 
	document.body.appendChild(btn); 
	btn.addEventListener("click",
	function(){
		var header = document.getElementById("L1");
		header.innerHTML = "CGU";
		var para = document.getElementById("P1");
		para.innerHTML = "好棒棒";	
	});
	btn.addEventListener("click",
	function(){
		var list1 =document.getElementById('list');
		var top = document.createElement('p');
		var button = document.getElementById('B');
		top.innerText='怎麼這麼棒!!.';
		list1.insertBefore(top,button);
		var header = document.getElementById("L1");
		header.innerHTML = "CSIE@CGU";
		var para = document.getElementById("P1");
		para.innerHTML = "好棒棒";	
	});
}

