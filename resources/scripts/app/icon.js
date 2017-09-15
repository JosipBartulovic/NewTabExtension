//Icon events
function iconSetup(){
	var icon_move = 1;
	$('.general_icon').mouseenter(function(){
		var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))-icon_move;
		top = Number(top.replace('px',''))-icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});

	$('.general_icon').mouseleave(function(){ var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))+icon_move;
		top = Number(top.replace('px',''))+icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});

	$('.general_icon').mousedown(function(){
		var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))+icon_move;
		top = Number(top.replace('px',''))+icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});

	$('.general_icon').mouseup(function(){
		var left = $(this).css("left");
		var top = $(this).css("top");
		left = Number(left.replace('px',''))-icon_move;
		top = Number(top.replace('px',''))-icon_move;
		$(this).css("left", (String(left)+"px"));
		$(this).css("top", (String(top)+"px"));
	});
		console.log('icons ready');
}

//Icon class
function Icon(colour, letter, link, name){
	this.html = "<div class = 'general_icon icon_{0} icon_{1}'>{2}</div>".replace("{0}",colour).replace("{1}",name).replace("{2}",letter);
	this.class_name = "icon_{0}".replace("{0}", name);
	$('.main_content').append(this.html);
	$("."+this.class_name).mouseup(function(){
		window.open(link);
	});

	iconSetup();
}

