import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {imgInput,clearListingState} from '../ducks/reducer'
import './wizard2.css'
import Header from './Header'

function Wizard2(props) {
    return (
        <div>
            <Header/>
            <div>
                <div className='dasher2'>
                    <div className='bbb2'>
                        <div className='leftColumn5'></div>
                        <div className='centerData5'>
                            <div className='nameAndCanc2'>
                                <h2>Add New Listing</h2>
                                <Link to='/'><button className='cancButt2' onClick={() => props.clearListingState()}>Cancel</button></Link>
                            </div>
                            <div className='imgField'>
                                <span>Image URL</span>
                                <input className='imgInput' onChange={(e)=> props.imgInput(e.target.value)}
                                    value={props.img}/>
                            </div>
                            <div className='preNextButt'>
                                <Link to='/wizard'><button className='pre' >Previous Step</button></Link>
                                <Link to='/wizard3'><button className='nex' >Next Step</button></Link>
                            </div>
                        </div>
                        <div className='rightColumn5'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}
 

export default connect(mapStateToProps, {imgInput,clearListingState})(Wizard2);