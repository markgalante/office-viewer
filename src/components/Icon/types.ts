import React from "react";

export type CommonIconProps = {
  size: number;
}

export type IconProps = {
  name: IconNames;
  onClick?: React.MouseEventHandler<HTMLDivElement> 
  size?: number;
  className?: string;
}

export type IconNames = 
  | 'arrow-down'
  | 'arrow-up'
  | 'back'
  | 'edit'
  | 'email'
  | 'location-pin'
  | 'people'
  | 'people-present'
  | 'phone';