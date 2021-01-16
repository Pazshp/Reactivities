import axios from 'axios';
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';

export default class Try1 extends Component {
    state = {
        values: []
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/values')
        .then((response) => {
            this.setState({values: response.data})
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.values.map((value: any) => (
                        <li key={value.id}>{value.name}</li>
                    ))}
                </ul>
                <div>
                    <Icon.Group size='huge'>
                    <Icon loading size='big' name='circle notch' />
                    <Icon name='user' />
                    </Icon.Group>
                </div>
            </div>
        )
    }
}
