/*!
* jQuery FitTitle Plugin
* Original author: Eric Wafford
*
* Licensed under the MIT license
*/

;(function ( $ ) {

  $.fn.twFitTitle = function( options ) {

    // Setup options
    var pluginName = 'twFitTitle',
        settings = $.extend(
          {
            'minFontSize'    : Number.NEGATIVE_INFINITY,
            'maxFontSize'    : Number.POSITIVE_INFINITY
          }, options);

    return this.each( function() {
      if ( !$.data( this, 'plugin_' + pluginName ) ) {
        $.data(this, 'plugin_' + pluginName);
        var $this = $( this ),
            $parent = $this.parent();

        var resizeText = function() {
          $this.css({
                'display'        : 'inline-block',
                'white-space'    : 'nowrap',
                'font-size'      : Math.round( Math.max( Math.min( $parent.width() * parseInt( $this.css( 'font-size' ) ) / $this.width(), parseFloat( settings.maxFontSize ) ), parseFloat( settings.minFontSize ) ) )
          });
        };

        resizeText();

        $( window ).on( 'resize.fittext orientationchange.fittext', resizeText );

      }
    });
  };

})( jQuery );
