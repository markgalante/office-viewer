
import {
  collection, addDoc,
} from 'firebase/firestore';
import {
  firestore
} from '../../../../../config';
import {
  useMutation,
} from '@tanstack/react-query';
import {OfficeType} from '../../../../../hooks/types';

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
  const mutation = useMutation<
    any, 
    any, 
    OfficeType, 
    unknown
    >(office => handleAddOffice(office), {
      onError: () => {
        console.error('Error creating office');
      },
      onSuccess: () => {
        console.log('Success creating office');
      },
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
