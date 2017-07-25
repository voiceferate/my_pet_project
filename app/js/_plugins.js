// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
//hamburger

(function(window, document, $, undefined) {
  "use strict";

  $(function() {
      var animOptions = {
          duration: 250,
          easing: "ease-in-out"
      };

      var open = false;

      $('body').click(function (e) {
        if ($(e.target).parents().hasClass('js-toggle')) {
          $(".hmbgr").toggleClass('hidden');
          change ();
        } 
        else if ($('.js-toggle').hasClass("active")) { 
          $(".hmbgr").addClass('hidden');
          change ();          
        }
      });


        function change () {
          var $el = $(".js-toggle");
          var $rects = $el.find("svg rect");

          if ($el.hasClass("active")) {
              $rects.eq(1).velocity("stop").velocity("reverse");
              $rects.eq(0).add($rects.eq(2)).velocity("stop").velocity("reverse");
          } else {
              $rects.eq(1).velocity({
                  opacity: 0
              }, animOptions);

              $rects.eq(0).velocity({
                  transformOrigin: [30, 25],
                  translateY: 17,
                  rotateZ: 45
              }, animOptions);

              $rects.eq(2).velocity({
                  transformOrigin: [30, 25],
                  translateY: -17,
                  rotateZ: -45
              }, animOptions);

              if ($(document).scrollTop() < 600 ) {
                $('.hmbgr__item').last().addClass('hidden')
              } else {
                $('.hmbgr__item').last().removeClass('hidden')
              }
          }

          $el.toggleClass("active");
        };

  });

})(window, document, jQuery);