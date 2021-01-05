import React from 'react';

// Importing required components using the index.js file in the components folder
import { Cards, Chart, CountryPicker } from './components';

// Importing the CSS
import styles from './App.module.css';

// Importing function that makes the API call to get the data
import { fetchData, fetchTotalRecovered, fetchAllProvinces, fetchTotalInfected, fetchTotalDeaths } from './api'; // dont need to specify index.js, its automatically searched

// Importing react bootstrap
import * as ReactBootStrap from 'react-bootstrap';

class App extends React.Component {
    // Need to set data in state so that we can pass it as a prop to Cards
    state = {
        data: {}, // data is just an empty object, until it gets populated in componentDidMount
        totalRecovered: {},
        totalInfected: {},
        totalDeaths: {},
        country: '',
        provinces: {},
        lastUpdate: '',
    }


    /* componentDidMount() is a hook that gets invoked right after a React component has been mounted 
    aka after the first render() lifecycle
    */

    // Get data from the API
    async componentDidMount() { // since we are using "await", the function needs to be asynchronous
        const fetchedData = await fetchData(); // need to await becuase fetchData is an asynchronous function
        const fetchedTotalRecovered = await fetchTotalRecovered();
        const fetchedTotalInfected = await fetchTotalInfected();
        const fetchedTotalDeaths = await fetchTotalDeaths();
        const fetchedProvinces = await fetchAllProvinces();

        this.setState({ data: fetchedData });
        this.setState({ lastUpdate: fetchedData.lastUpdate});
        this.setState({ totalRecovered: fetchedTotalRecovered });
        this.setState({ totalInfected: fetchedTotalInfected });
        this.setState({ totalDeaths: fetchedTotalDeaths });
        this.setState({ provinces: fetchedProvinces });
    }


    // When a new country is selected, get the new information from the API (function called from CountryPicker.jsx)
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }


    // Display the cards, graphs, and the drop down country picker
    render() {
        // Destructure this.state.data (google destructuring props in react)
        const { data, country, totalRecovered, provinces, totalInfected, totalDeaths, lastUpdate } = this.state;

        return (
            <div className={styles.container}>
                <style>{'body { background-color: lightgrey}'}</style>


                <div>
                    <h1>Canada COVID-19 Tracker</h1>
                </div>

                <div>
                    <h6>COVID Data Last Updated: {lastUpdate}</h6>
                </div>


                <Chart data={data} country={country} totalRecovered={totalRecovered} provinces={provinces}
                    totalInfected={totalInfected} totalDeaths={totalDeaths} />
                <Cards data={data} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>
        )
    }

}

export default App;
