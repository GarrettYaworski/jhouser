import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeListing,getListings,changeListing} from '../ducks/reducer'
import './dashboard.css'
import Header from './Header'

class Dashboard extends Component {
    
    componentDidMount() {
        this.props.getListings()
    }

    render() {
        let list = this.props.listings.map((listing) => {
            return (
                <div className='mainDisplay'>
                    <div className='leftColumn'></div>
                    <div className='listingWrapper' key={listing.id}>
                        <div>
                            <img className='images' src={listing.img}/>
                        </div>
                        <div className='listingInfo'>
                            <span>Property Name: {listing.name}</span>
                            <span>Address: {listing.address}</span>
                            <span>City: {listing.city}</span>
                            <span>State: {listing.state}</span>
                            <span>Zip: {listing.zip}</span>
                        </div>
                         <div className='listingInfo2'>
                            <span>Monthly Mortgage: {listing.mortgage}</span>
                            <span>Desired Rent: {listing.rent}</span>
                        </div>
                        <div className='listingInfo3'>
                            <button className='cancelButton' onClick={() => this.props.removeListing(listing.id)}>X</button>
                            <Link to='/editlisting'><button className='editButton' onClick={
                                () => this.props.changeListing(listing.id,listing.name,listing.address,listing.city,
                                                                listing.state,listing.zip,listing.img,listing.mortgage,
                                                                listing.rent)}>Edit</button></Link>
                        </div>
                    </div>
                    <div className='rightColumn'></div>
                </div>
            )
        })

        return (
            <div>
                <Header/>
                <div>
                    <div className='dash'>
                        <div className='bb'>
                            <div className='dashAndButt'>
                                <div className='leftColumn2'></div>
                                <div className='middleTop'>
                                    <p>Dashboard</p>
                                    <Link to='/wizard'><button id='addNewButton'>Add New Property</button></Link>
                                </div>
                                <div className='rightColumn2'></div>
                            </div> 
                            <div className='underLineGroup'>
                                <div className='leftColumn2'></div>  
                                <div className='underLine'></div> 
                                <div className='rightColumn2'></div>
                            </div>
                            <div className='underLineGroup'>
                                <div className='leftColumn2'></div>
                                <div className='hListing'>
                                    <h5>Home Listings</h5>
                                </div>
                                <div className='rightColumn2'></div>
                            </div>
                        </div>
                        <div>
                            {list}
                        </div>     
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {removeListing,getListings,changeListing})(Dashboard);