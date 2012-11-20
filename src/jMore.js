/*
 * jQuery Plugin: jMore - Simple collapse & expand jQuery Plugin
 * Version 0.0.1
 *
 * Copyright (c) 2012 Cristian Douce (http://cristiandouce.com)
 * Licensed jointly under the GPL and MIT licenses,
 * choose which one suits your project best!
 *
 */
console.log('asdasd')
;(function($) {

  /**
   *  Plugin's name
   */
  var pluginName = 'jMore';

  /**
   *  Plugin's key
   */
  var pluginKey = 'plugin_' + pluginName;

  /**
   *  Plugin's templates
   */
  var BOTTOM_OVERLAY_TEMPLATE  = '<div class="jmore-bottom-overlay"></div>';

  /**
   * Plugin's styles
   */
  var styles  = '<style id="jquery_jMore_styles" type="text/css">'
              + ".jmore-bottom-overlay { position:absolute; bottom:0; left:0; right:0; background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,1))); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10+,Safari5.1+ */ background: -o-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Opera 11.10+ */ background: -ms-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* IE10+ */ background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */ height:20px;}"
              + ".jmore-bottom-overlay { background:red;}" //test only
              + '</style>';

  /**
   *  Plugin's public methods
   */
  var methods = {
    init: function (options ) {
      return this.each(function () {
        if (!$.data(this, pluginKey)) {
          $.data(this, pluginKey, new More(this, options));
        }
      });
    }
  }

  /**
   *  Plugin's constructor
   */
  var More = function(element, options) {
    // saving element's reference
    this.element = element;
    this.$element = $(element);

    // Build settings object
    this.settings = {};

    this.init();
  };

  More.prototype = {
    constructor: More,

    init: function () {
        this.render();
        this.bindEvents();
    },

    render: function () {
      //add styles for bottom overlay
      if(!$('head style#jquery_jMore_styles').length) $('style,link[rel="stylesheet"][type="text/css"]').before(styles);
      if(!$('head style#jquery_jMore_styles').length) $('head').append(styles);

      this.$element
      .append(BOTTOM_OVERLAY_TEMPLATE)
      .css({
        position: 'relative',
        height: 'auto',
        maxHeight: 200,
        overflowY: 'hidden'
      });

    },

    bindEvents: function () {
      var self = this;
      
      this.$element
      .mouseenter(function() {
        self.$element
        .css({
          overflowY: 'auto',
          maxHeight: 'none'
        });
      })
      .mouseleave(function() {
        self.$element
        .css({
          overflowY: 'hidden',
          maxHeight: 200
        });
      });
    }
  };

  /**
   *  Plugin's expose to jQuery
   */
  $.fn[pluginName] = function ( method ) {
    if(methods[method]) {
      return methods[method].apply($(this).data(pluginKey),  Array.prototype.slice.call(arguments, 1));
    } else {
      return methods.init.apply(this, arguments);
    }
  };
})(jQuery);
