export const usePage = () => {
  const { $api } = useNuxtApp();

  const loadPageBySlug = (slug: string) => {
    const { data, pending, error } = useAsyncData(slug, () => $api<any>(slug));
    return {
      data,
      pending,
      error,
    };
  };

  return {
    loadPageBySlug,
  };
};
