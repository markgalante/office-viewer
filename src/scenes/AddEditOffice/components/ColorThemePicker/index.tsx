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
      width: isSelected ? 30 : 36,
      height: isSelected ? 30 : 36,
      borderRadius: '50%',
      backgroundColor: color,
      border: isSelected ? '4px solid #475569' : 'none'
    }}
    onClick={handleColorClick}
  />
  );
};

export default ColorThemePicker;