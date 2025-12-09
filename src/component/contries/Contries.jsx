import { useEffect, useState } from "react";
import axios from "axios";

function Countries() {
  const [countries, setCountries] = useState([]);

  const handleFetchCounties = () => {
    // http request using the fetch browser api
    // fetch(
    //   "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,flags,name,population"
    // )
    //   .then((response) => {
    //     // Check if the request was successful (status code 200-299)
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     // Parse the JSON response
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Process the retrieved data
    //     setCountries(data);
    //     console.log("Fetched data:", data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors during the fetch operation
    //     console.error("Error fetching data:", error);
    //   });

    axios
      .get(
        "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,flags,name,population"
      )
      .then((response) => {
        console.log("User data:", response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  useEffect(() => {
    handleFetchCounties();
  }, []);

  return (
    <>
      <h2>List of Countries</h2>

      {countries.map((country, index) => {
        return (
          <div key={index}>
            <img src={country.flags.png} alt="" />
            <p>Name: {country.name.common}</p>
            <p>Population: {country.population}</p>
            <p>Language: {Object.values(country.languages)[0]}</p>
            <p>Capital: {country.capital[0]}</p>
          </div>
        );
      })}
    </>
  );
}

export default Countries;
