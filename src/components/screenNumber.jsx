import { Pagination } from 'flowbite-react';

function ScreenNumber({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className='flex overflow-x-auto sm:justify-center mt-4'>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
        showIcons
      />
    </div>
  );
}

export default ScreenNumber;
