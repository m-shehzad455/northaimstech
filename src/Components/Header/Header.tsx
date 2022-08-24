import { Group, Text, Transition } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import ReactIcon from "../Reacticon/ReactIcon";
import Search from "./Search/Search";

export type SearchProps = {
  search: boolean;
};

const Header: React.FC = () => {
  const [popperOpen, setSearchBox] = useState<SearchProps | boolean>(false);
  const [detailsVisible, setDetailsVisible] = useState(true);
  // const [popperOpen, setPopperOpen] = useState(false);
  const [logsVisible, setLogsVisible] = useState(false);

  const scrollHeader = () => {
    let header = document.querySelector<HTMLElement>(".header")!;
    if (window.scrollY >= 50) {
      header.classList.add("scrool__header");
    } else {
      header.classList.remove("scrool__header");
    }
  };
  window.addEventListener("scroll", scrollHeader);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let elm = document.querySelector<HTMLElement>(".myBar")!;
    elm.style.width = scrolled + "%";
  }

  const handleSearch = () => {
    setSearchBox({
      search: false,
    });
    setLogsVisible(!logsVisible);
  };

  return (
    <div className="transprant fixed left-0 right-0 top-0 header ease-in duration-200 z-50">
      <div className="container flex py-2 items-center justify-between">
        <Link to={"/"}>
          <Text className="text-1xl" weight={500}>
            W3D_Blogger
          </Text>
        </Link>
        <Group className="flex justify-end items-center">
          <Button
            className="px-2 py-2 focus:ring-0 rounded-none"
            xs
            onClick={handleSearch}
          >
            <ReactIcon icon={"IoIosSearch"} className="text-bold text-2xl" />
          </Button>
          <Button className="px-3 py-3 focus:ring-0 rounded-none" sm>
            Demo Button
          </Button>
        </Group>
        <Transition mounted={logsVisible} transition={"fade"} duration={350}>
          {(styles) => {
            return (
              <div
                style={styles}
                className="fixed top-0 left-0 right-0 h-screen flex justify-center items-center bg-custome"
              >
                {popperOpen && (
                  <Search
                    setSearchBox={setSearchBox}
                    setLogsVisible={setLogsVisible}
                  />
                )}
              </div>
            );
          }}
        </Transition>
      </div>
      <div className="progress-container">
        <div className="progress-bar myBar"></div>
      </div>
    </div>
  );
};

export default Header;
