import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {mortgageInput,rentInput,addListing} from '../ducks/reducer'

function Wizard3(props) {
    // onChange={(e) => props.recRent(e.target.value * 1.25)}
    // {recRent}
    const {name,address,city,state,zip,img,mortgage,rent,recRent} = props
    return (
        <div>
            <Link to='/'><button>Cancel</button></Link>
            <p>Recommended Rent: </p>
            <p>Monthly Mortgage Amount</p>
            <input onChange={(e) => props.mortgageInput(e.target.value)}
                placeholder='Please enter monthly mortgage amount'
                value = {props.mortgage}/>
            <p>Desired Monthly Rent</p>
            <input onChange={(e) => props.rentInput(e.target.value)}
                placeholder='Please enter desired rent'
                value={props.rent}/>
            <Link to='/wizard2'><button>Previous Step</button></Link>
            <Link to='/'><button onClick={() => props.addListing(name,address,city,
                                                                state,zip,img,mortgage,
                                                                rent)}>Complete</button></Link>
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


export default connect(mapStateToProps, {rentInput,mortgageInput,addListing})(Wizard3); 