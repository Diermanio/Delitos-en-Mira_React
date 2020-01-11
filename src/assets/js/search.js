import * as $ from 'jquery';
function busca() {
  $('.nombres').parents('.item').hide();  
$(document).ready(function(){
  $('#buscador').keyup(function(){
     var nombres = $('.nombres');
     var buscando = $(this).val();
     var item='';
     for( var i = 0; i < nombres.length; i++ ){
         
         item = $(nombres[i]).html().toLowerCase();
          for(var x = 0; x < item.length; x++ ){
              console.log(item)
              if(item.length === 0 || item.indexOf( buscando ) > -1  ){
                  console.log(item.length)
                  $(nombres[i]).parents('.item').show(); 
              }else { 
                $(nombres[i]).parents('.item').hide();
                   
              }
              
          }
        
     }
     if(buscando.length ===0){
      $('.nombres').parents('.item').hide();
     }
     
     
  });
});
}
export default busca;