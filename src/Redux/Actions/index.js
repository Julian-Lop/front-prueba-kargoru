import axios from "axios";
import{
    GET_ALL_LOCATION,
    GET_ALL_VEHICLES,
    GET_ALL_QUOTES,
    GET_QUOTE,
    CREATE_QUOTE,
    EDIT_QUOTE,
    DELETE_QUOTE,
    CREATE_USER
}from './types'

const url = 'http://localhost:3001'


export const getAllLocation = () => {
    return async function(dispatch){
        try {
            let json = await axios(url+'/getAllLocations')
            if(json.data.lugares) return dispatch({type:GET_ALL_LOCATION, payload: json.data.lugares})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllVehicles = () => {
    return async function(dispatch){
        try {
            let json = await axios(url+'/getAllVehicles')
            if(json.data.vehiculos) return dispatch({type:GET_ALL_VEHICLES, payload: json.data.vehiculos})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getAllQuotes = () => {
    return async function(dispatch){
        try {
            let json = await axios(url+'/getAllQuotes')
            if(json.data.cotizaciones) return dispatch({type:GET_ALL_QUOTES, payload: json.data.cotizaciones})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getQuote = (id) => {
    return async function(dispatch){
        try {
            let json = await axios(url+'/getQuote/:'+id)
            if(json.data.cotizacion) return dispatch({type:GET_QUOTE, payload: json.data.cotizacion})
        } catch (error) {
            console.log(error)
        }
    }
}

export const createQuote = (quote) => {
    return async function(dispatch){
        try {
            let json = await axios.post(url+'/createQuote',quote)
            if(json.data.cotizacion) return dispatch({type:CREATE_QUOTE, payload: json.data.cotizacion})
        } catch (error) {
            console.log(error)
        }
    }
}

export const editQuote = (quote) => {
    return async function(dispatch){
        try {
            let json = await axios.put(url+'/editQuote',quote)
            if(json.data.cotizacion) return dispatch({type:EDIT_QUOTE, payload:json.data.cotizacion})
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteQuote = (id) => {
    return async function(dispatch){
        try {
            let json = await axios.delete(url+'/deleteQuote',id)
            if(json.data.borrado) return dispatch({type:DELETE_QUOTE,payload:json.data.borrado})
        } catch (error) {
            console.log(error)
        }
    }
}

export const createUser = (user) => {
    return async function(dispatch){
        try {
            let json = await axios.post(url+'/getUserOrCreate',user)
            if(json.data.created) return dispatch({type:CREATE_USER, payload:json.data.created})
        } catch (error) {
            console.log(error)
        }
    }
}