import FormSkeleton from './FormSkeleton';
import ListSkeleton from './ListSkeleton';

type Props = {
  Form: typeof FormSkeleton;
  List: typeof ListSkeleton;
};

const SkeletonTemplate: Props = {
  Form: FormSkeleton,
  List: ListSkeleton,
};

export default SkeletonTemplate;
