import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'

//Services
import { getPokemosApi, getPokemonDetailsByUrlApi } from '../api/pokemon'

//Components
import PokemonList from '../components/pokedex/PokemonList'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    (async()=>{
      await loadPokemons();
    })();
  },[])

  const loadPokemons = useCallback(async() => {
    try {
      setLoading(true)
      const response = await getPokemosApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = await Promise.all(
        response.results.map(async (pokemon) => {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setPokemons([...pokemons, ...pokemonsArray]);
      
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [pokemons, nextUrl]);
  
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} isLoading={loading}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Pokedex