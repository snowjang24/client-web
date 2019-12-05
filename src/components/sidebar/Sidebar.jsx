import React, { useContext } from "react";

import Directory from "../directory/Directory";
import { FoldBtnIcon } from "../../iconSVG";
import { SidebarContext } from "../../MyContext";

import styled from "styled-components";

import "./sidebar.scss";

const Sidebar = () => {
  const { hidden, toggleSidebar } = useContext(SidebarContext);

  const testDir = [
    { name: "Programming", dirTree: [] },
    { name: "Game", dirTree: [] },
    {
      name: "Videos3123123123123123",
      dirTree: [
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        {
          name: "Test",
          dirTree: [
            { name: "Videos3123123123123123", dirTree: [] },
            {
              name: "232423423",
              dirTree: [
                { name: "12312321312312", dirTree: [] },
                { name: "12451241234123123", dirTree: [] }
              ]
            }
          ]
        },
        { name: "test2", dirTree: [] }
      ]
    }
  ];

  // useEffect(async () => {
  //   const response = await fetch("http://106.10.39.188:1024", {
  //     crossDomain: true,
  //     "content-type": "application/json"
  //   });
  //   console.log(response.body);
  // }, []);

  const closeSidebar = () => {
    toggleSidebar(true);
  };
  const expandDir = dirList => {
    return dirList.map(dirItem => (
      <Directory dirName={dirItem.name}>{expandDir(dirItem.dirTree)}</Directory>
    ));
  };

  return (
    <SidebarContainer hidden={hidden} className="sidebar">
      <div className="sidebar__navbar">
        <div className="user-btn">User Name</div>
        <button className="close-btn" onClick={closeSidebar}>
          <FoldBtnIcon fill="#A8A8A8" />
        </button>
      </div>
      <div className="sidebar__new-directory">
        <div>+ New Directory</div>
      </div>
      <div className="sidebar__directory directory">
        <div className="directory__type">Private</div>
        <div className="directory__list">
          <ul>{expandDir(testDir)}</ul>
        </div>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: ${({ hidden }) => {
    console.log(hidden);
    return hidden ? "0px" : "240px";
  }}};
`;

export default Sidebar;
