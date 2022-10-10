$(startup);

var url = "https://www.horoscopes-and-astrology.com/json";
var horoscope = {};
var code;

function startup() {
  $.getJSON(url, getData);
  $("#btngo").click(getit);
  $("#signs").selectmenu();
}

function getData(info) {
  horoscope = info.dailyhoroscope;
  dates = info.dates;
  var signs = Object.keys(horoscope);
  
  for (var x=0; x<signs.length; x+=1){
  code += "<option>" + signs[x] + "</option>";
}
$("#scope").html(code);
  

}



function getit(){
  var item = $("#scope").val();
  var hor = horoscope[item];
  $("#divbox").html(item + "<hr>" + dates[item] + "<br>" + hor);
  
  
}

