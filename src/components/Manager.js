import { useState, useEffect } from 'react'
import Details from './Details'
import RegisterForm from './RegisterForm'
import firebaseDb from '../firebase'

const Manager = () => {
    const [devices, setDevices] = useState({})
    const [currentID, setCurrentID ] = useState('')
    const [searchInput, setSearchInput] = useState('');
    const [filteredDevices, setFilteredDevices] = useState({})

    useEffect(()=>{
        const toFilter = Object.entries(devices)
        const searchedVal = toFilter.filter(val => {
            if(searchInput === ''){
                return val[0]
            }else if(val[1].nodeID.toLowerCase().includes(searchInput.toLowerCase())){
                return val[0]
            }})
        const filtered = Object.fromEntries(searchedVal)
        setFilteredDevices(filtered)
    },[searchInput])

    useEffect(() => {
        firebaseDb.child('hfc-nodes').on('value', snapshot =>{
            if(snapshot.val() !== null){
                setDevices({
                    ...snapshot.val()
                })
                setFilteredDevices({
                    ...snapshot.val()
                })
            }
            else{
                setDevices({})
            }
        })
    },[])

    const addOrEdit = obj => {
        if(currentID === ""){
            firebaseDb.child('hfc-nodes').push(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
            alert("Registered New Device to Databsae.")
        }
        else{
            firebaseDb.child(`hfc-nodes/${currentID}`).set(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentID('')
                    }
                }
            )
            alert("Edited Node Information Saved.")
        }
        
    }

    const onDelete = key =>{
        if(window.confirm("Are you sure you want to delete the selected node?")){
            firebaseDb.child(`hfc-nodes/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentID('')
                        alert("Deleted Device.")
                    }
                }
            )
        }
    }


    return (
        <div className="container-register-sites">
            <RegisterForm {...({addOrEdit, currentID, devices})} />
            <div className="container-sites">
            <h1>Network Devices List</h1>
            <div className="container-search">
            <label>Search: </label>
            <input type="text" placeholder="Enter Device ID" onChange={event => {setSearchInput(event.target.value)}}/>
            </div>
            <div className="site-list">
            {Object.keys(filteredDevices).map((id)=>{
                return (
                <div className="container-site" key={id}>
                <Details
                id={devices[id].ID} 
                deviceType={devices[id].type}
                location={devices[id].location} 
                latitude={devices[id].latitude} 
                longitude={devices[id].longitude}
                status={devices[id].activeStatus}
                />
                <div className="container-edit-delete">
                <a className="btn-edit" onClick={() => setCurrentID(id)}>Edit</a>
                <a className="btn-delete" onClick={() => { onDelete(id)} }>Delete</a>
                </div>
                </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}

export default Manager
