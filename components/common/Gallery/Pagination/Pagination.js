"use clilent";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./Pagination.module.css";
import "./Pagination.module.css";
function Items({ currentItems }) {
  return (
    <div className={styles.gallery_layout}>
      {currentItems.map((image_content) => (
        <div key={image_content.id}>
          <ImageCard content={image_content} />
        </div>
      ))}
    </div>
  );
}
export default function Pagination({ items, itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        containerClassName="pagination"
        breakLabel="..."
        breakClassName="page-item"
        nextLabel="next"
        nextClassName="page-item"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageLinkClassName="page-link"
        previousLabel="previous"
        previousClassName="page-item"
        renderOnZeroPageCount={null}
        activeClassName="active"
      />
    </>
  );
}
