import { useState, useEffect } from 'react';

export default function Search() {
    const [query, setQuery] = useState("");
    const [charities, setCharities] = useState([]);

    // const charities = [
    //     "St. Jude Children's Hospital",
    //     "Make a Wish",
    //     "Pablo",
    //     "Obama Trust Fund"
    // ]

    useEffect(() => {
        fetch('/charities.json')
            .then(response => response.json())
            .then(data => setCharities(data))
            .catch((error) => console.error("Error fetching questions:", error));
    }, []);

    return (
        <>
            <div>
                <label><h2>Search</h2> </label>
                <input type="text" onChange={(e) => { setQuery(e.target.value) }} /><br/><br/>
            </div>
            <div className='feed' style={{ bottom: '100px', width: '100%', height: '77%', color: "black" }}>
                {
                    charities.filter((each) => each.charity_name.toLowerCase().indexOf(query.toLowerCase()) != -1).map(
                        (each) => {
                            return <CharityListItem key={each} Charity={each}></CharityListItem>
                        }
                    )
                }
            </div>
        </>
    )
}

function CharityListItem({ Charity }) {
    return <div className='tweet' style={{ backgroundColor: 'white'}}>
        <h1>{Charity.charity_name}</h1>
        <img src={Charity.imglink} style={{ width: '80%' }}></img>
    </div>
}