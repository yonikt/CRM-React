import React, { Component } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid } from 'recharts';

class SalesByCountry extends Component {


    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        let countries = {}
        let arr = []
        this.props.user.filter(i => i.sold).map(i => countries[i.country] ? null : countries[i.country] = 0)
        this.props.user.filter(i => i.sold).map(i => countries[i.country]++)
        for (let i in countries) {
            arr.push({ name: i, sales: countries[i] })
        }

        return (
            <div>
                <h5>Sales By Country</h5>
            <BarChart
                width={650}
                height={300}
                data={arr}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Bar dataKey="sales" fill="#056e8b" />
            </BarChart>
            </div>
        );
    }
}


export default SalesByCountry;