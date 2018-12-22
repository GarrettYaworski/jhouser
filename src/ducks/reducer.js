import axios from 'axios'

const GET_LISTINGS = 'GET_LISTINGS'
const CHANGE_HANDLER = 'CHANGE_HANDLER'
const CLEAR_HOUSE_STATE = 'CLEAR_HOUSE_STATE'
const REMOVE_LISTING = 'REMOVE_LISTING'
const ADD_LISTING = 'ADD_LISTING'
const UPDATE_LISTING_NAME = 'UPDATE_LISTING_NAME'
const ADDRESS_INPUT = 'ADDRESS_INPUT'
const NAME_INPUT = 'NAME_INPUT'
const CITY_INPUT = 'CITY_INPUT'
const STATE_INPUT = 'STATE_INPUT'
const ZIP_INPUT = 'ZIP_INPUT'

function reducer(state = initialState, action){
    // console.log(action.type);
    console.log(action.payload);
    switch(action.type) {
        case ADDRESS_INPUT:
            return {
                ...state, address: action.payload
            }
        case NAME_INPUT:
            return {
                ...state, name: action.payload
            }
        case CITY_INPUT:
            return {
                ...state, city: action.payload
            }
        case STATE_INPUT:
            return {
                ...state, state: action.payload
            }
        case ZIP_INPUT:
            return {
                ...state, zip: action.payload
            }
        case UPDATE_LISTING_NAME:
            return {
                ...state, name: action.payload.data
            }
        case ADD_LISTING:
            return {
                ...state, listings: action.payload.data
            }
        case GET_LISTINGS:
            return {
                ...state, listings: action.payload.data
            }
        case CHANGE_HANDLER:
            return {
                ...state, [action.payload.name]: action.payload.value
            }
        case REMOVE_LISTING:
            return {
                ...state, listings: action.payload.data
            }
        case CLEAR_HOUSE_STATE:
            return {
                ...state, 
                    name: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: ''
            }

        default: return state
    } 
}  

export function updateListingName(name,id) {
    return {
        type: UPDATE_LISTING_NAME,
        payload: axios.put(`/api/listings/${id}`, name), 
    }
}

export function addListing(name,address,city,state,zip) {
    return {
        type: ADD_LISTING,
        payload: axios.post('/api/listings', {name,address,city,state,zip})
    }
}

export function getListings() {
    return {
        type: GET_LISTINGS,
        payload: axios.get('/api/listings')
    }
}

export function changeHandler(name,value) {
    return {
        type: CHANGE_HANDLER,
        payload: {name,value}
    }
}

export function clearHouseState() {
    return {
        type: CLEAR_HOUSE_STATE
    }
}

export function removeListing(id) {
    return {
        type: REMOVE_LISTING,
        payload: axios.delete(`/api/listings/${id}`)
    }
}

export function nameInput(name) {
    return {
        type: NAME_INPUT,
        payload: name
    }
}

export function addressInput(address) {
    return {
        type: ADDRESS_INPUT,
        payload: address
    }
}

export function cityInput(city) {
    return {
        type: CITY_INPUT,
        payload: city
    }
}

export function stateInput(state) {
    return {
        type: STATE_INPUT,
        payload: state
    }
}

export function zipInput(zip) {
    return {
        type: ZIP_INPUT,
        payload: zip
    }
}

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0 ,
    listings: []
}


export default reducer;