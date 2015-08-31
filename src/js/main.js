/* ==========================================================================

    Project: xplosion
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.feature1();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {
      //Initailize colorbox
      var $gallery = $(".colorbox");
      $gallery.colorbox({rel:'colorbox', slideshow:true});
      //Auto trigger colorbox on page load
      $gallery.first().trigger('click');
      var $count = $gallery.length;
      var $flag = 1;

      //Trigger slideshow through event hooks
      $(document).bind('cbox_complete', function(){
        var $timeout = setTimeout($.colorbox.next, 2000);

        //Auto close slideshow after last slide
        if($flag == $count) {
          $.colorbox.close();
          clearTimeout($timeout);
        }
        $flag = $flag + 1;
      });
    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
