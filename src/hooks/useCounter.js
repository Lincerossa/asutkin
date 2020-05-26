import create from 'zustand'

const [useStore] = create(set => ({
  count: null,
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count -1 })),
  reset: () => set({ count: null }),
  set: (count) => set({ count })
}))

export default useStore