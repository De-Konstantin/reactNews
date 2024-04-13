export interface IPaginationProps {
  totalPages: number;
  handlePrevisiousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}
