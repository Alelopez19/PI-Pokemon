import { useSelector } from "react-redux";


function Filtros (){

    const pokeFiltered = useSelector(state => state.myPokemons);
    console.log('Filtros: ',pokeFiltered);

    const genFilter = (event) => {
        console.log(event.target.value);
    };

    const alfaFilter = (event) => {
        if(event.target.value === 'asc'){
            console.log('asc');
            pokeFiltered.sort((a, b) => {
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
                return 0
            })
            return pokeFiltered;
        }else if(event.target.value === 'des'){
            console.log('des')
        }else if(event.target.value === 'res'){
            console.log('res');
        }
    };

    return (
        <div>

            <select onChange={genFilter}>
                <option defaultChecked value='reset'>Pokemons por Generacion</option>
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

            <select onChange={alfaFilter} >
                <option defaultChecked value="res">Orden Alfabetico</option>
                <option value="asc">Ascendente</option>
                <option value="des">Descendente</option>
            </select>
        </div>
    )
};

export default Filtros;