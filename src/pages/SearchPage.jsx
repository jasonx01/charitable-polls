import { useState } from 'react';
export default function Search() {
    const [query, setQuery] = useState("");

    const charities = [
        "St. Jude Children's Hospital",
        "Make a Wish",
        "Pablo",
        "Obama Trust Fund"
    ]
 
    return (
        <>
            <div>
                <label>Search</label>
                <input type="text" onChange={(e) => {
                    setQuery(e.target.value)
                }
                } />
            </div>
            <div>
                <ul>
                {
                    charities.filter((each) => each.toLowerCase().indexOf(query.toLowerCase()) != -1).map(
                        (each) => {
                            return <CharityListItem key={each} name={each}></CharityListItem>
                        }
                    )
                }
                </ul>
            </div>
        </>
    )
}

function CharityListItem({ name }) {
    return <div>{name}</div>
}