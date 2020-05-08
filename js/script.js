
// head title

$(function() {
 
  $('h1,h2,p').hide().fadeIn(5000);
 
});




// page-top

$(function() {
  var topBtn = $('.page-top');    
  topBtn.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 2000);
      return false;
  });
});


$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 2000; 
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


 // works-wr(順番にフワット)

  $(function(){
     $('.img-cont').css("opacity","0");  
        $(window).scroll(function (){
        $('.img-cont').each(function(){
                 
           var elemPos = $(this).offset().top;      
           var scroll = $(window).scrollTop();     
           var windowHeight = $(window).height();      
       if (scroll > elemPos - windowHeight + windowHeight/4){
        $(function(){
        $('.img-cont')
            .each(function(i){
             $(this).delay(700*i).animate({opacity:1}, 2000);
            });
           }); 
           }
        });
      });
  });


  // service-wr(ふわっと)

  $(function(){
    $('.service-cont').css("opacity","0");  
        $(window).scroll(function (){
        $('.service-cont').each(function(){
                
          var elemPos = $(this).offset().top;      
          var scroll = $(window).scrollTop();     
          var windowHeight = $(window).height();      
      if (scroll > elemPos - windowHeight + windowHeight/4){
        $(function(){
        $('.service-cont')
            .each(function(i){
            $(this).delay(700*i).animate({opacity:1}, 2000);
            });
          }); 
          }
        });
      });
  });


  // profile-wr(ふわっと)

     $(function(){
      $('.profile-img,.profile-table,.profile-coment').css("opacity","0");  
         $(window).scroll(function (){
         $('.profile-img,.profile-table,.profile-come').each(function(){
                  
            var elemPos = $(this).offset().top;      
            var scroll = $(window).scrollTop();     
            var windowHeight = $(window).height();      
        if (scroll > elemPos - windowHeight + windowHeight/4){
         $(function(){
         $('.profile-img,.profile-table,.profile-coment')
             .each(function(i){
              $(this).delay(700*i).animate({opacity:1}, 2000);
             });
          }); 
        }
      });
    });
  });

  $(function(){
    function animation(){
      $('.contact-conts').each(function(){
        var target = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scroll > target - windowHeight){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
      });
    }
    animation();
    $(window).scroll(function (){
      animation();
    });
  });


  