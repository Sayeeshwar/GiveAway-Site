$(document).ready(function(){
   setbinding();  // THIS FUNCTION ENABLES THE PAGE TO GOTO DIFFERENT SECTIONS OF THE PAGE
    
    $(".toggle_menu").click(function(){ //ON CLICKING THE MENU BUTTON,
        $(".sidebar_menu").addClass("show_menu");// THE MENU BAR SHOWS UP
        $(".toggle_menu").addClass("opacity0");// THE MENU BUTTON FADES AWAY
    });
    
    $(".fa-times").click(function(){                   // ON CLICKING THE CROSS BUTTON TO CLOSE,
        $(".sidebar_menu").removeClass("show_menu");   // MENU BAR HIDES
        $(".toggle_menu").removeClass("opacity0");     // MENU BUTTON FADES IN
    });
    
});

function setbinding(){                  //THIS FUNCTION ENABLES THE PAGE TO GOTO DIFFERENT SECTIONS OF THE PAGE
  $("nav a").click(function(e){         // ON CLICKING A BUTTON ON THE NAV BAR
      
      e.preventDefault();               
      var sectionID = e.currentTarget.id + "s";//ADDS 'S' TO THE ID OF BUTTON PRESSED TO GET ID OF THE PAGE SECTION
      $("html,body").animate({                  
          scrollTop: $("#"+ sectionID).offset().top // SCROLLS TO SECTION OF PAGE
      },1000)
      
  })  
};