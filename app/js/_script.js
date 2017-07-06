'use strict';

(function() {

var my_element    = document.createElement('div'),
    content       = document.createTextNode('simple text'),
    image_id      = document.getElementById('image'),
    p_elem        = document.querySelectorAll('p');

// console.log(p_elem)
// my_element.appendChild(content);
my_element.innerHTML = '<ul class="list"><li class="list-item"><a href="">Lorem ipsum.</a></li></ul>';

for (var i = 0; i < p_elem.length; i++) {
  p_elem[i].setAttribute('class', 'highlited');
}

// p_elem.setAttribute('class', 'highlited');
// image.parentNode.appendChild(my_element);
image_id.parentNode.insertBefore(my_element, image_id);


  console.log(my_element);


})();