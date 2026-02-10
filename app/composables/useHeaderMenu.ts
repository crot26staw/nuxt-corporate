import type { MenuItem } from '~/types/menu';

export const useHeaderMenu = () => {
  const { $api } = useNuxtApp();

  const { data, pending, error } = useAsyncData('header-menu', () =>
    $api<MenuItem[]>('/header-menu'),
  );

  return {
    menu: data,
    pending,
    error,
  };
};
