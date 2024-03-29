import React, { FC, useEffect, useState } from "react";
import styles from "./User.module.scss";

import classNames from "classnames";
import { UserImg } from "../../Assets/Icons";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { UserPropsType } from "./type";

const User: FC<UserPropsType> = ({ username }) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const res = username.split("").filter(function (l: any) {
    return ~caps.indexOf(l);
  });

  return (
    <div
      className={classNames(styles.user, {
        [styles.user_Dark]: isDarkTheme,
      })}
    >
      <div className={styles.user_Wrap}>
        <div className={styles.user_Img}>
          {res.length !== 0 ? res : <UserImg width={24} height={24}></UserImg>}
        </div>
        <p
          className={classNames(styles.user_Text, {
            [styles.user_Text_Dark]: isDarkTheme,
          })}
        >
          {username}
        </p>
      </div>
    </div>
  );
};

export default User;
