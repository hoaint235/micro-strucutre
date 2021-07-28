import { Card, CardContent, CardHeader } from "@material-ui/core";
import { UseFormReturn } from "react-hook-form";
import { Typography } from "../../atoms";

type Props = {
  form: UseFormReturn<any>;
};

const ProductImagesForm = (props: Props) => {
  const { form } = props;

  return (
    <Card>
      <CardHeader
        title={<Typography.Body label="addProductPage.productImages" />}
      />
      <CardContent>
        
      </CardContent>
    </Card>
  );
};

export default ProductImagesForm;
