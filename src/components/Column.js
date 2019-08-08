import React, { Component } from 'react';

class Column extends Component {
    render() {
        return (
            <div class="fl-table">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                            <th>First Contact</th>
                            <th>Email</th>
                            <th>Sold</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                </table>
            </div>

        )
    }
}


export default Column;