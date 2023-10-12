import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"
import { v4 as uuid } from "uuid"

function Registry() {

    const [planets, setPlanets] = useState([]);
    const [search, setSearch] = useState("");

    const [newPlanet, setNewPlanet] = useState({
        id: uuid,
        name: "",
        climate: "",
        terrain: "",
        population: 0
    });

    useEffect(() => {
        fetch("http://localhost:8085/planets")
            .then(res => res.json())
            .then(planetList => setPlanets(planetList));
    }, []);

    function handleChange(event) {
        setNewPlanet({ ...newPlanet, [event.target.name]: event.target.value });
    };

    function addPlanet(event) {
        event.preventDefault();
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPlanet)
        })
            .then(res => res.json())
            .then(addedPlanet => setPlanets([...planets, addedPlanet]));
    }


    const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="registry">
            <Search search={search} setSearch={setSearch} />
            <div className="content">
                <PlanetList planets={filteredPlanets} />
                <NewPlanetForm newPlanet={newPlanet} handleChange={handleChange} addPlanet={addPlanet} />
            </div>
        </div>
    )
}

export default Registry;