function PokemonCard() {
    const pokemon = pokemonList[0]
    const styleName = { fontSize: '3em', backgroundColor: 'lightGreen' }
    return (
        <>
            {pokemon.imgSrc ?
                <img src={pokemon.imgSrc} alt={pokemon.name} style={styleName} /> : <p>???</p>}
            <figcaption style={styleName}>{pokemon.name}</figcaption>
        </>
    )
}
export default PokemonCard;

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];
