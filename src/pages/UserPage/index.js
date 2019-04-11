import React, { Component } from 'react';

class UserPage extends Component {

    constructer() {
        super();
        this.state = {
            friends: null,
            
        }
    }

    render() {
        return (
            <div>
                <h1>User Profile Page</h1>
                <p>This should show:<br></br>
                1. User stats - and have them be able to update it as they please
                2. 
                </p>
            </div>
        )
    }

}

export default UserPage;