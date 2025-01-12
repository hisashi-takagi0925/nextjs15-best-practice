export const useCancelForm = () => {
  const router = useRouter();

  const cancel = () => {
    router.back();
  };

  return { cancel };
};
