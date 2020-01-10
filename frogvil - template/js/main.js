$(document).ready(function(){
	$("#program").on("mouseover", function(){
		$("#program").fadeIn(1000, function(){
			$("#program").addClass("listaHover");
		})
	});
});