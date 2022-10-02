import * as React from 'react';
import type {OfficeColorType} from '../../../../hooks';

type ColorThemePickerProps = {
  color: OfficeColorType;
  isSelected?: boolean;
}

function ColorThemePicker({
  color,
  isSelected = false,
}: ColorThemePickerProps){
  return (
  <div 
    style={{
      width: 60,
      height: 60,
      borderRadius: '50%',
      backgroundColor: color,
      margin: 12, 
      border: isSelected ? '4px solid #475569' : 'none'
    }}
  />
  );
};

export default ColorThemePicker;