import * as React from 'react';
import type {OfficeColorType} from '../../types';

type ColorThemePickerProps = {
  color: OfficeColorType;
  selectedColor?: OfficeColorType;
  setColor?: (officeColor: OfficeColorType) => void;
}

function ColorThemePicker({
  color,
  selectedColor = undefined,
  setColor,
}: ColorThemePickerProps){
  const isSelected = selectedColor === color;
  const handleColorClick = () => {
    setColor?.(color);
  }
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
    onClick={handleColorClick}
  />
  );
};

export default ColorThemePicker;