import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemDetails = (
    { route, navigation }
) => {
    const { description, life, male_weight, female_weight, hypoallergenic } = route.params.itemAttributes;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.title}>Life</Text>
            <Text style={styles.description}>{life.min}-{life.max} </Text>
            <Text style={styles.title}>Male weight</Text>
            <Text style={styles.description}>{male_weight.min}-{male_weight.max} </Text>
            <Text style={styles.title}>female Weight</Text>
            <Text style={styles.description}>{female_weight.min}-{female_weight.max} </Text>
            <Text style={styles.title}>Hypoallergenic</Text>
            <Text style={styles.description}>{hypoallergenic ? 'Yes' : 'No'}</Text>
        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 16,
    },
})