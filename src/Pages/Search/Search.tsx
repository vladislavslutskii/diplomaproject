import classNames from "classnames";
import React from "react";
import Paginate from "../../Components/Paginate";
import SearchList from "../../Components/SearchList";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import styles from "./Search.module.scss";

const Search = () => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const POST_MOCK = [
    {
      id: 0,
      image:
        "https://cdn.pixabay.com/photo/2015/12/05/08/25/fantasy-1077863__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",

      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2015/12/05/08/25/fantasy-1077863__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",

      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2022/03/10/13/59/astronaut-7059915__340.png",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",

      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/20/16/astronaut-1840936__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2018/04/22/05/29/star-3340185__340.png",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 7,
      image:
        "https://cdn.pixabay.com/photo/2012/10/10/11/06/moon-walk-60616__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2019/09/06/10/36/astronaut-4456106__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 9,
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/14/41/astronaut-1849402__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 10,
      image:
        "https://cdn.pixabay.com/photo/2012/10/25/23/40/moon-landing-62879__340.jpg",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
    {
      id: 11,
      image:
        "https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416__340.png",
      text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight",
      date: "April 20, 2021",
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    },
  ];

  return (
    <div
      className={classNames(styles.Search, {
        [styles.Search__Dark]: isDarkTheme,
      })}
    >
      <div
        className={classNames(styles.Search__container, {
          [styles.Search__container__Dark]: isDarkTheme,
        })}
      >
        <div
          className={classNames(styles.Search__container__titleWrap, {
            [styles.Search__container__titleWrap__Dark]: isDarkTheme,
          })}
        >
          Search result "Astronauts"
        </div>
        <div className={styles.Search__container__CardsListWrap}>
          {/* <SearchList searchedPosts={POST_MOCK}></SearchList> */}
        </div>
        <div className={styles.Search__container__Paginate}>
          <Paginate pagesCount={`16`}></Paginate>
        </div>
      </div>
    </div>
  );
};

export default Search;
