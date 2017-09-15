function clock(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    $('.clock').text(h+' : '+m);
    setTimeout(clock, 500);
}

    
$("body").ready(function(){
    ic = new Icon("red", "P", "https://www.youtube.com", "ikona");
    drop = new Dropdown();

    iconSetup();
    clock();
});
