function addMenuSetup(){
	var addMenu = {
		html: `
			<div class='addMenu' style='background-color:white; position:absolute;'>
				<input class='inputLink' /> Link
				<br>
				<input class='inputLetter' maxlength='1' /> Letter
				<br>
				<select class='inputColor'>
					<option>red</option>
					<option>green</option>
					<option>blue</option>
				</select>
				<br />
				<button class='addButton'>Add</buttton>
			</div>
		`
	}

	$('.main_content').html(addMenu.html);
	$('.addMenu').css("visibility", "hidden");
	$('.addButton').click(function(){
		console.log($('.inputColor').val());
		ic = new Icon($('.inputColor').val(), $('.inputLetter').val(), $('.inputLink').val(), "ikona");
		$('.addMenu').css("visibility", "hidden");
	});
}