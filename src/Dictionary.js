import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js"
import "./Dictionary.css"

export default function Dictionary () {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=816db46aoff47734aa762t93dbac670f`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} placeholder="Please type a word..."/>
        </form>
        <Results results={results}/>
        </div>)
}