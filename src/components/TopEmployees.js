import React, { Component } from 'react';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

class TopEmployees extends Component {

    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    render() {
        
        let owners = {}
        let data = []
        this.props.user.filter(i => i.sold).map(i => owners[i.owner] ? null : owners[i.owner] = 0)
        this.props.user.filter(i => i.sold).map(i => owners[i.owner]++)
        let most = Object.values(owners).sort(function (x, y) { return y - x }).splice(0, 3)

        for (let i of Object.keys(owners)) {
            if (owners[i] === most[0]) {
                data.push({ name: i, sales: most[0] })
            }
        }

        for (let i of Object.keys(owners)) {
            if (owners[i] === most[1]) {
                data.push({ name: i, sales: most[1] })
            }
        }

        for (let i of Object.keys(owners)) {
            if (owners[i] === most[2]) {
                data.push({ name: i, sales: most[2] })
            }
        }
        return ( 
            <div>
            <h5>Top Employees</h5>

            <ComposedChart
                layout="vertical"
                width={500}
                height={300}
                data={data}
                margin={{ top: 25, right: 25, bottom: 25, left: 20 }} 
                padding={{right: 150}}>
                    
                <CartesianGrid stroke="#e2e5e6" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Bar dataKey="sales" barSize={25} fill="#056e8b" />
            </ComposedChart> 
            </div>
        );
    }
}
export default TopEmployees;
