import React from "react";
import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,432</span>
                    <span className="featuredMoneyRate">
                        -65.8<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,432</span>
                    <span className="featuredMoneyRate">
                        -65.8<ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,432</span>
                    <span className="featuredMoneyRate">
                        +65.8<ArrowUpward className="featuredIcon positive" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
