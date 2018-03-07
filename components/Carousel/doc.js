'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Carousel) {
  var DocumentedCarousel = (0, _reactDesc.describe)(Carousel).availableAt((0, _utils.getAvailableAtBadge)('Carousel')).description('A carousel that cycles through children. Child components\n      would typically be Images. It is the caller\'s responsibility to ensure\n      that all children are the same size.').usage('import { Carousel } from \'grommet\';\n<Carousel />');

  DocumentedCarousel.propTypes = {
    play: _reactDesc.PropTypes.number.description('If specified, the number of\n      milliseconds between automatically transitioning to the next child. It\n      will loop through all children indefinitely.')
  };

  return DocumentedCarousel;
};