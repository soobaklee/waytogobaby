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
                2. Add littleOnes
                3. Add Share items
                4. See products for which they have left reviews
                5. See products for which they have liked
                6. See any playdates attending
                7. See friends
                </p>
            </div>
        )
    }

}

export default UserPage;