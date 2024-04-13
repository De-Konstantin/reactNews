import { IPaginationProps } from '../../model/types';
import PaginationButton from '../paginationButton/paginationButton';

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const Pagination = ({ top, bottom, children, ...paginationProps }: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButton {...paginationProps} />}
      {children}
      {bottom && <PaginationButton {...paginationProps} />}
    </>
  );
};

export default Pagination;
