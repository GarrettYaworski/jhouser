import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addListing,nameInput,addressInput,cityInput,stateInput,zipInput,clearListingState} from '../ducks/reducer'
import Header from './Header'
import './wizard.css'

class Wizard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (  
                <div>
                    <Header/>
                    <div>
                        <div className='dash'>
                            <div className='bb'>
                                <div className='leftColumn'></div>
                                <div className='centerData'>
                                    <h1>Add New Listing</h1>
                                    <Link to='/'><button onClick={() => this.props.clearListingState()}>Cancel</button></Link>
                                    <h3>Property Name</h3>
                                    <input onChange={(e) => this.props.nameInput(e.target.value)}
                                        placeholder='Enter property name' value={this.props.name}/>
                                    <h3>Address</h3>
                                    <input onChange={(e) => this.props.addressInput(e.target.value)}
                                        placeholder='Enter property address' value={this.props.address}/>
                                    <h3>City</h3>
                                    <input onChange={(e) => this.props.cityInput(e.target.value)}
                                        placeholder='Enter property city' value={this.props.city}/>
                                    <h3>State</h3>
                                    <input onChange={(e) => this.props.stateInput(e.target.value)}
                                        placeholder='Enter property state' value={this.props.state}/>
                                    <h3>Zip</h3>                                 
                                    <input onChange={(e) => this.props.zipInput(e.target.value)}
                                        placeholder ='Enter property zip' value={this.props.zip}/>
                                    <Link to='/Wizard2'><button className='next'>Next Step</button></Link>
                                </div>
                                <div className='rightColumn'></div>
                            </div>
                        </div>
                    </div>
                </div> 
        )
        
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {addListing,nameInput,addressInput,cityInput,
                                        stateInput,zipInput,clearListingState})(Wizard);