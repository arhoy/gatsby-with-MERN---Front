// Currently not being used
import React from 'react';
import { PaginationContainer1 } from './AmazonProductsStyling';

const Pagination1 = ({ pagination }) => {
  return (
    <PaginationContainer1>
      {pagination && pagination.prev && (
        <button>Page {pagination.prev.page}</button>
      )}
      {pagination && pagination.next && (
        <button>Page {pagination.next.page}</button>
      )}
    </PaginationContainer1>
  );
};

export default Pagination1;
