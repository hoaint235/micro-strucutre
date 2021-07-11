import Title from "./Title";
import Subtitle from "./Subtitle";
import Label from "./Label";
import Body from "./Body";

type MfaTypographyProps = {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
  Lable: typeof Label;
  Body: typeof Body;
};

const Typography: MfaTypographyProps = {
  Title: Title,
  Subtitle: Subtitle,
  Lable: Label,
  Body: Body,
};

export default Typography;
