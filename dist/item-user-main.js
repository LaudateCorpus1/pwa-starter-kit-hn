webpackJsonp([2],{47:function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0}),b.DomIf=void 0;var g=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c(10),j=c(40),k=c(42),l=c(43),m=c(13),n=c(16),o=function(a){function b(){d(this,b);var a=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a.__renderDebouncer=null,a.__invalidProps=null,a.__instance=null,a._lastIf=!1,a.__ctor=null,a}return f(b,a),h(b,null,[{key:"is",get:function(){return"dom-if"}},{key:"template",get:function(){return null}},{key:"properties",get:function(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}}]),h(b,[{key:"__debounceRender",value:function(){var a=this;this.__renderDebouncer=k.Debouncer.debounce(this.__renderDebouncer,m.microTask,function(){return a.__render()}),(0,l.enqueueDebouncer)(this.__renderDebouncer)}},{key:"disconnectedCallback",value:function(){g(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"disconnectedCallback",this).call(this),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}},{key:"connectedCallback",value:function(){g(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"connectedCallback",this).call(this),this.if&&this.__debounceRender()}},{key:"render",value:function(){(0,l.flush)()}},{key:"__render",value:function(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}},{key:"__ensureInstance",value:function(){var a=this,b=this.parentNode;if(b){if(!this.__ctor){var c=this.querySelector("template");if(!c){var d=new MutationObserver(function(){if(a.querySelector("template"))d.disconnect(),a.__render();else throw new Error("dom-if requires a <template> child")});return d.observe(this,{childList:!0}),!1}this.__ctor=j.Templatize.templatize(c,this,{mutableData:!0,forwardHostProp:function(a,b){this.__instance&&(this.if?this.__instance.forwardHostProp(a,b):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[(0,n.root)(a)]=!0))}})}if(!this.__instance)this.__instance=new this.__ctor,b.insertBefore(this.__instance.root,this);else{this.__syncHostProperties();var e=this.__instance.children;if(e&&e.length){var f=this.previousSibling;if(f!==e[e.length-1])for(var g,h=0;h<e.length&&(g=e[h]);h++)b.insertBefore(g,this)}}}return!0}},{key:"__syncHostProperties",value:function(){var a=this.__invalidProps;if(a){for(var b in a)this.__instance._setPendingProperty(b,this.__dataHost[b]);this.__invalidProps=null,this.__instance._flushProperties()}}},{key:"__teardownInstance",value:function(){if(this.__instance){var a=this.__instance.children;if(a&&a.length)for(var b,c=a[0].parentNode,d=0;d<a.length&&(b=a[d]);d++)c.removeChild(b);this.__instance=null,this.__invalidProps=null}}},{key:"_showHideChildren",value:function(){var a=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(a)}}]),b}(i.Element);customElements.define(o.is,o),b.DomIf=o}});