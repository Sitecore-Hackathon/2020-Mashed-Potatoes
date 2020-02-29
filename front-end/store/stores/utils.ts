export const createAction = <TData = never>(type: string) => (payload?: TData) => ({
  type,
  payload,
});
