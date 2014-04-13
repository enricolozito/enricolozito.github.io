$(document).ready(function(){               
    $("header").hover(function(){
        $("#arrows").hide("slow"); 
        },function(){
        $("#arrows").show("slow");   
    });
      
    $("ul#supersized").appendTo("section#target");
     
    $("#artista").click(function() {
        $("#supersized").remove();
        $("#arrows").remove();    
        $( "section#target" ).load( 'artista.html' ).hide().fadeIn(3000);     
        });
    
    $("#galeria").click(function() {
        $("#supersized").remove();
        $("#arrows").remove();    
        $( "section#target" ).load( 'galeria.html' ).hide().fadeIn(3000);        
        });
    
    $("#contacto").click(function() {
        $("#supersized").remove();
        $("#arrows").remove();    
        $( "section#target" ).load( 'contacto.html' ).hide().fadeIn(3000);       
        });    
});