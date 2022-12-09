	var count=0;

			$(".container>img").click(function(){
				$(".container>img").css("filter","invert(0%)");
				
				
				$(".counting").css("display","flex").css("top","25px");
			    $(".counting").animate({"top":"-50px","opacity":1},200);
				

				count++;
				$(".counting").text(count);


				$(".circle").animate({
					width: 180,
					height:180,
					opacity:0.2
				},350,function(){
					$(".circle").css('width',"0px").css("height","0px");
					
					$(".circle").animate({
					  
					  opacity:1
					});

				 $(".circle").css("display","flex");
				 setTimeout(function(){

				 	$(".counting").animate({"top":"32px"},100).fadeOut(100);

				 },400);
				 

				});

			});