import React from "react";


import FilterSideBarContainer from "./FilterSideBarContainer";
import SortSideBar from "./SortSideBar";

const MainFeature = ({ dataSortSetup }) => {
    return (
        <div>
            <SortSideBar dataSortSetup={dataSortSetup} />
            <FilterSideBarContainer dataSortSetup={dataSortSetup} />
        </div>
    );
};
export default MainFeature;
