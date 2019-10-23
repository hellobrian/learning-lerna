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

var css = ".Button-module_root__3D07A {\n  outline: 1px solid red; }\n";
var styles = {"root":"Button-module_root__3D07A"};
styleInject(css);

function Button(_ref) {
  var props = _extends({}, _ref);

  return React.createElement("div", _extends({
    className: styles.root
  }, props));
}

export default Button;
