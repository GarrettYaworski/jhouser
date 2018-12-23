import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addListing,nameInput,addressInput,cityInput,stateInput,zipInput} from '../ducks/reducer'

class Wizard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='AddNewListing'>
                <h1>Add New Listing</h1>
                <Link to='/'><button>Cancel</button></Link>
                <p>Property Name</p>
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
                    value={this.props.zip}/>
                <Link to='/Wizard2'><button>Next Step</button></Link>
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
                                        stateInput,zipInput})(Wizard);