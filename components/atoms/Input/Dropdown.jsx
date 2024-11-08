import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dropdown } from 'react-native-element-dropdown';

const StyledDropdown = styled(Dropdown)`
  height: 45px;
  border-color: ${(props) => (props.isFocus ? 'blue' : 'gray')};
  width: 100%;
  border-width: 0.5px;
  border-radius: 8px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
`;

const DropdownComponent = ({ dropdownData, dropdownValue, setDropDownvalue }) => {
  const [isFocus, setIsFocus] = useState(false);

  console.log(dropdownData);

  const formattedData = dropdownData.map((element) => {
    return {
      label: element.name,
      value: element.id,
    };
  });

  return (
    <StyledDropdown
      data={formattedData}
      isFocus={isFocus}
      placeholder={!isFocus ? 'Catégorie' : '...'}
      value={dropdownValue}
      maxHeight={250}
      valueField='value'
      labelField='label'
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setDropDownvalue(item);
        setIsFocus(false);
      }}
      containerStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
    />
  );
};

export default DropdownComponent;
