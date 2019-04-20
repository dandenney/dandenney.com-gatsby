import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Icon = ({ size, color, className, svg }) => (
  <span
    className={`${className}`}
    css={css`
      display: inline-block;
      fill: ${color};
      flex-shrink: 0;
      height: ${size}px;
      overflow: hidden;
      position: relative;
      transition: fill 0.3s ease-in-out;
      vertical-align: middle;
      width: ${size}px;

      &::after {
        bottom: 0;
        content: '';
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      svg {
        bottom: 0;
        display: block;
        fill: inherit;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;

        :hover &,
        :focus & {
          fill: inherit;
        }
      }
    `}
  >
    {svg}
  </span>
);

Icon.defaultProps = {
  size: 18,
  color: 'currentColor',
  className: '',
};

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Icon;
