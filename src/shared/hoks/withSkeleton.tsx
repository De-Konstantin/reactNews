import Skeleton from '../ui/skeleton/skeleton';
import { DirectionType, SkeletonType } from '../interfaces';

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,

  count?: number,
) {
  return function WithSkeleton(props: Props & P) {
    const { type, direction = 'column', isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
    return <Component type={type} {...(restProps as P)} />;
  };
}

export default withSkeleton;
