var React = require('react');
require('antd/dist/antd.css');
var antd = require('antd');

var styles = {"test":"_styles-module__test__3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var AntdButton = function AntdButton() {
  return React.createElement(antd.Button, null, "CONFIRM!!");
};

exports.AntdButton = AntdButton;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
