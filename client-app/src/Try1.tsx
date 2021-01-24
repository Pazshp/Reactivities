import axios from 'axios';
import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react';
import { IActivity } from './app/models/activity';

interface IState{
    activities: IActivity[];
}

export default class Try1 extends Component<{/*props*/},IState> {
    state : IState = {
        activities: []
    }
    componentDidMount() {
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
        .then((response) => {
            this.setState({activities: response.data})
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.activities.map((activity) => (
                        <li key={activity.id}>{activity.title}</li>
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
