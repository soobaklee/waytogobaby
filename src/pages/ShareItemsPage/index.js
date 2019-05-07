import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NewShareItemForm from '../../components/NewShareItemForm/NewShareItemForm';
import SharedItemDetailPage from '../SharedItemDetailPage/SharedItemDetailPage';
import shareService from '../../utils/shareService';
import styles from './ShareItemsPage.module.css';
import moment from 'moment';


class ShareItemsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            sharedItems: []
        }
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    // handleAddItem = (shareItem) => {
    //     this.setState((existingShare) => ({
    //         sharedItems: [...existingShare.shareItem, shareItem]
    //     }))
    // }

    handleUpdateItem = (share) => {
        this.setState({ share });
    }

    async componentDidMount() {
        const sharedItems = await shareService.index();
        this.setState({ sharedItems: sharedItems });
    }

    render(props) {
        let sharedItemsList = this.state.sharedIems ? this.state.sharedItems : []
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

        let itemsList = this.state.sharedItems.map((sharedItem, idx) => (
            <div className={`${styles.itemList}`} key={idx}>
                <Link to={`/community/share/${sharedItem._id}`}>
                    <p>{sharedItem.title}</p>
                    <p className={`${styles.description}`}>{sharedItem.description}</p>
                    <p>Posted By: {sharedItem.postedBy[0]}, {moment(sharedItem.updatedAt).calendar()}</p>
                </Link>
            </div>
        ));

        return (
            <Switch>
                <Route exact path='/community/share' render={(props) => (
                    <div>
                        WAY TO SHARE!
                        {newShareItem}
                        <hr></hr>
                        <div>
                            {itemsList}
                        </div>

                    </div>
                )} />
                <Route exact path='/community/share/:id' render={(props) => (
                    <SharedItemDetailPage
                    {...props}
                    sharedItems={this.state.sharedItems}
                    />
                )} />
            </Switch>
            )
        }
    }
    
export default ShareItemsPage;