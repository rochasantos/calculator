import React from 'react'
import {
    TouchableHighlight,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native'

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#888',
        textAlign: 'center'
    }
})