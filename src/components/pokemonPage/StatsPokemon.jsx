import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StatsPokemon = ({stats}) => {

  const barStyles = (num) => {
    let bgColorized;

    if (num <= 25) {
      bgColorized = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      bgColorized = "#F08700";
    } else if (num >= 50 && num < 75) {
      bgColorized = "#EFCA08";
    } else if (num >= 75) {
      bgColorized = "#6EEB83";
    }
    return {
      backgroundColor: bgColorized,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>StatsPokemon</Text>
      {stats.map((item, index)=> {
        return (
          <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
              <Text style={styles.labelStat}>{item.stat.name}</Text>
            </View>
            <View style={styles.blockInfo}>
              <Text style={styles.numberStat}>{item.base_stat}</Text>
              <View style={styles.bgBar}>
                <View style={[styles.bgBarCover, barStyles(item.base_stat)]}/>
              </View>
            </View>
          </View>
      )})}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 20,
      marginTop: 40,
      marginBottom: 50,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
      flexDirection: 'row',
      paddingVertical: 5,
    },
    blockTitle: {
      width: '30%',
    },
    labelStat: {
      textTransform:'capitalize',
      fontSize: 12,
      color: '#6B6B6B',
    },
    blockInfo: {
      width: '70%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    numberStat: {
      width: '12%',
      fontSize: 12,
    },
    bgBar: {
      backgroundColor: '#DEDEDE',
      width: '88%',
      height: 5,
      borderRadius: 20,
      overflow: 'hidden'
    },
    bgBarCover: {
      height: 5,
      borderRadius: 20,
    },
  })

export default StatsPokemon