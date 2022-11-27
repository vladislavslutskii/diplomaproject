import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import classnames from "classnames";
import { useSelector } from "react-redux";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import styles from "./Paginate.module.scss";

const Paginate = ({ pagesCount, onPageChange, page }: any) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const isPostsLoading = useSelector(PostsSelectors.getPostsLoading);
  return (
    <ReactPaginate
      pageCount={pagesCount}
      onPageChange={onPageChange}
      containerClassName={classnames(styles.pagesContainer, {
        [styles.pagesContainer1]: isPostsLoading,
        [styles.pagesContainer_Dark]: isDarkTheme,
      })}
      pageClassName={classnames(styles.pageNumber, {
        [styles.pageNumber_Dark]: isDarkTheme,
      })}
      breakClassName={classnames(styles.pageNumber, {
        [styles.pageNumber_Dark]: isDarkTheme,
      })}
      breakLinkClassName={styles.linkPage}
      activeLinkClassName={styles.linkPage}
      pageLinkClassName={classnames(styles.linkPage, {
        [styles.linkPage_Dark]: isDarkTheme,
      })}
      activeClassName={styles.activePageNumber}
      nextClassName={classnames(styles.pageNumber, styles.nextButton, {
        [styles.availableToClickButton]: page !== pagesCount,
      })}
      previousClassName={classnames(styles.pageNumber, styles.prevButton, {
        [styles.availableToClickButton]: page !== 1,
      })}
      previousLinkClassName={styles.linkPage}
      nextLinkClassName={styles.linkPage}
      previousLabel={<ArrowLeft width={24} height={24}></ArrowLeft>}
      nextLabel={<ArrowRight width={24} height={24}></ArrowRight>}
    />
  );
};

export default Paginate;
