import React, { Component } from 'react'
import dados from './animais.json'
import Table from './Table'

class App extends Component {
    render() {
        return(
            <div>
            <h1>Lista de animais para adoção</h1>
            <hr/>
            <div className='container'>
                <Table animaisArray={dados.animaisJson}/>
            </div>
            </div>
        )
    }
}

export default App