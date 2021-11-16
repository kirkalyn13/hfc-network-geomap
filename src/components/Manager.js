import { useState, useEffect } from 'react'
import SiteDetails from './SiteDetails'
import SiteForm from './SiteForm'
import firebaseDb from '../firebase'

const Manager = () => {
    const [sites, setSites] = useState({})
    const [currentID, setCurrentID ] = useState('')
    const [searchInput, setSearchInput] = useState('');
    const [filteredSites, setFilteredSites] = useState({})

    useEffect(()=>{
        const toFilter = Object.entries(sites)
        const searchedVal = toFilter.filter(val => {
            if(searchInput == ''){
                return val[0]
            }else if(val[1].siteID.toLowerCase().includes(searchInput.toLowerCase())){
                return val[0]
            }})
        const filtered = Object.fromEntries(searchedVal)
        setFilteredSites(filtered)
    },[searchInput])

    useEffect(() => {
        firebaseDb.child('cellsites').on('value', snapshot =>{
            if(snapshot.val() != null){
                setSites({
                    ...snapshot.val()
                })
                setFilteredSites({
                    ...snapshot.val()
                })
            }
            else{
                setSites({})
            }
        })
    },[])

    const addOrEdit = obj => {
        if(currentID == ""){
            firebaseDb.child('cellsites').push(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                }
            )
            alert("Registered New Cell Site to Databsae.")
        }
        else{
            firebaseDb.child(`cellsites/${currentID}`).set(
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
            alert("Edited Site Information Saved.")
        }
        
    }

    const onDelete = key =>{
        if(window.confirm("Are you sure you want to delete the selected site?")){
            firebaseDb.child(`cellsites/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentID('')
                    }
                }
            )
        }
    }


    return (
        <div className="container-register-sites">
            <SiteForm {...({addOrEdit, currentID, sites})} />
            <div className="container-sites">
            <h1>Network Site List</h1>
            <div className="container-search">
            <label>Search: </label>
            <input type="text" placeholder="Enter Site ID" onChange={event => {setSearchInput(event.target.value)}}/>
            </div>
            <div className="site-list">
            {Object.keys(filteredSites).map((id)=>{
                return (
                <div className="container-site" key={id}>
                <SiteDetails
                siteID={sites[id].siteID} siteName={sites[id].siteName} 
                latitude={sites[id].latitude} longitude={sites[id].longitude}
                count2G={sites[id].count2G} count3G={sites[id].count3G} count4G={sites[id].count4G}
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
