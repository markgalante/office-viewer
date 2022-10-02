export type OfficeType = {
  name: string;
  address: string;
  emailAddress: string;
  phoneNumber: string;
  maximumCapacity: number;
  officeColor: OfficeColorType;
}

export type OfficeColorType =
  | '#FFBE0B'
  | '#FF9B71'
  | '#FB5607'
  | '#97512C'
  | '#DBBADD'
  | '#FF006E'
  | '#A9F0D1'
  | '#00B402'
  | '#489DDA'
  | '#0072E8'
  | '#8338EC';