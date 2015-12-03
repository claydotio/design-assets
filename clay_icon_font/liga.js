/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'action': '&#xe900;',
			'explore': '&#xe901;',
			'adventure': '&#xe901;',
			'advertise': '&#xe902;',
			'ad': '&#xe902;',
			'ads': '&#xe902;',
			'arcade': '&#xe903;',
			'controller': '&#xe903;',
			'arrow_back': '&#xe904;',
			'back': '&#xe904;',
			'close': '&#xe905;',
			'cancel': '&#xe905;',
			'email': '&#xe906;',
			'facebook': '&#xe907;',
			'favorite_border': '&#xe908;',
			'heart_border': '&#xe908;',
			'favorite': '&#xe909;',
			'heart': '&#xe909;',
			'github': '&#xe90a;',
			'google_plus': '&#xe90b;',
			'gplus': '&#xe90b;',
			'home': '&#xe90c;',
			'house': '&#xe90c;',
			'kik': '&#xe90d;',
			'menu': '&#xe90e;',
			'hamburger': '&#xe90e;',
			'mobile': '&#xe90f;',
			'phone': '&#xe90f;',
			'smartphone': '&#xe90f;',
			'profile': '&#xe910;',
			'user': '&#xe910;',
			'person': '&#xe910;',
			'puzzle': '&#xe911;',
			'extension': '&#xe911;',
			'racing': '&#xe912;',
			'car': '&#xe912;',
			'search': '&#xe913;',
			'share': '&#xe914;',
			'social': '&#xe915;',
			'friends': '&#xe915;',
			'people': '&#xe915;',
			'star_border': '&#xe916;',
			'rate_border': '&#xe916;',
			'star': '&#xe917;',
			'rate': '&#xe917;',
			'strategy': '&#xe918;',
			'dice': '&#xe918;',
			'random': '&#xe918;',
			'ticket': '&#xe919;',
			'invite': '&#xe919;',
			'twitter': '&#xe91a;',
			'upload': '&#xe91b;',
			'cloud_upload': '&#xe91b;',
			'backup': '&#xe91b;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icomoon-liga/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());