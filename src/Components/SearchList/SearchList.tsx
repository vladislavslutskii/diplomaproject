import React, { FC } from "react";

import styles from "./SearchList.module.scss";
import classNames from "classnames";

import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import Card from "../Card";
import { CardListType } from "../../Utils";

type SearchListProps = {
  searchedPosts: CardListType;
};

const SearchList: FC<SearchListProps> = ({ searchedPosts }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames(styles.listWrap, {
        [styles.listWrap_Dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.listWrap_Card, {
          [styles.listWrap_Card_Dark]: isDarkTheme,
        })}
      >
        {searchedPosts.map((post, id) => {
          return <Card post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default SearchList;
