import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from '@configurations';
import { ILanguageItem } from '@models';
import { Typography } from '@atoms';
import { IconMenu } from '@molecules';

const Language = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('');

  const selectLanguage = (item: ILanguageItem) => {
    const { location } = item;
    if (language !== location) {
      setLanguage(location);
      i18n.changeLanguage(location);
    }
  };

  useEffect(() => {
    selectLanguage(Languages[0]);
  }, []);

  return (
    <IconMenu
      items={Languages}
      onItemClick={(item) => selectLanguage(item)}
      renderItem={(item) => <Typography.Body label={item.title} />}
    >
      {language}
    </IconMenu>
  );
};

export default Language;
