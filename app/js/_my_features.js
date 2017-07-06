'use strict';

(function() {


function createLeftCircle() {
  var circle_displayed_left = document.createElement('div');
  circle_displayed_left.className = 'content-card_left-label';
  return circle_displayed_left
}

function createRightCircle() {
  var circle_displayed_right = document.createElement('div');
  circle_displayed_right.className = 'content-card_right-label';
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

})();