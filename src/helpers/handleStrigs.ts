export const limitString = (string: string, size: number) => {
  return string.length > size ? `${string.substring(0, size)}...` : string;
};
