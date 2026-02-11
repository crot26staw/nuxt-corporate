export const useFooter = () => {
  const { $api } = useNuxtApp();

  const { data, pending, error } = useAsyncData('footer', () =>
    $api<any>('/footer'),
  );

  return {
    data,
    pending,
    error,
  };
};
