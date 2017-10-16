function Option(className, onClick){
	$(className).click(onClick);
}

function addMenu(){
  $('.addMenu').css('visibility', 'visible');
}

function Dropdown(){
  	this.html = 
		`<div class='dropdown_options'>
          <button class='general_option add_option'>Add</Button>  
      </div>`

	$('body').append(this.html);
	this.Add = new Option('.add_option', addMenu);
	this.Refresh = new Option('.refresh_option', function(){console.log('klik');});
	this.Changebg = new Option('.changebg_option', function(){console.log('klik');});
}