(function( jQuery ) {

jQuery.extend(jQuery.expr[":"], {
	uppercase: function( elem ) {
		var attr = jQuery( elem ).css( "text-transform" );
		return ( typeof attr !== "undefined" && attr === "uppercase" );
		},
	smallcaps: function( elem ) {
		var attr = jQuery( elem ).css( "font-variant" );
		return ( typeof attr !== "undefined" && attr === "small-caps" );
	}
});

jQuery.extend({
	removeAcc: function( elem ) {
		// Replace uppercase accented greek characters
		function removeAccEL( text ) {
			return typeof text !== "string" ?
				// handle cases that text is not a string
				text :
				// global replace of uppercase accented characters
				text.
					replace( /\u0386/g, "\u0391" ). // 'Ά':'Α'
					replace( /\u0388/g, "\u0395" ). // 'Έ':'Ε'
					replace( /\u0389/g, "\u0397" ). // 'Ή':'Η'
					replace( /\u038A/g, "\u0399" ). // 'Ί':'Ι'
					replace( /\u038C/g, "\u039F" ). // 'Ό':'Ο'
					replace( /\u038E/g, "\u03A5" ). // 'Ύ':'Υ'
					replace( /\u038F/g, "\u03A9" ). // 'Ώ':'Ω'
					replace( /\u0390/g, "\u03CA" ). // 'ΐ':'ϊ'
					replace( /\u03AC/g, "\u03B1" ). // 'ά':'α'
					replace( /\u03AD/g, "\u03B5" ). // 'έ':'ε'
					replace( /\u03AE/g, "\u03B7" ). // 'ή':'η'
					replace( /\u03AF/g, "\u03B9" ). // 'ί':'ι'
					replace( /\u03B0/g, "\u03CB" ). // 'ΰ':'ϋ'
					replace( /\u03CC/g, "\u03BF" ). // 'ό':'ο'
					replace( /\u03CD/g, "\u03C5" ). // 'ύ':'υ'
					replace( /\u03CE/g, "\u03C9" ); // 'ώ':'ω'
		}

		jQuery( elem ).each(function() {
			this.value = removeAccEL( this.value );
		}).contents().filter(function() {
			return this.nodeType === 3; // Node.TEXT_NODE
		}).each(function() {
			this.nodeValue = removeAccEL( this.nodeValue );
		});
	}
});

jQuery.fn.extend({
	removeAcc: function() {
		return this.each(function() {
			jQuery.removeAcc( this );
		});
	}
});

})( jQuery );

jQuery( document ).ready(function($) {
	$( ":uppercase:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	$( ":smallcaps:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	$( ".remove-accents, .remove-accents > *:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	$( document ).ajaxComplete(function( event, request, settings ) {
		$( ":uppercase:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
		$( ":smallcaps:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
		$( ".remove-accents, .remove-accents > *:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	});
});