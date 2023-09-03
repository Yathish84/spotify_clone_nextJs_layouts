import { create } from 'zustand';

const useUploadModalTrigger = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModalTrigger;