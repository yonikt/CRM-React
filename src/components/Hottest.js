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
            
             
               

                <div class="slider">
                <div class="legend"></div>
                <div class="content">
                    <div class="content-txt">
                        <h1>Hottest Country</h1>
                        <h2> {this.hottestCountry()}</h2>
                    </div>
                </div>
                <div class="image">
                    <img src="https://pixelz.cc/wp-content/uploads/2017/11/eiffel-tower-at-sunset-paris-france-uhd-4k-wallpaper.jpg"></img>
                </div>
            </div>

            
        )
    }
}

export default Hottest;