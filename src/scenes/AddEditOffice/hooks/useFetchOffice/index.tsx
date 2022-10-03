import * as React from 'react';
import {
  useQuery,
} from '@tanstack/react-query';
import {
  getDoc,
  doc,
} from 'firebase/firestore';
import {
  firestore,
} from '../../../../config';

async function handleFetchOffice(id: string){
  try {
    const docRef = doc(firestore, 'office', id);
    const docSnap = await getDoc(docRef);
    return {
      ...docSnap.data(),
      id: docSnap.id
    }; 
  } catch (error) {
    return error;
  }
}

export function useFetchOffice(uid: string){
  const {
    data,
    error, 
    status,
  } = useQuery<any, any, any, any>([`office-${uid}`], () => handleFetchOffice(uid))
  return {
    data,
    error,
    status
  }
}