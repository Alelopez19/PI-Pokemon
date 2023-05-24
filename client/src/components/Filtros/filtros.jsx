
function Filtros ({handleChange}){

    return (
        <div>

            <select onChange={handleChange}>
                <option value='reset'>Pokemons por Generacion</option>
                <option value='primera'>Primera Generacion</option>
                <option value='segunda'>Segunda Generacion</option>
                <option value='tercera'>Tercera Generacion</option>
                <option value='cuarta'>Cuarta Generacion</option>
                <option value='quinta'>Quinta Generacion</option>
                <option value='sexta'>Sexta Generacion</option>
                <option value='septima'>Septima Generacion</option>
                <option value='octava'>Octava Generacion</option>
                <option value='novena'>Novena Generacion</option>
                <option value='especiales'>Especiales</option>
            </select>

        </div>
    )
};

export default Filtros;