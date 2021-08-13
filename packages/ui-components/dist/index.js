function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('antd/dist/antd.css');
var antd = require('antd');
var reactRedux = require('react-redux');
var cx = _interopDefault(require('classnames'));

var styles = {"test":"_styles-module__test__3ybTi"};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["form", "formItems", "submitText", "onSubmit", "onFailed", "isInline", "submitButtonLoading"],
    _excluded2 = ["placeholder"],
    _excluded3 = ["type"];
function FormGenerator(_ref) {
  var formItems = _ref.formItems,
      _ref$submitText = _ref.submitText,
      submitText = _ref$submitText === void 0 ? 'save' : _ref$submitText,
      onSubmit = _ref.onSubmit,
      onFailed = _ref.onFailed,
      _ref$isInline = _ref.isInline,
      isInline = _ref$isInline === void 0 ? false : _ref$isInline,
      _ref$submitButtonLoad = _ref.submitButtonLoading,
      submitButtonLoading = _ref$submitButtonLoad === void 0 ? false : _ref$submitButtonLoad,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var renderSearchItemByType = function renderSearchItemByType(type, item) {
    switch (type) {
      case 'input':
        return React__default.createElement(antd.Input, Object.assign({}, item));

      case 'inputNumber':
        return React__default.createElement(antd.InputNumber, Object.assign({}, item));

      case 'textArea':
        return React__default.createElement(antd.Input.TextArea, Object.assign({
          rows: 4
        }, item));

      case 'select':
        return React__default.createElement(antd.Select, Object.assign({}, item), item.options && item.options.map(function (_ref2) {
          var value = _ref2.value,
              text = _ref2.text;
          return React__default.createElement(antd.Select.Option, {
            className: 'text-black',
            key: value,
            value: value
          }, text);
        }));

      case 'date':
        return React__default.createElement(antd.DatePicker, Object.assign({}, item));

      case 'rangeDate':
        var rest = _objectWithoutPropertiesLoose(item, _excluded2);

        return React__default.createElement(antd.DatePicker.RangePicker, Object.assign({
          format: 'YYYY-MM-DD'
        }, rest));

      default:
        throw new Error("Component Type " + type + " is not support. please check searchItems data.");
    }
  };

  var renderFormItems = function renderFormItems() {
    return React__default.createElement("div", {
      className: "flex " + (!isInline && 'flex-col')
    }, formItems.map(function (_ref3) {
      var type = _ref3.type,
          item = _objectWithoutPropertiesLoose(_ref3, _excluded3);

      return isInline ? React__default.createElement(antd.Form.Item, {
        name: item.name,
        className: 'mb-0',
        label: item.label
      }, renderSearchItemByType(type, item)) : React__default.createElement("div", {
        key: item.name,
        className: "w-" + (item.span ? item.span / 2 : 12) + "/12"
      }, React__default.createElement(antd.Form.Item, {
        name: item === null || item === void 0 ? void 0 : item.name,
        label: item.label
      }, renderSearchItemByType(type, item)));
    }));
  };

  return React__default.createElement(antd.Form, Object.assign({
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
  }, React__default.createElement(antd.Button, {
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
  }, React__default.createElement(antd.Button, {
    children: submitText,
    color: 'default',
    htmlType: 'submit',
    key: 'submit',
    loading: submitButtonLoading
  }))));
}

var useForm = antd.Form.useForm;
function FormBase() {
  var form = useForm();
  var onSubmit = React.useCallback(function (result) {
    console.log(result);
  }, []);
  var onFailed = React.useCallback(function (err) {
    console.log(err);
  }, []);
  var configs = reactRedux.useSelector(function (state) {
    var _state$form, _state$form$form;

    return state === null || state === void 0 ? void 0 : (_state$form = state.form) === null || _state$form === void 0 ? void 0 : (_state$form$form = _state$form.form) === null || _state$form$form === void 0 ? void 0 : _state$form$form.config;
  });
  var Form = React.useCallback(function () {
    return React__default.createElement(FormGenerator, {
      formItems: configs || [],
      form: form,
      onSubmit: onSubmit,
      onFailed: onFailed
    });
  }, [onSubmit, configs, form]);
  return React__default.createElement("div", {
    className: 'max-w-md py-4 px-8 bg-white shadow-lg rounded-lg'
  }, React__default.createElement(Form, null));
}

function Card(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React__default.createElement("div", {
    className: cx('max-w-md py-4 px-8 bg-white shadow-lg rounded-lg', className)
  }, children);
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
exports.Card = Card;
exports.ExampleComponent = ExampleComponent;
exports.FormBase = FormBase;
//# sourceMappingURL=index.js.map
