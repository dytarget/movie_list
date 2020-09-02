export const isSuccessResponse = (status) => {
  if (status && status >= 200 && status < 300) {
    return true;
  } else return false;
};
