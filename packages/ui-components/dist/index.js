function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('antd/dist/antd.css');
var antd = require('antd');

var styles = {"test":"_styles-module__test__3ybTi"};

function FormBase() {
  return React__default.createElement("div", {
    className: 'flex p-12 bg-blue-500'
  }, React__default.createElement(antd.Form, {
    name: 'basic',
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    },
    initialValues: {
      remember: true
    },
    onFinish: function onFinish() {},
    onFinishFailed: function onFinishFailed() {}
  }, React__default.createElement(antd.Form.Item, {
    label: 'Username',
    name: 'username',
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  }, React__default.createElement(antd.Input, null))));
}

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
exports.FormBase = FormBase;
//# sourceMappingURL=index.js.map
