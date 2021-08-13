import React__default, { useCallback, createElement } from 'react';
import 'antd/dist/antd.css';
import { Form, Button, DatePicker, Select, Input, InputNumber } from 'antd';
import { useSelector } from 'react-redux';
import cx from 'classnames';

var styles = {"test":"_styles-module__test__3ybTi"};

function FormGenerator({
  form,
  formItems,
  submitText = 'save',
  onSubmit,
  onFailed,
  isInline = false,
  submitButtonLoading = false,
  ...props
}) {
  const renderSearchItemByType = (type, item) => {
    switch (type) {
      case 'input':
        return React__default.createElement(Input, Object.assign({}, item));

      case 'inputNumber':
        return React__default.createElement(InputNumber, Object.assign({}, item));

      case 'textArea':
        return React__default.createElement(Input.TextArea, Object.assign({
          rows: 4
        }, item));

      case 'select':
        return React__default.createElement(Select, Object.assign({}, item), item.options && item.options.map(({
          value,
          text
        }) => React__default.createElement(Select.Option, {
          className: 'text-black',
          key: value,
          value: value
        }, text)));

      case 'date':
        return React__default.createElement(DatePicker, Object.assign({}, item));

      case 'rangeDate':
        const {
          placeholder,
          ...rest
        } = item;
        return React__default.createElement(DatePicker.RangePicker, Object.assign({
          format: 'YYYY-MM-DD'
        }, rest));

      default:
        throw new Error(`Component Type ${type} is not support. please check searchItems data.`);
    }
  };

  const renderFormItems = () => React__default.createElement("div", {
    className: `flex ${!isInline && 'flex-col'}`
  }, formItems.map(({
    type,
    ...item
  }) => isInline ? React__default.createElement(Form.Item, {
    name: item.name,
    className: 'mb-0',
    label: item.label
  }, renderSearchItemByType(type, item)) : React__default.createElement("div", {
    key: item.name,
    className: `w-${item.span ? item.span / 2 : 12}/12`
  }, React__default.createElement(Form.Item, {
    name: item === null || item === void 0 ? void 0 : item.name,
    label: item.label
  }, renderSearchItemByType(type, item)))));

  return React__default.createElement(Form, Object.assign({
    className: 'search-area'
  }, props, {
    onFinish: onSubmit,
    onFinishFailed: onFailed
  }), isInline ? React__default.createElement("div", {
    className: 'inline-flex'
  }, React__default.createElement("div", {
    className: 'flex items-center'
  }, renderFormItems()), React__default.createElement("div", {
    className: 'flex items-center'
  }, React__default.createElement(Button, {
    children: submitText,
    color: 'default',
    htmlType: 'submit',
    key: 'submit',
    loading: submitButtonLoading
  }))) : React__default.createElement("div", {
    className: 'flex flex-col'
  }, React__default.createElement("div", {
    className: 'flex-1'
  }, renderFormItems()), React__default.createElement("div", {
    className: 'flex-1'
  }, React__default.createElement(Button, {
    children: submitText,
    color: 'default',
    htmlType: 'submit',
    key: 'submit',
    loading: submitButtonLoading
  }))));
}

const {
  useForm
} = Form;
function FormBase() {
  const form = useForm();
  const onSubmit = useCallback(result => {
    console.log(result);
  }, []);
  const onFailed = useCallback(err => {
    console.log(err);
  }, []);
  const configs = useSelector(state => {
    var _state$form, _state$form$form;

    return state === null || state === void 0 ? void 0 : (_state$form = state.form) === null || _state$form === void 0 ? void 0 : (_state$form$form = _state$form.form) === null || _state$form$form === void 0 ? void 0 : _state$form$form.config;
  });
  const Form = useCallback(() => React__default.createElement(FormGenerator, {
    formItems: configs || [],
    form: form,
    onSubmit: onSubmit,
    onFailed: onFailed
  }), [onSubmit, configs, form]);
  return React__default.createElement("div", {
    className: 'max-w-md py-4 px-8 bg-white shadow-lg rounded-lg'
  }, React__default.createElement(Form, null));
}

function Card({
  children,
  className
}) {
  return React__default.createElement("div", {
    className: cx('max-w-md py-4 px-8 bg-white shadow-lg rounded-lg', className)
  }, children);
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

export { AntdButton, Card, ExampleComponent, FormBase };
//# sourceMappingURL=index.modern.js.map
