jQuery(document).ready(function(){
  jQuery("#creative").click(function(event){
    event.preventDefault();
    jQuery(".creative-section").show();
    jQuery(".artboard").hide();
  });
});