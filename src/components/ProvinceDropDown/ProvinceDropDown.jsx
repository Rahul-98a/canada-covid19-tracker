import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './ProvinceDropDown.module.css';
import {fetchCountries} from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    // useEffect takes in a callback
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}> 

            {/* When item is selected, call handleCountryChange function in App.js */}
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}> 
                <option value="">Canada (total)</option> {/* For global, set value to empty string*/}

                {/* Adding all the countries to the drop down, 'i' is the index */}
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}

            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker;