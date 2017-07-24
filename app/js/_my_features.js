'use strict';

(function() {


function createLeftCircle() {
  var circle_displayed_left = document.createElement('div');
  circle_displayed_left.className = 'ccl content-card_left-label';
  return circle_displayed_left
}

function createRightCircle() {
  var circle_displayed_right = document.createElement('div');
  circle_displayed_right.className = 'ccl content-card_right-label';
  return circle_displayed_right;
}




var circle_parent_element = document.querySelectorAll('div.content-card');

for (var i = circle_parent_element.length - 1; i >= 0; i--) {
  if ( circle_parent_element[i].className == 'content-card content-card_left' ) {
    circle_parent_element[i].appendChild(createLeftCircle());
  } else {
    circle_parent_element[i].appendChild(createRightCircle());
  }
}


var circle_hover = document.querySelectorAll('div.ccl');

window.addEventListener('scroll', function() {
    
    for (var i = circle_hover.length - 1; i >= 0; i--) {
      var coordinates = circle_hover[i].getBoundingClientRect().top;
      if (coordinates > 100 && coordinates < 250) {
        circle_hover[i].style = 'background-color: #fb6470;'
      } else {
        circle_hover[i].style = 'background-color: #3e3e3e;'
      }
    }

    
    });

})();

(function(){

$(document).ready(function(){
    $(".js-toggle").click(function(){
        if ($(".js-toggle").hasClass("active")) {
          $(".hmbgr").addClass('hidden');
        } else $(".hmbgr").removeClass('hidden');
    });
    $(".hmbgr").click(function(){
       $(".js-toggle").trigger('click')
    });
    
});

})();








