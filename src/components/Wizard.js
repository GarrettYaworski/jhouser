import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addListing,changeHandler,nameInput,addressInput,cityInput,stateInput,zipInput} from '../ducks/reducer'

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
                <input onChange={(e) => this.props.nameInput(e.target.value)}/>
                <p>Address</p>
                <input onChange={(e) => this.props.addressInput(e.target.value)}/>
                <p>City</p>
                <input onChange={(e) => this.props.cityInput(e.target.value)}/>
                <p>State</p>
                <input onChange={(e) => this.props.stateInput(e.target.value)}/>
                <p>Zip</p>
                <input onChange={(e) => this.props.zipInput(e.target.value)}/>
                <Link to='/'><button onClick={() => this.props.addListing(
                    this.props.name,
                    this.props.address,
                    this.props.city,
                    this.props.state,
                    this.props.zip
                )}>Complete</button></Link>
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

export default connect(mapStateToProps, {addListing,changeHandler,nameInput,addressInput,cityInput,
                                        stateInput,zipInput})(Wizard);