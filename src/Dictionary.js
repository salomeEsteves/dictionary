import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js"
import "./Dictionary.css"

export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
        let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=816db46aoff47734aa762t93dbac670f`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    

        function load() {
            setLoaded(true);
            search();
        }

        if (loaded) {
            return (
                <div className="Dictionary">
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} placeholder="Please type a word..."/>
                </form>
                <Results results={results}/>
                </div>);
        } else {
            load();
            return "Loading...";
        }
}