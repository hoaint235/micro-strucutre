type Props = {
  leftPassword: string;
  rightPassword: string;
};

export function useMatchPassword({
  leftPassword,
  rightPassword,
}: Props): () => boolean | string {
  if (leftPassword !== rightPassword) {
    return () => "auth.errors.twoPasswordMustBeMatch";
  }

  return () => true;
}

export default useMatchPassword;
