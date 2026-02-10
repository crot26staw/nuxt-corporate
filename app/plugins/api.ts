export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = async <T>(url: string, options: any = {}): Promise<T | null> => {
    try {
      return await $fetch<T>(url, {
        baseURL: config.public.apiBase,
        ...options,
      });
    } catch (error: any) {
      if (error?.response?.status === 404) {
        return null;
      }
      throw error;
    }
  };

  return {
    provide: { api },
  };
});
