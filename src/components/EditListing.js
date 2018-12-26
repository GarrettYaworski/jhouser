import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeListing,clearListingState,nameInput} from '../ducks/reducer'

function EditListing(props) {
    const {id,name,address,city,state,zip,img,mortgage,rent} = props
    return (
        <form onSubmit={
            () => this.props.changeListing(id,name,address,city,state,zip,img,mortgage,rent)}>
            <label>
                Property Name: 
                <input type='text' value={props.name} onChange={(e) => props.nameInput(e.target.value)}/>
            </label>
            <label>
                Property Address: 
                <input type='text' value={props.address} onChange={(e) => props.addressInput(e.target.value)}/>
            </label>
            <label>
                Property City: 
                <input type='text' value={props.city} onChange={(e) => props.cityInput(e.target.value)}/>
            </label>
            <label>
                Property State: 
                <input type='text' value={props.state} onChange={(e) => props.stateInput(e.target.value)}/>
            </label>
            <label>
                Property Zip: 
                <input type='text' value={props.zip} onChange={(e) => props.zipInput(e.target.value)}/>
            </label>
            <label>
                Property Picture: 
                <input type='text' value={props.img} onChange={(e) => props.imgInput(e.target.value)}/>
            </label>
            <label>
                Monthly Mortgage: 
                <input type='text' value={props.mortgage} onChange={(e) => props.mortgageInput(e.target.value)}/>
            </label>
            <label>
                Desired Rent: 
                <input type='text' value={props.rent} onChange={(e) => props.rentInput(e.target.value)}/>
            </label>  
            <Link to='/'><button onClick={() => props.clearListingState()}>Cancel</button></Link>
        </form>
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
 

export default connect(mapStateToProps, {clearListingState,changeListing,nameInput})(EditListing);