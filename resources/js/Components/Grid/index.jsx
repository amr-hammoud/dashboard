import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import QuoteWidget from "../../Widgets/QuoteWidget";

const GridComponent = () => {

    const layout = [{ i: "a", x: 0, y: 0, w: 3, h: 2, static: false }];

    const ResponsiveGridLayout = WidthProvider(Responsive);

    return (
        <ResponsiveGridLayout className="layout" layouts={{ lg: layout }}>
            <div key="a">
                <QuoteWidget />
            </div>
        </ResponsiveGridLayout>
    );
};

export default GridComponent;
