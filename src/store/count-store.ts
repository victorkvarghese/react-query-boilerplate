import create, { SetState, GetState } from 'zustand';

interface CountStore {
  count: number;
  increment: () => void;
}

export const useCountStore = create<CountStore>((set: SetState<CountStore>, get: GetState<CountStore>) => ({
  count: 0,
  increment: (): void => {
    const { count } = get();
    set({ count: count + 1 });
  },
}));
