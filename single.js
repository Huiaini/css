/*!
 * clipboard.js v1.5.5
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT 漏 Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){var r=t("matches-selector");e.exports=function(t,e,n){for(var o=n?t:t.parentNode;o&&o!==document;){if(r(o,e))return o;o=o.parentNode}}},{"matches-selector":2}],2:[function(t,e,n){function r(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),r=0;r<n.length;++r)if(n[r]==t)return!0;return!1}var o=Element.prototype,i=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=r},{}],3:[function(t,e,n){function r(t,e,n,r){var i=o.apply(this,arguments);return t.addEventListener(n,i),{destroy:function(){t.removeEventListener(n,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&r.call(t,n)}}var i=t("closest");e.exports=r},{closest:1}],4:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.function=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],5:[function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.function(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return o(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=r},{"./is":4,delegate:3}],6:[function(t,e,n){function r(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}e.exports=r},{}],7:[function(t,e,n){function r(){}r.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;o>r;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;a>i;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},e.exports=r},{}],8:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=t("select"),c=r(a),s=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},t.prototype.selectFake=function t(){var e=this;this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.position="absolute",this.fakeElem.style.left="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=c.default(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=c.default(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},i(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!=typeof e||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=e}},get:function t(){return this._target}}]),t}();n.default=s,e.exports=n.default},{select:6}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0;var c=t("./clipboard-action"),s=r(c),u=t("tiny-emitter"),l=r(u),f=t("good-listener"),d=r(f),h=function(t){function e(n,r){o(this,e),t.call(this),this.resolveOptions(r),this.listenClick(n)}return i(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=d.default(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return a("action",e)},e.prototype.defaultTarget=function t(e){var n=a("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return a("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l.default);n.default=h,e.exports=n.default},{"./clipboard-action":8,"good-listener":5,"tiny-emitter":7}]},{},[9])(9)});
(function ($) {
    $.extend({
        tipsBox: function (options) {
            options = $.extend({
                obj: null, //jq瀵硅薄锛岃鍦ㄩ偅涓猦tml鏍囩涓婃樉绀�
                str: "+1", //瀛楃涓诧紝瑕佹樉绀虹殑鍐呭;涔熷彲浠ヤ紶涓€娈礹tml锛屽: "<b style='font-family:Microsoft YaHei;'>+1</b>"
                startSize: "12px", //鍔ㄧ敾寮€濮嬬殑鏂囧瓧澶у皬
                endSize: "30px",  //鍔ㄧ敾缁撴潫鐨勬枃瀛楀ぇ灏�
                interval: 600, //鍔ㄧ敾鏃堕棿闂撮殧
                color: "red",  //鏂囧瓧棰滆壊
                callback: function () { }  //鍥炶皟鍑芥暟
            }, options);
            $("body").append("<span class='num'>" + options.str + "</span>");
            var box = $(".num");
            var left = options.obj.offset().left + options.obj.width() / 2;
            var top = options.obj.offset().top - options.obj.height();
            box.css({
                "position": "absolute",
                "left": left + "px",
                "top": top + "px",
                "z-index": 9999,
                "font-size": options.startSize,
                "line-height": options.endSize,
                "color": options.color
            });
            box.animate({
                "font-size": options.endSize,
                "opacity": "0",
                "top": top - parseInt(options.endSize) + "px"
            }, options.interval, function () {
                box.remove();
                options.callback();
            });
        }
    });
})(jQuery);
$(function(){
	var single = {
		ajaxComment:function(){
			$.fn.postLike = function() {
			    if ($(this).hasClass('done')){
			        return false;
			    }else{
			        var id = $(this).data("id"),
			        action = $(this).data('action'),
			        rateHolder = $(this).children('.count');
			        var ajax_data = {action: "bigfa_like",um_id: id,um_action: action};
			        $.post("/wp-admin/admin-ajax.php", ajax_data,function(data){
			            $(rateHolder).html(data);
			        });
			        $(this).addClass('done').find('.icon-like').addClass('icon-xihuan').removeClass('icon-like');
			        $.tipsBox({
			            obj: $(this),
			            str: "+1",
			            callback: function () {}
			        });
			        return false;
			    }
			};
			$(document).on("click", ".favorite",function() {
			    $(this).postLike();
			});
		},
		codePrettifyToolbar: function(lang) {
			var _lang;
			switch( lang.toLowerCase() ) {
				case 'js':
				case 'javascript':
					_lang = 'JavaScript';
					break;
				case 'java':
				case 'python':
				case 'shell':
					_lang = lang.charAt(0).toUpperCase().concat(lang.toLowerCase().slice(1));
					break;
				case 'bash':
					_lang = 'Shell 鍛戒护';
					break;
				case 'c':
					_lang = 'C 璇█';
					break;
				case 'html': 
				case 'css': 
				case 'xml':
				case 'cpp':
					_lang = lang.toUpperCase();
					break;
				default:
					_lang = lang; 
			}

			var toolbar = '<div class="code-pretty-toolbar">' +
							'<span class="title">' + _lang + '</span>' +
							'<a href="javascript:void(0);" title="澶嶅埗浠ｇ爜" class="tool clipboard"><i class="iconfont icon-fuzhi"></i></a>' +
							'<a href="javascript:void(0);" title="鏌ョ湅绾枃鏈唬鐮�" class="tool view-source"><i class="iconfont icon-code"></i></a>' +
							'<a href="javascript:void(0);" title="杩斿洖浠ｇ爜楂樹寒" class="tool back-to-pretty"><i class="iconfont icon-fanhui"></i></a>' +
							'<span class="msg"></span>' +
						  '</div>';

			return toolbar;
		},
		//鑾峰彇浠ｇ爜鏂囨湰
		getPrettifyCode: function($container) {
			code = [];

			// 缁勫悎浠ｇ爜
			$container.find('li').each(function() {
				code.push( $(this).text() );
			});
			// using \r instead of \r or \r\n makes this work equally well on IE, FF and Webkit
			code = code.join('\r');
			// For Webkit browsers, replace nbsp with a breaking space
			code = code.replace(/\u00a0/g, " ");

			return code;
		},
		//浠ｇ爜楂樹寒宸ュ叿鏍忓姛鑳�
		codePrettifyToolbarAction: function() {
			/* 澶嶅埗浠ｇ爜 */
			_this = this;
			var clipboard = new Clipboard('.clipboard', {
				text: function(e) {
					$container = $(e).parent().parent();
					return _this.getPrettifyCode($container);
				}
			});
			clipboard.on('success', function(e) {
				$container = $(e.trigger).parent().parent();
				$container.find('.msg').hide().text('宸插鍒�.').stop().fadeIn(300).delay(1500).fadeOut(500);
			});

			clipboard.on('error', function(e) {
				$container = $(e.trigger).parent().parent();
				$container.find('.msg').hide().text('鏆備笉鏀寔褰撳墠娴忚鍣紝璇锋墜鍔ㄥ鍒� (ctrl + c)').stop().fadeIn(300).delay(3000).fadeOut(500);
				$container.find('.view-source').trigger('click');
			});

			/* 鍏朵粬浜嬩欢 */
			$('.code-pretty-toolbar a').on('click', function() {
				/* 鏌ョ湅绾枃鏈唬鐮� */
				if ( $(this).hasClass('view-source') ) {
					$container = $(this).parent().parent();

					// 鑾峰彇浠ｇ爜鏂囨湰
					code = _this.getPrettifyCode($container);

					// 濉厖 textarea
					if ( !$container.find('textarea').length ) {
						$container.append('<textarea class="code-pretty-text">' + code + '</textarea>');
					} else {
						$container.find('textarea').val(code);
					}

					// 璋冩暣 textarea 浣嶇疆
					var $pre = $container.find('pre');
					if ( $pre.hasClass('lang-bash') ) { // bash 鍥哄畾涓嶅彉
						var w = $pre.width() - 15;
						var h = $pre.height() + 10;
						var marginLeft = 32;
					} else {
						var liCount = $pre.find('li').length;
						var offset = liCount / 1000;
						var w = $pre.width() - 30 - 5*offset
						var h = $pre.height() + 10;
						var marginLeft = 53 + 5*offset;
					}

					// 鏄剧ず textarea
					$container.find('textarea').css({height: h, width: w, 'margin-left': marginLeft})
											   .show().select();

					$container.find('.view-source').hide();
					$container.find('.back-to-pretty').css('display', 'inline-block');

				} else if ( $(this).hasClass('back-to-pretty') ) {
					$container.find('.back-to-pretty').hide();
					$container.find('.view-source').css('display', 'inline-block');

					$container.find('textarea').hide();
				}
			});
		},
		/* 澧炲姞 bash 楂樹寒瑙勫垯 */
		codePrettifyAddBash: function() {
			/* 涓嶅畬鍠勭殑瀹炵幇 */
			PR['registerLangHandler'](
			    PR['createSimpleLexer'](
			        [
			         // Whitespace
			         [PR['PR_PLAIN'],       /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],
			         // A double or single quoted, possibly multi-line, string.
			         [PR['PR_STRING'],      /^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/, null,
			          '"\'']
			        ],
			        [
			         [PR['PR_COMMENT'], /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, '#'],
			         [PR['PR_KEYWORD'], /[^\.\/]?(?:ls|cd|chown|chmod|sudo|su|vi|vim|cat|touch|tar|scp|cp|ssh|useradd|passwd|apt\-get|export|source|echo|mv|mkdir|rm)(\s)+/i, null],
			         // [PR['PR_LITERAL'],
			          // /^([^a-zA-Z0-9](-(\w)*))|\$(\w)*/i],
			         // An identifier
			         [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
			         // A run of punctuation
			         // [PR['PR_PUNCTUATION'], /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]
			        ]),
			    ['bash', 'sh', 'shell']);
		},
		// 浠ｇ爜楂樹寒 Google Code Prettify
		codePrettify: function() {
			/* 鏇存敼 pre 鐨� class锛屽鍔� toolbar */
			var _this = this;
			$('pre code').each(function() {
				var lang = $(this).attr('class');
				if (lang) {
					var code = $(this).html();
					$(this).parent().attr('class', 'prettyprint linenums lang-' + lang).html(code)
							.wrap('<div class="code-pretty-container"></div>')
							.parent().append( _this.codePrettifyToolbar(lang) );
				}
			});
			_this.codePrettifyAddBash();
			prettyPrint();
			_this.codePrettifyToolbarAction();
		},
		init: function() {
			var _this = this;
				_this.ajaxComment();
				_this.codePrettify();
		}
	}
	single.init();
})