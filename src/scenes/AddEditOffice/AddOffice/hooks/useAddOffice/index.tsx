import * as React from 'react';
import {
  collection, addDoc,
} from 'firebase/firestore';
import {
  firestore
} from '../../../../../config';
import {
  useOverlay
} from '../../../../../hooks';
import {
  useMutation,
} from '@tanstack/react-query';
import type {OfficeType} from '../../../types';

function handleAddOffice(office: OfficeType){
  return addDoc(
    collection(
      firestore, 'office'
    ), {
      ...office,
    }
  );
}

type UseAddOfficeResult = {
  addOffice: (office: OfficeType) => Promise<any>
  status: "error" | "idle" | "loading" | "success"
}

export function useAddOffice(): UseAddOfficeResult{
  const {showOverlay, hideOverlay} = useOverlay();
  const mutation = useMutation<
    any, 
    any, 
    OfficeType, 
    unknown
    >(office => handleAddOffice(office), {
      onError: () => {
        console.error('Error creating office');
        hideOverlay();
      },
      onSuccess: (res, variables) => {
        console.log(res, variables);
        hideOverlay();
      },
      onMutate: () => {
        showOverlay();
      }
    });
  const addOffice = (office: OfficeType) => {
    return mutation.mutateAsync(office)
  };
  const status = mutation.status;
  return {
    addOffice,
    status,
  }
}
