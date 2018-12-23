import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeListing,getListings,updateListingName} from '../ducks/reducer'

class Dashboard extends Component {
    
    componentDidMount() {
        this.props.getListings()
    }

    render() {
        let list = this.props.listings.map((listing) => {
            return (
                <div key={listing.id}>
                    <p>Property Name: {listing.name}</p>
                    <div>
                        <button onClick={() => this.props.updateListingName(listing.id,listing.name)}>Edit</button>
                        <button onClick={() => this.props.removeListing(listing.id)}>X</button>
                    </div>
                    <img src={listing.img}/>
                    <p>Address: {listing.address}</p>
                    <p>City: {listing.city}</p>
                    <p>State: {listing.state}</p>
                    <p>Zip: {listing.zip}</p>
                    <p>Monthly Mortgage: {listing.mortgage}</p>
                    <p>Desired Rent: {listing.rent}</p>
                </div>
            )
        })

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

export default connect(mapStateToProps, {removeListing,getListings,updateListingName})(Dashboard);