import React from "react"

function NewPlanetForm({ newPlanet: { name, climate, terrain, population }, handleChange, addPlanet }) {

    return (
        <form onSubmit={addPlanet}>
            <input onChange={handleChange} value={name} type="text" name="name" placeholder="Name" />
            <input onChange={handleChange} value={climate} type="text" name="climate" placeholder="Climate" />
            <input onChange={handleChange} value={terrain} type="text" name="terrain" placeholder="Terrain" />
            <input onChange={handleChange} value={population} type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add" />
        </form>
    );
}

export default NewPlanetForm;