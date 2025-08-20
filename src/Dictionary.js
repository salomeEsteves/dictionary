import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js"
import "./Dictionary.css"

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">"This is the component"
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
        <Results results={results}/>
        </div>)
}