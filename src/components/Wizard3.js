import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {mortgageInput,rentInput,addListing,clearListingState} from '../ducks/reducer'
import Header from './Header'
import './wizard3.css'

function Wizard3(props) {

    const {name,address,city,state,zip,img,mortgage,rent} = props

    function addAndClear () {
        props.addListing(name,address,city,state,zip,img,mortgage,rent);
        props.clearListingState();
    }

    return (
        <div>
        <Header/>
        <div>
            <div className='dasher3'>
                <div className='bbb3'>
                    <div className='leftColumn6'></div>
                    <div className='centerData6'>
                        <div className='nameAndCanc3'>
                            <h2>Add New Listing</h2>
                            <Link to='/'><button className='cancButt3' onClick={() => props.clearListingState()}>Cancel</button></Link>
                        </div>
                        <div className='recRent'>
                            <span>Recommended Rent: {Math.trunc(mortgage*1.25)}</span>
                        </div>
                        <div className='mortgageCont'>
                            <span>Monthly Mortgage Amount</span>
                            <input onChange={(e) => props.mortgageInput(e.target.value)}
                                value = {props.mortgage}/>
                        </div>
                        <div className='rentCont'>
                            <span>Desired Monthly Rent</span>
                            <input onChange={(e) => props.rentInput(e.target.value)}
                                value={props.rent}/>
                        </div>
                        <div className='preCompButt'>
                            <Link to='/wizard2'><button className='pre2' >Previous Step</button></Link>
                            <Link to='/'><button className='comp' onClick={() => addAndClear()} >Complete</button></Link>
                        </div>
                    </div>
                    <div className='rightColumn6'></div>
                </div>
            </div>
        </div>
    </div>

            // <span>Recommended Rent: {Math.trunc(mortgage*1.25)}</span>
            // <span>Monthly Mortgage Amount</span>
            // <input onChange={(e) => props.mortgageInput(e.target.value)}
            //     placeholder='Monthly mortgage amount'
            //     value = {props.mortgage}/>
        //     <span>Desired Monthly Rent</span>
        //     <input onChange={(e) => props.rentInput(e.target.value)}
        //         value={props.rent}/>
        //     <Link to='/wizard2'><button>Previous Step</button></Link>
        //     <Link to='/'><button onClick={() => addAndClear()}>Complete</button></Link>
        // </div>
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