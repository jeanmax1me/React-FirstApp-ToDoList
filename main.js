import React$1, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function NewTodoForm(_ref) {
  var onSubmit = _ref.onSubmit;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    newItem = _useState2[0],
    setNewItem = _useState2[1];
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "new-item-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "item"
  }, "New Item"), /*#__PURE__*/React.createElement("input", {
    value: newItem,
    onChange: function onChange(e) {
      return setNewItem(e.target.value);
    },
    type: "text",
    id: "item"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn"
  }, "Add"));
}

function TodoItem(_ref) {
  var completed = _ref.completed,
    id = _ref.id,
    title = _ref.title,
    toggleTodo = _ref.toggleTodo,
    deleteTodo = _ref.deleteTodo;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: completed,
    onChange: function onChange(e) {
      return toggleTodo(id, e.target.checked);
    }
  }), title), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return deleteTodo(id);
    },
    className: "btn btn-danger"
  }, "Delete"));
}

function TodoList(_ref) {
  var todos = _ref.todos,
    toggleTodo = _ref.toggleTodo,
    deleteTodo = _ref.deleteTodo;
  return /*#__PURE__*/React.createElement("ul", {
    className: "list"
  }, todos.length === 0 && "No Todos", todos.map(function (todo) {
    return /*#__PURE__*/React.createElement(TodoItem, _extends({}, todo, {
      key: todo.id,
      toggleTodo: toggleTodo,
      deleteTodo: deleteTodo
    }));
  }));
}

function App() {
  var _useState = useState(function () {
      var localValue = localStorage.getItem("ITEMS");
      if (localValue == null) return [];
      return JSON.parse(localValue);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    todos = _useState2[0],
    setTodos = _useState2[1];
  useEffect(function () {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);
  function addTodo(title) {
    setTodos(function (currentTodos) {
      return [].concat(_toConsumableArray(currentTodos), [{
        id: crypto.randomUUID(),
        title: title,
        completed: false
      }]);
    });
  }
  function toggleTodo(id, completed) {
    setTodos(function (currentTodos) {
      return currentTodos.map(function (todo) {
        if (todo.id === id) {
          return _objectSpread2(_objectSpread2({}, todo), {}, {
            completed: completed
          });
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos(function (currentTodos) {
      return currentTodos.filter(function (todo) {
        return todo.id !== id;
      });
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NewTodoForm, {
    onSubmit: addTodo
  }), /*#__PURE__*/React.createElement("h1", {
    className: "header"
  }, "Todo List"), /*#__PURE__*/React.createElement(TodoList, {
    todos: todos,
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo
  }));
}

ReactDOM.createRoot(document.getElementById('root')).render( /*#__PURE__*/React$1.createElement(React$1.StrictMode, null, /*#__PURE__*/React$1.createElement(App, null)));
