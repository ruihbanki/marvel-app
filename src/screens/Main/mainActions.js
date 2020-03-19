export const MAIN_SET_LOADING = "MAIN_SET_LOADING";

export function setLoading(loading) {
  return {
    type: MAIN_SET_LOADING,
    loading
  };
}
