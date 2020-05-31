import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch } from "react-redux";
import { viewUserBooks } from "../store/actions/bookActions"

const AppPagination = ({ itemCount, pages }) => {
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    const page = pages.find((page) => page.number === pageNumber);
    dispatch(viewUserBooks(page.url));
  };
  return (
    <div className="col-md-6">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={4}
        totalItemsCount={itemCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};
export default AppPagination;
