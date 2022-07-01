import axios from "axios";
import{
    GET_ALL_LOCATION,
    GET_ALL_VEHICLES,
    GET_ALL_QUOTATION,
    GET_QUOTATION,
    CREATE_QUOTATION,
    EDIT_QUOTATION,
    DELETE_QUOTATION,
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

export const getAllQuotations = () => {
    return async function(dispatch){
        try {
            let json = await axios(url+'/getAllQuotations')
            if(json.data.cotizaciones) return dispatch({type:GET_ALL_QUOTATION, payload: json.data.cotizaciones})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getQuotation = (id) => {
    return async function(dispatch){
        try {
            let json = await axios(url+'/getQuotation/'+id)
            if(json.data.cotizacion) return dispatch({type:GET_QUOTATION, payload: json.data.cotizacion})
        } catch (error) {
            console.log(error)
        }
    }
}

export const createQuotation = (quotation) => {
    return async function(dispatch){
        try {
            let json = await axios.post(url+'/createQuotation',quotation)
            if(json.data.cotizacion) return dispatch({type:CREATE_QUOTATION, payload: json.data.cotizacion})
        } catch (error) {
            console.log(error)
        }
    }
}

export const editQuotation = (quotation) => {
    return async function(dispatch){
        try {
            let json = await axios.put(url+'/editQuotation',quotation)
            if(json.data.cotizacion) return dispatch({type:EDIT_QUOTATION, payload:json.data.cotizacion})
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteQuotation = (id) => {
    return async function(dispatch){
        try {
            let json = await axios.delete(url+'/deleteQuotation/'+id)
            if(json.data.borrado) return dispatch({type:DELETE_QUOTATION,payload:json.data.borrado})
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