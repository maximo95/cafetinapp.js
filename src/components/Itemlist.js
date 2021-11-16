import Item from "./Item"

const ItemList = (productos) => {
    const [pokemons, setPokemons] = useState ([]);
    const [nextUrl, setNextUrl] = useState ('');
    useEffect (() =>{
        getPokemons ();
    },[]);

    console.log (pokemons)

    const getPokemons = async() => {
        const pokemonArray = [];
        const resp = await   fetch('https://pokeapi.co/api/v2/pokemon/');
        const {result,next} = await resp.json();
        console.log(next);
        console.log(data);
        for (let pokemon of results){
            console.log (pokemon)
            const resp = await fetch (pokemon.url);
            const data = await resp.jason();
            pokemon.push(data);
        }
        setPokemons(pokemonArray);
        setNextUrl(next);
    }

    return (
        <div>
            <ul className="listas">
                {
                    pokemons.map(pokemon =><ItemCards id={pokemon.id} key={pokemon.id} name={pokemon.name} image = {pokemon.sprites.front_default} types ={pokemon.types}/>)
                }

            </ul>
        </div>
    )
}

export default ItemList