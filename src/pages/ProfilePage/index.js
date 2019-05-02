import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile'

class ProfilePage extends Component {

    // constructor() {
    //     super();
    //     this.state = {
            
            
    //     }
    // }

    render() {
        return (
            <div>
                <Profile 
                    user={this.props.user}
                    // {...intlData}
                />

                
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

export default ProfilePage;