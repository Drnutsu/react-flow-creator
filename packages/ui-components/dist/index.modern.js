import { createElement } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

var styles = {"test":"_styles-module__test__3ybTi"};

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

export { AntdButton, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
