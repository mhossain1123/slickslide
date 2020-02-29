var menuOffset=$('.menu').offset().top;

$(window).scroll(function()
                
{var scrolling=$(this).scrollTop();  
 
    if(scrolling>menuOffset)
        {$('.menu').addClass('menufix');
         $('.menufix').removeClass('menu');
     
        }
        
            else { $('.menufix').addClass('menu');
                
                $('.menu').removeClass('menufix');
               
                 }
        

 
 }
                
 );


$('.btmButton').click(function()
                     
 {
    
    $('html,body').animate({scrollTop:0});
    
    
}
                     
        
 );


$(window).scroll(function(){
    
    var scrollStart=$(this).scrollTop();
    
    if(scrollStart>200){
        
        $('.btmButton').fadeIn();
    }
    else{$('.btmButton').fadeOut();}
    
    
});


$('.bodyContain').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade:true,

  speed: 2500,
  autoplaySpeed: 2500,
  
  nextArrow: '<i class="fas fa-arrow-right nxtArr"></i>',
  prevArrow: '<i class="fas fa-arrow-left prvArr"></i>'
});


