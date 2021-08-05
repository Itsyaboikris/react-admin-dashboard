import React from "react";
import {Line, LineChart, Legend, ResponsiveContainer, Tooltip, CartesianGrid, XAxis} from 'recharts';
import "./chart.css"

export default function Chart({title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line dataKey={dataKey} type="monotone" stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e1e0e0" strokeDasharray="5 5"/>}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
