import create from 'zustand';
import shallow from 'zustand/shallow';
import Overlay from './components/Overlay'

type UseOverlayStoreType = {
  mustShowOverlay: boolean;
  setMustShowOverlay: (state: boolean) => void;
}

const useOverlayStore = create<UseOverlayStoreType>((set) => ({
  mustShowOverlay: false,
  setMustShowOverlay: (state: boolean) => set(() => ({mustShowOverlay: state})),
}))

export type UseOverlayResult = {
  mustShowOverlay: boolean;
  showOverlay: () => void;
  hideOverlay: () => void;
}

export function useOverlay(): UseOverlayResult {
  const state = useOverlayStore(state => ({
    mustShowOverlay: state.mustShowOverlay,
    setMustShowOverlay: state.setMustShowOverlay,
  }), shallow);

  const showOverlay = () => {
    state.setMustShowOverlay(true);
  }
  const hideOverlay = () => {
    state.setMustShowOverlay(false);
  }
  return {
    hideOverlay,
    showOverlay,
    mustShowOverlay: state.mustShowOverlay,
  };
};

export {
  Overlay,
};