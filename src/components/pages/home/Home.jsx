import React from "react";
import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import {data} from "../../dummyData";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLarge from "../../widgetLarge/WidgetLarge";


export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} title="User Analytics" grid dataKey="Active Users"/>
            <div className="homeWidget">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
