import React__default, { createElement } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

var styles = {"test":"_styles-module__test__3ybTi"};

function FormBase() {
  return React__default.createElement("div", {
    className: 'flex p-12 bg-blue-500'
  }, React__default.createElement(Form, {
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
    onFinish: () => {},
    onFinishFailed: () => {}
  }, React__default.createElement(Form.Item, {
    label: 'Username',
    name: 'username',
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  }, React__default.createElement(Input, null))));
}

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
const AntdButton = () => {
  return createElement(Button, null, "CONFIRM!!");
};

export { AntdButton, ExampleComponent, FormBase };
//# sourceMappingURL=index.modern.js.map
