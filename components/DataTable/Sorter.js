'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Box = require('../Box');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SorterButton = (0, _styledComponents2.default)(_Button.Button).withConfig({
  displayName: 'Sorter__SorterButton'
})(['flex-shrink:1;']);

var Sorter = function Sorter(_ref) {
  var align = _ref.align,
      children = _ref.children,
      onSort = _ref.onSort,
      property = _ref.property,
      sort = _ref.sort,
      theme = _ref.theme;

  var icon = void 0;
  if (sort && sort.property === property) {
    var Icon = theme.dataTable.icons[sort.ascending ? 'ascending' : 'descending'];
    icon = _react2.default.createElement(Icon, null);
  }
  var content = _react2.default.createElement(
    _Box.Box,
    _extends({
      flex: true,
      direction: 'row',
      justify: align,
      align: 'center',
      gap: 'xsmall',
      fill: 'vertical'
    }, theme.dataTable.header, {
      border: undefined,
      background: undefined
    }),
    children,
    icon
  );
  if (onSort) {
    content = _react2.default.createElement(
      SorterButton,
      {
        fill: true,
        hoverIndicator: true,
        onClick: onSort(property),
        style: { flexShrink: 1 }
      },
      content
    );
  }

  return content;
};

exports.default = Sorter;