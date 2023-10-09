import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridComponent = () => {

    const layout = [
        { i: "a", x: 0, y: 0, w: 5, h: 2, static: false },
        { i: "b", x: 5, y: 0, w: 3, h: 2, static: false },
        { i: "c", x: 8, y: 0, w: 4, h: 2, static: false },
        { i: "d", x: 0, y: 2, w: 3, h: 2, static: false },
    ];

    const ResponsiveGridLayout = WidthProvider(Responsive);

    return (
        <ResponsiveGridLayout className="layout" layouts={{ lg: layout }}>
            <div key="a">Element
            </div>
            <div className="p-5 gap-4" key="b">Element
            </div>
            <div key="c">Element
            </div>
            <div key="d">Element
            </div>
        </ResponsiveGridLayout>
    );
};

export default GridComponent;
