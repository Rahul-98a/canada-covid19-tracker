import axios from 'axios'; // used to make API requests


// fetchData is an "arrow function"
// fetchData is an ansynchronous function returning a response from the API
export const fetchData = async (country) => {
    try {
        // If a province is selected
        if (country) {

            // Get the data for all provinces
            let url = 'https://covid19.mathdro.id/api/countries/canada/recovered';
            const { data } = await axios.get(url);

            // Iterate through all provinces, and only return data for the selected province
            let size = Object.keys(data).length;
            let i = 0;
            for (i = 0; i < size; i++) {
                if (parseInt(data[i].provinceState.localeCompare(country)) == 0) {
                    const modifiedData = {
                        confirmed: { value: data[i].confirmed },
                        recovered: { value: data[i].recovered },
                        deaths: { value: data[i].deaths },
                        lastUpdate: { value: data[i].lastUpdate },
                    }
                    return modifiedData;
                }
            }
        }

        // If a province was not selected, show global stats for Canada
        else {
            // The URL to get global covid data for canada
            let url = 'https://covid19.mathdro.id/api/countries/canada/';

            // Make the API call, and from the data object, get the confirmed, recovered, deaths, and lastUpdate attributes      
            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

            // Create a new object using the data we got from the API
            const modifiedData = {
                confirmed: confirmed,
                recovered: recovered,
                deaths: deaths,
                lastUpdate: lastUpdate,
            }

            return modifiedData;
        }
    }
    catch (error) {
        console.log(error);
    }
}



// Get a list of the canadian provinces
export const fetchCountries = async () => {
    try {
        // Get the data
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries/canada/recovered');

        // Iterate through array and remove "Grand Princess" and "Repartriated Travellers"
        let result = data.map((country) => country.provinceState);
        const index = result.indexOf("Grand Princess");
        if (index > -1) {
            result.splice(index, 1);
        }
        const index2 = result.indexOf("Repatriated Travellers");
        if (index2 > -1) {
            result.splice(index2, 1);
        }

        // Return list of provinces
        return result;
    }
    catch (error) {
        console.log(error);
    }
}



/*
* Total recovered patients across all provinces
*/
export const fetchTotalRecovered = async () => {
    try {
        // Get the data
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries/canada/recovered');

        // Iterate through array and remove "Grand Princess" and "Repartriated Travellers"
        let result = data.map((recovered) => recovered.recovered);

        // Return list of provinces
        return result;
    }
    catch (error) {
        console.log(error);
    }
}



/*
* Total infected patients across all provinces
*/
export const fetchTotalInfected = async () => {
    try {
        // Get the data
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries/canada/recovered');

        // Iterate through array and remove "Grand Princess" and "Repartriated Travellers"
        let result = data.map((confirmed) => confirmed.confirmed);

        // Return list of provinces
        return result;
    }
    catch (error) {
        console.log(error);
    }
}



/*
* Total deaths across all provinces
*/
export const fetchTotalDeaths = async () => {
    try {
        // Get the data
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries/canada/recovered');

        // Iterate through array and remove "Grand Princess" and "Repartriated Travellers"
        let result = data.map((deaths) => deaths.deaths);

        // Return list of provinces
        return result;
    }
    catch (error) {
        console.log(error);
    }
}



/*
* Get a list of the canadian provinces
*/ 
export const fetchAllProvinces = async () => {
    try {
        // Get the data
        const { data } = await axios.get('https://covid19.mathdro.id/api/countries/canada/recovered');

        // Iterate through array and remove "Grand Princess" and "Repartriated Travellers"
        let result = data.map((country) => country.provinceState);

        // Return list of provinces
        return result;
    }
    catch (error) {
        console.log(error);
    }
}
