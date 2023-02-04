/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet  
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}
export default class App extends React.Component {
    state = { ...initialState }

    addDigit = digit => {
        if (digit === '.' && this.state.displayValue.includes('.')) return

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({ displayValue, clearDisplay: false })

        if (digit !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({ values })
        }
    }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = operation => {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory}/>
                    <Button label='/' operation/>
                    <Button label='7' onClick={this.addDigit} />
                    <Button label='8' onClick={this.addDigit} />
                    <Button label='9' onClick={this.addDigit} />
                    <Button label='*' operation onClick={this.setOperation}/>
                    <Button label='4' onClick={this.addDigit} />
                    <Button label='5' onClick={this.addDigit} />
                    <Button label='6' onClick={this.addDigit} />
                    <Button label='-' operation onClick={this.setOperation}/>
                    <Button label='1' onClick={this.addDigit} />
                    <Button label='2' onClick={this.addDigit} />
                    <Button label='3' onClick={this.addDigit} />
                    <Button label='+' operation onClick={this.setOperation}/>
                    <Button label='0' double onClick={this.addDigit} />
                    <Button label='.' onClick={this.addDigit}/>
                    <Button label='=' operation onClick={this.setOperation}/>
                </View>
            </SafeAreaView>
        ) 
    }
}    

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})
