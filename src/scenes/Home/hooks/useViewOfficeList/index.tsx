import {
  useQuery,
} from '@tanstack/react-query';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import {
  firestore,
} from '../../../../config';
import {
  OfficeType,
} from '../../../../scenes/AddEditOffice/types';

const VIEW_OFFICE_LIST_QUERY:string = 'office';

async function handleViewOfficeCollections(){
  try {
    const querySnapshot = await getDocs(
      collection(
        firestore,
        'office'
      )
    );
    const offices = querySnapshot.docs.map(doc => doc.data());
    return offices;
  } catch (error) {
    return error;
  }
};

type UseViewOfficeListResult = {
  data: Array<OfficeType> | undefined;
  status: 'error' | 'success' | 'loading'
  error: any;
  refetch: () => void;
}

export function useViewOfficeList(): UseViewOfficeListResult{
  const {
    data,
    status,
    error,
    refetch,
  } = useQuery<any,unknown, Array<OfficeType>, any>([VIEW_OFFICE_LIST_QUERY], handleViewOfficeCollections);
  return {
    data,
    status,
    error,
    refetch,
  }
};
