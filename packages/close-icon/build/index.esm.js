import React from 'react';
import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var css = ".CloseIcon-module_root__2iF8P {\n  outline: 1px solid red; }\n";
var styles = {"root":"CloseIcon-module_root__2iF8P"};
styleInject(css);

function CloseIcon(_ref) {
  var props = _extends({}, _ref);

  return React.createElement("svg", _extends({
    className: styles.root,
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32"
  }, props), React.createElement("path", {
    d: "M31.708 25.708L22 16l9.708-9.708a1 1 0 000-1.414L27.122.292a1 1 0 00-1.414-.001L16 9.999 6.292.291a.998.998 0 00-1.414.001L.292 4.878a1 1 0 000 1.414L10 16 .292 25.708a.999.999 0 000 1.414l4.586 4.586a1 1 0 001.414 0L16 22l9.708 9.708a1 1 0 001.414 0l4.586-4.586a.999.999 0 000-1.414z"
  }));
}

export default CloseIcon;
