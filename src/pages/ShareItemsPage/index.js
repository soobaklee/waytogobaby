import React from 'react';
import NewShareItemForm from '../../components/NewShareItemForm/NewShareItemForm';

class ShareItemsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            item: []
        }
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    handleAddItem = (item) => {
        this.setState((existingItems) => ({
            item: [...existingItems.share, item]
        }))
    }

    handleUpdateItem = (item) => {
        this.setState({item});
    }

    render(props) {
        let newShareItem = this.props.user ?
        <div>
            <p>Share a new item with the community!</p>
            <NewShareItemForm 
            {...props}
            user={this.props.user}
            updateMessage={this.updateMessage}
            handleAddItem={this.handleAddItem}
            />
        </div>
        :
        <div>
            <p>Join the community and share an item!</p>
        </div>

        return (
            <div>
                WAY TO SHARE!
                {newShareItem}

                Show list of Share Items
            </div>
        )
    }
}

export default ShareItemsPage;