export const GET_POST_TAG = "post" as const;

export const generatePostTag = (id: string) => {
  return [GET_POST_TAG, id];
};
