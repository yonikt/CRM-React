import React, { Component } from 'react';


class Column extends Component {
    render() {
        return (
            <div>
                <tr className="tg">
                    <th className="tg-8zwo">Name</th>
                    <th className="tg-0lax">Surname</th>
                    <th className="tg-0lax">Country</th>
                    <th className="tg-0lax">First Contact</th>
                    <th className="tg-0lax">Email</th>
                    <th className="tg-0lax">Sold</th>
                    <th className="tg-0lax">Owner</th>
                </tr>
            </div>
        )
    }
}


export default Column;