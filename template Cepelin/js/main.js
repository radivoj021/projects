$(document).ready(function(){	
	var backToTop = $(".back-to-top");
	
	backToTop.on("click", function(){
		$("html, body").animate({
			scrollTop: 0
		   }, 500);
		})
	});
	
	$(window).on("scroll", function(){
		var self = $(this),
			height = self.height(),
			top = self.scrollTop();
			
			if(top > 1168){
				$("#cepelin").addClass("animated bounceInRight");				
			}
			else{
				$("#cepelin").removeClass();
			}
			
			if(top > 1276){
				$("#content2_text").addClass("animated bounceInLeft");
			}
			else{
				$("#content2_text").removeClass();
			}
			
			console.log(top);
});