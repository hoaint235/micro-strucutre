import { useTranslation } from "react-i18next";

type Props = {
  leftPassword: string;
  rightPassword: string;
};

export function useMatchPassword({
  leftPassword,
  rightPassword,
}: Props): () => boolean | string {
  const { t } = useTranslation();

  if (leftPassword !== rightPassword) {
    return t("auth.errors.twoPasswordMustBeMatch");
  }

  return () => true;
}

export default useMatchPassword;
