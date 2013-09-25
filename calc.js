$(document).ready(function(){
	
	
	
//click event for all btns togather
$( ".btns" ).bind( "click", function(event, ui) {
	$("#basic").val($("#basic").val() + event.target.textContent);
	
});

//click for equal button
$( "#equal" ).bind( "mousedown", function(event, ui) {
	var allvalue = $("#basic").val();
	
	if(allvalue.length<=0)
	{
		$( "#equal" ).attr("data-position-to","origin");
		$( "#popupBasic" ).popup("open");
		
		
		
		
	}
	else
	{
		
		var result = eval(allvalue);
	    $("#basic").val($("#basic").val() +" = "+ result);
		
	}
});
//click for equal button
$( "#C" ).bind( "click", function(event, ui) {
	
	$("#basic").val("");
});
//click for delete button
$( "#D" ).bind( "click", function(event, ui) {
	
	$("#basic").val(function(index,value){
        return value.substr(0,value.length-1);});
});




//end of ready function 
});
