'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  /******************************** direction ********************************/\n  /************** http://cssreference.io/property/flex-direction **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /*********************************** wrap ***********************************/\n  /**************** http://cssreference.io/property/flex-wrap ****************/\n  ', ';\n  ', ';\n  /***************************** justify-content *****************************/\n  /************* http://cssreference.io/property/justify-content *************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /****************************** align-content ******************************/\n  /************** http://cssreference.io/property/align-content **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************* align-items *******************************/\n  /*************** http://cssreference.io/property/align-items ***************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************** utilities ********************************/\n  ', ';\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  /******************************** direction ********************************/\n  /************** http://cssreference.io/property/flex-direction **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /*********************************** wrap ***********************************/\n  /**************** http://cssreference.io/property/flex-wrap ****************/\n  ', ';\n  ', ';\n  /***************************** justify-content *****************************/\n  /************* http://cssreference.io/property/justify-content *************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /****************************** align-content ******************************/\n  /************** http://cssreference.io/property/align-content **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************* align-items *******************************/\n  /*************** http://cssreference.io/property/align-items ***************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************** utilities ********************************/\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-direction: row; /* default */\n  '], ['\n    flex-direction: row; /* default */\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-direction: row-reverse;\n  '], ['\n    flex-direction: row-reverse;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    flex-direction: column;\n  '], ['\n    flex-direction: column;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    flex-direction: column-reverse;\n  '], ['\n    flex-direction: column-reverse;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    flex-wrap: nowrap; /* default */\n  '], ['\n    flex-wrap: nowrap; /* default */\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    flex-wrap: wrap;\n  '], ['\n    flex-wrap: wrap;\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    justify-content: flex-start; /* default */\n  '], ['\n    justify-content: flex-start; /* default */\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    justify-content: flex-end;\n  '], ['\n    justify-content: flex-end;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    justify-content: center;\n  '], ['\n    justify-content: center;\n  ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    justify-content: space-between;\n  '], ['\n    justify-content: space-between;\n  ']),
    _templateObject12 = _taggedTemplateLiteral(['\n    justify-content: space-around;\n  '], ['\n    justify-content: space-around;\n  ']),
    _templateObject13 = _taggedTemplateLiteral(['\n    align-content: flex-start;\n  '], ['\n    align-content: flex-start;\n  ']),
    _templateObject14 = _taggedTemplateLiteral(['\n    align-content: flex-end;\n  '], ['\n    align-content: flex-end;\n  ']),
    _templateObject15 = _taggedTemplateLiteral(['\n    align-content: center;\n  '], ['\n    align-content: center;\n  ']),
    _templateObject16 = _taggedTemplateLiteral(['\n    align-content: space-between;\n  '], ['\n    align-content: space-between;\n  ']),
    _templateObject17 = _taggedTemplateLiteral(['\n    align-content: space-around;\n  '], ['\n    align-content: space-around;\n  ']),
    _templateObject18 = _taggedTemplateLiteral(['\n    align-content: stretch; /* default */\n  '], ['\n    align-content: stretch; /* default */\n  ']),
    _templateObject19 = _taggedTemplateLiteral(['\n    align-items: flex-start;\n  '], ['\n    align-items: flex-start;\n  ']),
    _templateObject20 = _taggedTemplateLiteral(['\n    align-items: flex-end;\n  '], ['\n    align-items: flex-end;\n  ']),
    _templateObject21 = _taggedTemplateLiteral(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']),
    _templateObject22 = _taggedTemplateLiteral(['\n    align-items: baseline;\n  '], ['\n    align-items: baseline;\n  ']),
    _templateObject23 = _taggedTemplateLiteral(['\n    align-items: stretch;\n  '], ['\n    align-items: stretch;\n  ']),
    _templateObject24 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  '], ['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  ']),
    _templateObject25 = _taggedTemplateLiteral(['\n    align-items: center;\n    justify-content: center;\n  '], ['\n    align-items: center;\n    justify-content: center;\n  ']);

var _reactNative = require('react-native');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.View(_templateObject, (0, _styledIs2.default)('row')(_templateObject2), (0, _styledIs2.default)('rowReverse')(_templateObject3), (0, _styledIs2.default)('column')(_templateObject4), (0, _styledIs2.default)('columnReverse')(_templateObject5), (0, _styledIs2.default)('nowrap')(_templateObject6), (0, _styledIs2.default)('wrap')(_templateObject7), (0, _styledIs2.default)('justifyStart')(_templateObject8), (0, _styledIs2.default)('justifyEnd')(_templateObject9), (0, _styledIs2.default)('justifyCenter')(_templateObject10), (0, _styledIs2.default)('justifyBetween')(_templateObject11), (0, _styledIs2.default)('justifyAround')(_templateObject12), (0, _styledIs2.default)('contentStart')(_templateObject13), (0, _styledIs2.default)('contentEnd')(_templateObject14), (0, _styledIs2.default)('contentCenter')(_templateObject15), (0, _styledIs2.default)('contentSpaceBetween')(_templateObject16), (0, _styledIs2.default)('contentSpaceAround')(_templateObject17), (0, _styledIs2.default)('contentStretch')(_templateObject18), (0, _styledIs2.default)('alignStart')(_templateObject19), (0, _styledIs2.default)('alignEnd')(_templateObject20), (0, _styledIs2.default)('alignCenter')(_templateObject21), (0, _styledIs2.default)('alignBaseline')(_templateObject22), (0, _styledIs2.default)('alignStretch')(_templateObject23), (0, _styledIs2.default)('full')(_templateObject24), (0, _styledIs2.default)('center')(_templateObject25));