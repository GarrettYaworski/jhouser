import axios from 'axios'

const GET_LISTINGS = 'GET_LISTINGS'
const CLEAR_LISTING_STATE = 'CLEAR_HOUSE_STATE'
const REMOVE_LISTING = 'REMOVE_LISTING'
const ADD_LISTING = 'ADD_LISTING'
const CHANGE_LISTING = 'CHANGE_LISTING'
const ADDRESS_INPUT = 'ADDRESS_INPUT'
const ID_INPUT = 'ID_INPUT'
const NAME_INPUT = 'NAME_INPUT'
const CITY_INPUT = 'CITY_INPUT'
const STATE_INPUT = 'STATE_INPUT'
const ZIP_INPUT = 'ZIP_INPUT'
const IMG_INPUT = 'IMG_INPUT'
const MORTGAGE_INPUT = 'MORTGAGE_INPUT'
const RENT_INPUT = 'RENT_INPUT'

function reducer(state = initialState, action){
    switch(action.type) {
        case ID_INPUT:
            return {
                ...state, id: action.payload
            }
        case IMG_INPUT:
            return {
                ...state, img: action.payload
            }
        case MORTGAGE_INPUT:
            return {
                ...state, mortgage: action.payload
            }
        case RENT_INPUT:
            return {
                ...state, rent: action.payload
            }
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
        case `${CHANGE_LISTING}_FULFILLED`:
            return {
                ...state, listing: action.payload.data
            }
        case `${ADD_LISTING}_FULFILLED`:
            return {
                ...state, listings: action.payload.data
            }
        case `${GET_LISTINGS}_FULFILLED`: 
            return {
                ...state, listings: action.payload.data
            }
        case `${REMOVE_LISTING}_FULFILLED`:
            return {
                ...state, listings: action.payload.data
            }
        case CLEAR_LISTING_STATE:
            return {
                ...state, 
                    id: '',
                    name: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    img: '',
                    mortgage: '',
                    rent: ''
            }

        default: return state
    } 
}  

export function idInput(id) {
    return {
        type: ID_INPUT,
        payload: id
    }
}

export function imgInput(img) {
    return {
        type: IMG_INPUT,
        payload: img
    }
}

export function mortgageInput(mortgage) {
    return {
        type: MORTGAGE_INPUT,
        payload: mortgage
    }
}

export function rentInput(rent) {
    return {
        type: RENT_INPUT,
        payload: rent
    }
}

export function changeListing(name,address,city,state,zip,img,mortgage,rent,id) {
    return {
        type: CHANGE_LISTING,
        payload: axios.put(`/api/listings/${id}`, {name,address,city,state,zip,img,mortgage,rent})
    }
}

export function addListing(name,address,city,state,zip,img,mortgage,rent) {
    return {
        type: ADD_LISTING,
        payload: axios.post('/api/listings', {name,address,city,state,zip,img,mortgage,rent})
    }
}

export function getListings() {
    return {
        type: GET_LISTINGS,
        payload: axios.get('/api/listings')
    }
}

export function clearListingState() {
    return {
        type: CLEAR_LISTING_STATE
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
    id: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0 ,
    listings: [],
    img: '',
    mortgage: 0,
    rent: 0,
    recRent: 0
}

export default reducer;