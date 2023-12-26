export const validateEmail = (email: string): boolean => {
  return /^[A-Za-z0-9_.-]+@[A-Za-z0-9]+\.[A-z]+(\.([A-z]+))?$/.test(email);
};
