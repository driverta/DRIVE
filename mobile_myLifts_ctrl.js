function openNav() {
	document.getElementById("mySidenav").style.height = "100%";
	document.getElementById("mySidenav").style.visibility = "visible";
	
	$("#blurryboi")
		.delay(400)
		.queue(function (next) {
			$(this).css("filter", "blur(20px)");
		next();
	});
}

function closeNav() {
	document.getElementById("mySidenav").style.height = "0px";
	document.getElementById("mySidenav").style.visibility = "hidden";
	$("#blurryboi").css("filter", "blur(0px)");
}