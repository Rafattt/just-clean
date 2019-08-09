if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
{
  alert("Microsoft Internet Explorer is not supported");
}


  const mobileMenu = () => {
      let visibility = $(".nav-mobile").css("display");
      if( visibility === "hidden"){
        $(".nav-mobile").css("visibility","grid");
        
        $(".nav-mobile").toggle(500);
      } else {
        $(".nav-mobile").css("visibility","none");
      
     
        $(".nav-mobile").toggle(500);
        
      }
    
  }



(function($) {
    var $window = $(window),
        $html = $('html');

    function resize() {
        if ($window.width() < 514) {
            return $(".about-container").addClass('wow animated delay-1s slower fadeIn');
        }

        $(".about-container").removeClass('wow animated delay-1s slower fadeIn');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    
  coll[i].addEventListener("click", function() {
    
    
 
    this.classList.toggle("active");
    
    var content = this.nextElementSibling;
   
    if (content.style.maxHeight){
        $(".content").not(this).each(function( ) {
            if(this.style.maxHeight !== null){
                this.style.maxHeight = null;
            }
           
     
          });
          $( ".collapsible" ).not(this).each(function( ) {
            if($(this).hasClass('active')){
                 $(this).removeClass('active');
            }
           
           });
      content.style.maxHeight = null;
      document.getElementsByClassName("serv-text-deep")[1].style.display = "block";
    } else {
        $(".content").not(this).each(function( ) {
            if(this.style.maxHeight !== null){
                this.style.maxHeight = null;
            }
           
     
          });
          $( ".collapsible" ).not(this).each(function( ) {
            if($(this).hasClass('active')){
                 $(this).removeClass('active');
            }
           
           });
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementsByClassName("serv-text-deep")[1].style.display = "none";
      
    } 
  });
}


    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });


  

      var deviceIsAndroid = /(android)/i.test(navigator.userAgent);

$(document).ready(function () {
    if (deviceIsAndroid) {
        $(document).bind("click", function () {
            if (document.activeElement.nodeName == 'TEXTAREA' || document.activeElement.nodeName == 'INPUT') {
                $('.green-text-container').css("visibility","none");
                $('.green-text-container').css("display","none");
                var textBox = document.activeElement.id;
                document.getElementById(textBox).scrollIntoView();
            } else {
                $('.green-text-container').css("visibility","visible");
                $('.green-text-container').css("display","block");
            }
            
        });
        $(document).not("#selecteddiv").click(function() {
            $('#selecteddiv').hide();
        });
    }



});

