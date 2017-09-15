function Option(className, onClick){
	$(className).mouseup(onClick);
}

function dropdownSetup(){
 	$(this).bind("contextmenu", function(e) {
    	e.preventDefault();
		});
   
	$(".dropdown_options").hide();
	
	$(document).mousedown(function(){
		$('.dropdown_options').hide();		
	});

    $(document).contextmenu(function(event){
    	$('.dropdown_options').hide();
        $('.dropdown_options').fadeIn(150);
        var option_size = Number($('.general_option').css("height").replace("px",""));
        var list_size = $('.dropdown_options').children().length/2;
        var new_top = String(event.pageY-10)+"px";
        var new_left = String(event.pageX-45)+"px";
        $('.dropdown_options').css("top",new_top);
        $('.dropdown_options').css("left",new_left);
	}); 

	console.log('contextmenu ready');
}

function Dropdown(){
	this.html = 
		`<ul class='dropdown_options'>
          <li class='general_option add_option'>
            Add
          </li>
          <li class='general_option refresh_option'>
            Refresh page
          </li>
          <li class='general_option changebg_option'>
            Change background
          </li>
        </ul>`

	$('.main_content').append(this.html);
	
	this.Add = new Option('.add_option', function(){console.log('klik');});
	this.Refresh = new Option('.refresh_option', function(){console.log('klik');});
	this.Changebg = new Option('.changebg_option', function(){console.log('klik');});
	
	dropdownSetup();
}


