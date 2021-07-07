import React from 'react';
import Select from 'react-select';

interface SelectProps {
  options?: any;
  placeholder?: string;
  selectedOption?: any;
  handleTypeSelect?: any;
}

const SelectNotify = ({
  options,
  selectedOption,
  handleTypeSelect,
  placeholder,
}: SelectProps) => {
  const customStyles = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: '#F2FBF7',
      paddingRight: '1rem',
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0,
      },
    }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#045860',
        fontSize: '1.2rem',
        marginLeft: '1rem',
      };
    },
    dropdownIndicator: (styles) => ({ color: '#045860' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#4285F4' : '#fff',
        color: isFocused ? '#fff' : '#045860',
        fontSize: '1.3rem',
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
  };
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Select
        isSearchable={false}
        className="select"
        classNamePrefix="select"
        styles={customStyles}
        options={options}
        value={options.filter(function (option) {
          return option.value === selectedOption;
        })}
        onChange={handleTypeSelect}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectNotify;
