import React, { FC, useState } from "react";
import styles from "./Tabs.module.scss";

import classnames from "classnames";
import { TabsProps } from "./types";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

const Tabs: FC<TabsProps> = ({ tabs, onClick, activeTab }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classnames(styles.navigation, {
        [styles.navigation__Dark]: isDarkTheme,
      })}
    >
      <ul
        className={classnames(styles.navigation__list, {
          [styles.navigation__list__Dark]: isDarkTheme,
        })}
      >
        {tabs.map(({ key, disabled, title }) => {
          return (
            <li
              key={key}
              className={classnames(styles.navigation__list__item, {
                [styles.activeTab]: activeTab === key,
              })}
            >
              <button
                className={classnames(
                  activeTab === key
                    ? styles.navigation__list__item__text__active
                    : styles.navigation__list__item__text,
                  {
                    [styles.navigation__list__item__text__Dark]: isDarkTheme,
                  },
                  {
                    [styles.navigation__list__item__text__active__Dark]:
                      isDarkTheme,
                  }
                )}
                onClick={() => onClick(key)}
                disabled={disabled}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
