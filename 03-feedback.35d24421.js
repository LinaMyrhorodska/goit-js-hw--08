!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,s=c||m||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,m=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),m?y(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?v(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&r?y(e):(r=i=void 0,u)}function I(){var e=p(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(m=!!n.leading,a=(s="maxWait"in n)?g(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),I.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},I.flush=function(){return void 0===f?u:w(p())},I}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector('textarea[name="message"]')};j.form.addEventListener("submit",(function(e){e.preventDefault(),t=e.currentTarget,n={},new FormData(t).forEach((function(e,t){return n[t]=e})),console.log("feedbackInfo",n),e.currentTarget.reset(),localStorage.removeItem(T),localStorage.removeItem(h);var t,n})),j.form.addEventListener("input",e(t)((function(e){"email"===e.target.name&&localStorage.setItem(T,e.target.value);"message"===e.target.name&&localStorage.setItem(h,e.target.value)}),500));var T="email",h="message";!function(e){localStorage.getItem(T)&&(j.email.value=localStorage.getItem(T));localStorage.getItem(h)&&(j.message.value=localStorage.getItem(h))}()}();
//# sourceMappingURL=03-feedback.35d24421.js.map
