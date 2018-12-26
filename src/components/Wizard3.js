import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {mortgageInput,rentInput,addListing,clearListingState} from '../ducks/reducer'

function Wizard3(props) {

    const {name,address,city,state,zip,img,mortgage,rent} = props

    function addAndClear () {
        props.addListing(name,address,city,state,zip,img,mortgage,rent);
        props.clearListingState();
    }

    return (
        <div>
            <Link to='/'><button onClick={() => props.clearListingState()}>Cancel</button></Link>
            <p>Recommended Rent: {Math.trunc(mortgage*1.25)}</p>
            <p>Monthly Mortgage Amount</p>
            <input onChange={(e) => props.mortgageInput(e.target.value)}
                placeholder='Monthly mortgage amount'
                value = {props.mortgage}/>
            <p>Desired Monthly Rent</p>
            <input onChange={(e) => props.rentInput(e.target.value)}
                placeholder='Please enter desired rent'
                value={props.rent}/>
            <Link to='/wizard2'><button>Previous Step</button></Link>
            <Link to='/'><button onClick={() => props.addListing(name,address,city,
                                                                state,zip,img,mortgage,
                                                                rent)}
                                                                // onClick={() => props.clearListingState()}
                                                                >Complete</button></Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        mortgage: state.mortgage,
        rent: state.rent,
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img
    }
}


export default connect(mapStateToProps, {rentInput,mortgageInput,addListing,clearListingState})(Wizard3); 