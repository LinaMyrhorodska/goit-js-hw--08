function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),m=Object.prototype.toString,s=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,r,a,i,u,f,l=0,c=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,l=t,i=e.apply(a,n)}function S(e){return l=e,u=setTimeout(h,t),c?b(e):i}function T(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=a}function h(){var e=d();if(T(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return m?g(n,a-(e-l)):n}(e))}function j(e){return u=void 0,v&&o?b(e):(o=r=void 0,i)}function w(){var e=d(),n=T(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(m)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),i}return t=y(t)||0,p(n)&&(c=!!n.leading,a=(m="maxWait"in n)?s(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?i:j(d())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector('textarea[name="message"]')};b.form.addEventListener("submit",(function(e){e.preventDefault(),function(e){const t={};new FormData(e).forEach(((e,n)=>t[n]=e)),console.log("feedbackInfo",t)}(e.currentTarget),e.currentTarget.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),b.form.addEventListener("input",e(t)((function(e){"email"===e.target.name&&localStorage.setItem("email",e.target.value);"message"===e.target.name&&localStorage.setItem("message",e.target.value)}),500));!function(e){localStorage.getItem("email")&&(b.email.value=localStorage.getItem("email"));localStorage.getItem("message")&&(b.message.value=localStorage.getItem("message"))}();
//# sourceMappingURL=03-feedback.9c754399.js.map