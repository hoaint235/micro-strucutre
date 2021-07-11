import Title from "./Title";
import Subtitle from "./Subtitle";
import Label from "./Label";
import Body from "./Body";
import Caption from "./Caption";

type MfaTypographyProps = {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
  Lable: typeof Label;
  Body: typeof Body;
  Caption: typeof Caption;
};

const Typography: MfaTypographyProps = {
  Title: Title,
  Subtitle: Subtitle,
  Lable: Label,
  Body: Body,
  Caption: Caption,
};

export default Typography;
