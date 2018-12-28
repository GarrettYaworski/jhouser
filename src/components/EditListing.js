import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeListing,clearListingState,nameInput,addressInput,cityInput,stateInput,zipInput,
        imgInput,mortgageInput,rentInput} from '../ducks/reducer'
import Header from './Header'
import './editListing.css'

function EditListing(props) {
    const {id,name,address,city,state,zip,img,mortgage,rent} = props

    return (
            <div>
                <Header/>
                <div>
                    <div className='dasher7'>
                        <div className='bbb7'>
                            <div className='leftColumn7'></div>
                            <div className='centerData7'>
                                <div className='title7'>
                                    <h2>Update Listing</h2>
                                </div>
                                <div className='name7'>
                                    <span>Property Name</span>
                                    <input type='text' value={props.name} onChange={(e) => props.nameInput(e.target.value)}/>
                                </div>
                                <div className='add7'>
                                    <span>Address</span>
                                    <input type='text' value={props.address} onChange={(e) => props.addressInput(e.target.value)}/>
                                </div>
                                <div className='csz7'>
                                    <div className='cit7'>
                                        <span>City</span>
                                        <input type='text' value={props.city} onChange={(e) => props.cityInput(e.target.value)}/>
                                    </div>
                                    <div className='st7'>
                                        <span>State</span>
                                        <input type='text' value={props.state} onChange={(e) => props.stateInput(e.target.value)}/>
                                    </div>
                                    <div className='zip7'>
                                        <span>Zip</span> 
                                        <input type='text' value={props.zip} onChange={(e) => props.zipInput(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='img7'>
                                    <span>Image URL</span> 
                                    <input type='text' value={props.img} onChange={(e) => props.imgInput(e.target.value)}/>
                                </div>
                                <div className='mtg7'>
                                    <span>Monthly Mortgage</span> 
                                    <input type='text' value={props.mortgage} onChange={(e) => props.mortgageInput(e.target.value)}/>
                                </div>
                                <div className='rent7'>
                                    <span>Desired Rent</span>
                                    <input type='text' value={props.rent} onChange={(e) => props.rentInput(e.target.value)}/>
                                </div> 
                                <div className='butt7'>
                                    <Link to='/'><button className='canc7' onClick={() => props.clearListingState()}>Cancel</button></Link>
                                    <Link to='/'><button className='sub7' onClick={() => props.changeListing(id,name,address,city,state,zip,img,mortgage,rent)}>
                                        Submit Changes</button></Link>
                                </div>
                            </div>
                            <div className='rightColumn7'></div>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}
 

export default connect(mapStateToProps, {clearListingState,changeListing,nameInput,addressInput,cityInput,
                                        stateInput,zipInput,imgInput,mortgageInput,rentInput})(EditListing);