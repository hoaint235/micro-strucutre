import Title from './Title';
import Subtitle from './Subtitle';
import Label from './Label';
import Body from './Body';
import Caption from './Caption';

type Props = {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
  Label: typeof Label;
  Body: typeof Body;
  Caption: typeof Caption;
};

const Typography: Props = {
  Title,
  Subtitle,
  Label,
  Body,
  Caption,
};

export default Typography;
