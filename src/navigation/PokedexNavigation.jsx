import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Components
import PokedexScreen from '../screens/Pokedex'
import PokemonScreen from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='PokedexScreen' component={PokedexScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Pokemon' component={PokemonScreen} />
    </Stack.Navigator>
  )
}

export default PokedexNavigation