import React, { FC } from "react";

import styles from "./CardsList.module.scss";
import classNames from "classnames";

import { CardListProps } from "./types";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import Card from "../Card";

const CardsList: FC<CardListProps> = ({ cardList }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classNames(styles.listWrap, {
        [styles.listWrap__Dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.listWrap__Card, {
          [styles.listWrap__Card__Dark]: isDarkTheme,
        })}
      >
        {cardList.map((post, id) => {
          if (id >= 0 && id <= 12) {
            return <Card post={post} key={post.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default CardsList;
