import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeListing,clearListingState,nameInput} from '../ducks/reducer'

function EditListing(props) {
    return (
        <form onSubmit={props.changeListing}>
            <label>
                Property Name:
                <input type='text' value={props.name} onChange={(e) => props.nameInput(e.target.value)}/>
            </label>
            <input type='submit' value='Submit'/>   
            
        </form>
    )
}
    /* <p>Property Name</p>
<input onChange={(e) => this.props.nameInput(e.target.value)}
    placeholder='Enter property name' value={this.props.name}/>
<p>Address</p>
<input onChange={(e) => this.props.addressInput(e.target.value)}
    placeholder='Enter property address' value={this.props.address}/>
<p>City</p>
<input onChange={(e) => this.props.cityInput(e.target.value)}
    placeholder='Enter property city' value={this.props.city}/>
<p>State</p>
<input onChange={(e) => this.props.stateInput(e.target.value)}
    placeholder='Enter property state' value={this.props.state}/>
<p>Zip</p>
<input onChange={(e) => this.props.zipInput(e.target.value)}
    value={this.props.zip}/> */


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
 

export default connect(mapStateToProps, {clearListingState,changeListing,nameInput})(EditListing);