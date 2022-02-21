import cx from 'classnames';

export type PaginationProps = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  hasPreviousPage,
  hasNextPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className={cx('mr-4', {
          'text-gray-400 pointer-events-none': !hasPreviousPage,
        })}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className={cx({
          'text-gray-400 pointer-events-none': !hasNextPage,
        })}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
