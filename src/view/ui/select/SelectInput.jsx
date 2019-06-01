import React from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './StyledSelect';

const SelectInput = ({
  label, options, name, onChange
}) =>
  (
    <label htmlFor={name}>
      {label}
      <StyledSelect name={name} id={name} onChange={onChange}>
        {options.map(({ value, text }) =>
          (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
      </StyledSelect>
    </label>
  );

SelectInput.defaultProps = {
  label: null
};

const optionShape = PropTypes.shape({
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(optionShape).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;
