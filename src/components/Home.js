import React from 'react'
import { useState } from 'react';
import covid from '../api/covid';
import CardList from './CardList';
import SearchBar from './SearchBar';

function Home() {
    const [state, setState] = useState({
        results: []
    });


    const onSearch = async (text) => {
        const results = await covid.get("/", { params: { name: text, date: '2020-04-01' } })



        setState(prevState => {
            return { ...prevState, results: results }
        })
    }
    return (
        <div>
            <div class="five">
                <h1>Live Covid19 Data
                    <span>Latest Covid19 data on the web!</span>
                </h1>
            </div>


            <SearchBar onSearch={onSearch} />

            <CardList results={state.results} />
        </div>

    )
}
export default Home