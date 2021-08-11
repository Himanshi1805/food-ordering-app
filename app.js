

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  $(document).ready(function(){
$("button").click(function(e){
    if (txtInput.value.match(mailformat)) {
      $("#dangerIcon").css("display", "none");
      $("#dangerText").css("display", "none");
    } else {
      // alert(dangerIcon);
      $("#dangerIcon").css("display", "block");
      $("#dangerText").css("display", "block");
    }
  e.preventDefault();
});
});


$( "button" ).hover(function() {
  $( this ).css({"background-image": "linear-gradient(135deg, hsl(0, 100%, 98%), hsl(0, 80%, 86%))", "box-shadow": "10px 10px 60px hsl(0, 80%, 86%)"});
},function(){
  $(this).css({"background-image": "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))", "box-shadow": "0 0 0"});
});
