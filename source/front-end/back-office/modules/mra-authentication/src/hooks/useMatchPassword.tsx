import { t } from "@mra/utility";

type Props = {
  leftPassword: string;
  rightPassword: string;
};

export function useMatchPassword({
  leftPassword,
  rightPassword,
}: Props): () => boolean | string {
  const isMatch = () =>
    leftPassword === rightPassword || t("auth.errors.twoPasswordMustBeMatch");
  return isMatch;
}

export default useMatchPassword;
