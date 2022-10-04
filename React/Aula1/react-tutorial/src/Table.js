import React, { Component } from 'react'

const TableHeader = () =>{
    return (
        <thead>
        <tr>
            <th>Animal</th>
            <th>Nome</th>
            <th>É domesticável?</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) =>{
    const rows = props.animaisArray.map((obj) => {
        return(
            <tr>
                <td>{obj.animal}</td>
                <td>{obj.nome}</td>
                <td>{obj.domesticavel}</td>
            </tr>
        )
    })
    return(
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const {animaisArray} = this.props

        return (
            <div className='tableDiv'>
            <table className='alunos'>
                <TableHeader/>
                <TableBody animaisArray={animaisArray}/>
            </table>
            </div>
        )
    }
}

export default Table