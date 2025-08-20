import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for the definition of "${keyword}"`);

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
        </div>)
}