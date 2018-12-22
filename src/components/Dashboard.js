import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeListing,getListings} from '../ducks/reducer'

class Dashboard extends Component {
    
    componentDidMount() {
        console.log(this.props);
        this.props.getListings()
    }

    render() {
    console.log(this.props);
        let list = this.props.listings.map((listing) => {
            return (
                <div>
                    <p>`Property Name: ${listing.this.props.name}`</p>
                    <div>
                        <button onClick={(e) => this.props.removeListing(e)}>X</button>
                    </div>
                    <p>`Address: ${listing.this.props.address}`</p>
                    <p>`City: ${listing.this.props.city}`</p>
                    <p>`State: ${listing.this.props.state}`</p>
                    <p>`Zip: ${listing.this.props.zip}`</p>
                </div>
            )
        })

        console.log(this.props.listings);

        return (
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard'><button>Add New Property</button></Link>
                <h3>Home Listings</h3>
                {list}
                

            </div>
        )
    } 
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {removeListing,getListings})(Dashboard);