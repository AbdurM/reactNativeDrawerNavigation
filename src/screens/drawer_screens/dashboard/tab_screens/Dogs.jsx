import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { fetchBreeds } from '../../../../services/gateway/dogApiService';
import ListItem from '../../../../components/ListItem';

const Dogs = ({ navigation }) => {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBreeds();
        setBreeds(data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={breeds}
        renderItem={(breed) => {
          const itemAttributes = breed.item.attributes;
          return <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', { itemAttributes })}>
            <ListItem name={itemAttributes.name} description={itemAttributes.description} />
          </TouchableOpacity>
        }
        }
        keyExtractor={(item) => item.id}
      />
    </View >
  );
}

export default Dogs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  list: {
    flex: 1
  }
})