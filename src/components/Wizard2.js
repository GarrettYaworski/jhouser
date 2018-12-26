import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {imgInput,clearListingState} from '../ducks/reducer'

function Wizard2(props) {
    return (
        <div>
            <Link to='/'><button onClick={() => props.clearListingState()}>Cancel</button></Link>
            <p>Image URL</p>
            <input onChange={(e)=> props.imgInput(e.target.value)}
            placeholder='Please enter image url' value={props.img}/>
            <Link to='/wizard'><button>Previous Step</button></Link>
            <Link to='/wizard3'><button>Next Step</button></Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}
 

export default connect(mapStateToProps, {imgInput,clearListingState})(Wizard2);