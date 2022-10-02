import * as React from 'react';
import type {
  OfficeType,
  OfficeColorType
} from '../../types';

export type UseOfficeInfoResult = {
  officeInfo: OfficeType,
  setOfficeName: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setOfficeAddress: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setEmailAddress: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setPhoneNumber: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setMaxCapacity: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setColor: (officeColor: OfficeColorType) => void;
  populateOfficeInfo: (officeInfo: OfficeType) => void;
}

export function useOfficeInfo(): UseOfficeInfoResult{
  const [
    officeInfo,
    setOfficeInfo
  ] = React.useState<OfficeType>({
    address: '',
    emailAddress: '',
    maximumCapacity: 1,
    name: '',
    officeColor: '#FFBE0B',
    phoneNumber: '',
  });
  const populateOfficeInfo = (officeInfo: OfficeType) => {
    setOfficeInfo(officeInfo);
  }
  const setOfficeName = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.value;
    setOfficeInfo({
      ...officeInfo,
      name,
    });
  };
  const setOfficeAddress = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const address = e.target.value;
    setOfficeInfo({
      ...officeInfo,
      address,
    });
  };
  const setEmailAddress = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const emailAddress = e.target.value;
    setOfficeInfo({
      ...officeInfo,
      emailAddress,
    });
  };
  const setPhoneNumber = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const phoneNumber = e.target.value;
    setOfficeInfo({
      ...officeInfo,
      phoneNumber,
    });
  };
  const setMaxCapacity = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const maximumCapacity = e.target.value;
    setOfficeInfo({
      ...officeInfo,
      maximumCapacity: Number(maximumCapacity),
    });
  };
  const setColor = (officeColor: OfficeColorType) => {
    setOfficeInfo({
      ...officeInfo,
      officeColor,
    });
  };

  return {
    officeInfo,
    setColor,
    setEmailAddress,
    setMaxCapacity,
    setOfficeAddress,
    setOfficeName,
    setPhoneNumber,
    populateOfficeInfo,
  }
};
