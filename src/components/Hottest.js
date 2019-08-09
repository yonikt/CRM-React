import React, { Component } from 'react';

class Hottest extends Component {

    constructor() {
        super()
        this.state = {}
    }

    hottestCountry = () => {
        let countries = {}
        let max = 0
        let result = ""
        this.props.user.map(i => {
            if (countries[i.country]) {
                countries[i.country]++
            }
            else {
                countries[i.country] = 1
            }
            for (let country in countries) {
                if (countries[country] > max) {
                    max = countries[country]
                    result = country
                }
            }
        })
        return result
    }

    render() {
        return (
            
             
               

                <div>
                        <h1>{this.hottestCountry()}...</h1>
                        <h2> Is The Hottest Country </h2>
                        <hr></hr>
           
            </div>

            
        )
    }
}

export default Hottest;