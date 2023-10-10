import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import QuoteWidget from "../../Widgets/QuoteWidget";
import WeatherWidget from "../../Widgets/WeatherWidget";
import { Toaster } from "react-hot-toast";

const GridComponent = () => {
    const layout = [
        { i: "a", x: 7, y: 0, w: 4, h: 2, static: false },
        { i: "b", x: 0, y: 0, w: 7, h: 4, static: false },
    ];

    const ResponsiveGridLayout = WidthProvider(Responsive);

    return (
        <div>
            <div>
                <Toaster />
            </div>
            <ResponsiveGridLayout className="layout" layouts={{ lg: layout }}>
                <div className=" overscroll-auto" key="a">
                    <QuoteWidget />
                </div>
                <div className="overflow-auto" key="b">
                    <WeatherWidget />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};

export default GridComponent;
