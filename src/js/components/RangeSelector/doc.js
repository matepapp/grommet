import { describe, PropTypes } from 'react-desc';

import { colorPropType, getAvailableAtBadge } from '../../utils';

export const doc = RangeSelector => {
  const DocumentedRangeSelector = describe(RangeSelector)
    .availableAt(getAvailableAtBadge('RangeSelector'))
    .description('A control to allow selecting a range of values.')
    .usage(
      `import { RangeSelector } from 'grommet';
<RangeSelector />`,
    );

  DocumentedRangeSelector.propTypes = {
    color: colorPropType.description(
      'What color to use to indicate the selection.',
    ),
    direction: PropTypes.oneOf(['horizontal', 'vertical'])
      .description('')
      .defaultValue('horizontal'),
    invert: PropTypes.bool.description(
      'Whether to indicate what has not been selected.',
    ),
    max: PropTypes.number
      .description('The maximum value permitted.')
      .defaultValue(100),
    messages: PropTypes.shape({
      lower: PropTypes.string,
      upper: PropTypes.string,
    }).description(
      'Custom messages. Used for accessibility by screen readers.',
    ),
    min: PropTypes.number
      .description('The minimum value permitted.')
      .defaultValue(0),
    onChange: PropTypes.func.description(
      `Function that will be called when the user changes one of the
      values. It will be passed an array of two numbers indicating
      the new values selected.`,
    ),
    opacity: PropTypes.oneOf(['weak', 'medium', 'strong'])
      .description('')
      .defaultValue('medium'),
    round: PropTypes.oneOfType([
      PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']),
      PropTypes.string,
    ]).description('How much to round the corners.'),
    size: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'full',
      ]),
      PropTypes.string,
    ])
      .description('How thick to make the selection indicator.')
      .defaultValue('medium'),
    step: PropTypes.number
      .description('The step interval between values.')
      .defaultValue(1),
    values: PropTypes.arrayOf(PropTypes.number).description(
      'The current values.',
    ).isRequired,
  };

  return DocumentedRangeSelector;
};
