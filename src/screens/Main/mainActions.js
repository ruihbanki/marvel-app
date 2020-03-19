export const MAIN_SET_LOADING = "MAIN_SET_LOADING";
export const MAIN_SET_SNACKBAR = "MAIN_SET_SNACKBAR";

export function setLoading(loading) {
  return {
    type: MAIN_SET_LOADING,
    loading
  };
}

function setSnackbar(message) {
  return {
    type: MAIN_SET_SNACKBAR,
    message
  };
}

export function showSnackbar(message) {
  return dispach => {
    dispach(setSnackbar(message));
    setTimeout(() => {
      dispach(setSnackbar(null));
    }, 4000);
  };
}

export function hideSnackbar() {
  return dispach => {
    dispach(setSnackbar(null));
  };
}
