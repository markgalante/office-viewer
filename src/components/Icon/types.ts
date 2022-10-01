import React from "react";

export type CommonIconProps = {
  size: number;
}

export type IconProps = {
  name: IconNames;
  onClick?: React.MouseEventHandler<HTMLDivElement> 
  size?: number;
}

export type IconNames = 
  | 'back';