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
                        <div className='dasher'>
                            <div className='bbb'>
                                <div className='leftColumn4'></div>
                                <div className='centerData4'>
                                    <div className='nameAndCanc'>
                                        <h2>Add New Listing</h2>
                                        <Link to='/'><button className='cancButt' onClick={() => this.props.clearListingState()}>Cancel</button></Link>
                                    </div>
                                    <div className='propName'>
                                    <span>Property Name</span>
                                        <input className='propField' onChange={(e) => this.props.nameInput(e.target.value)}
                                            value={this.props.name}/>
                                    </div>
                                    <div className='addField'>
                                    <span>Address</span>
                                        <input className='propField' onChange={(e) => this.props.addressInput(e.target.value)}
                                            value={this.props.address}/>
                                    </div>
                                    <div className='cszField'>
                                        <div className='cField'>
                                            <span>City</span>
                                            <input className='propField' onChange={(e) => this.props.cityInput(e.target.value)}
                                                value={this.props.city}/>
                                        </div>
                                        <div className='sField'>
                                            <span>State</span>
                                            <input className='propField' onChange={(e) => this.props.stateInput(e.target.value)}
                                                value={this.props.state}/>
                                        </div>
                                        <div className='zField'>
                                            <span>Zip</span>                                 
                                            <input className='propField' onChange={(e) => this.props.zipInput(e.target.value)}
                                                value={this.props.zip}/>
                                        </div>
                                    </div>
                                        <div className='nButt'>
                                            <Link to='/Wizard2'><button className='next'>Next Step</button></Link>
                                        </div>
                                </div>
                                <div className='rightColumn4'></div>
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