import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import EditIcon from '@mui/icons-material/Edit'

const btnStyle = {
    backgroundColor: '#00BCD4', 
    color: '#000',
    fontWeight:"bold",
    margin: "20px 5rem"
}

const optionValues =[
    {name: "HFC Node",
    value: "HFC Node"},
    {name: "Fiber Node",
    value: "Fiber Node"},
    {name: "Trunk Amplifier",
    value: "Trunk Amplifier"},
    {name: "Line Extender",
    value: "Line Extender"},
    /*{name: "TLP Splitter",
    value: "TLP Splitter"},
    {name: "DC8 Splitter",
    value: "DC8 Splitter"}*/
]
const RegisterForm = ({addOrEdit, currentID, devices}) => {
    const initialFieldValues = {
        ID: '',
        type: 'HFC Node',
        location: '',
        latitude: '',
        longitude: '',
        activeStatus: '1',
    }
    var [ values, setValues ] = useState(initialFieldValues)
    const [submitState, setSubmitState] = useState(false)
    const [mode, setMode] = useState('Register New Device')
    const [btn, setBtn] = useState('ADD DEVICE')

    useEffect(() => {
        if(currentID === ''){
           setValues({
               ...initialFieldValues
           })
            setMode('Register New Device')
            setBtn('ADD DEVICE')}
        else{
            setValues({
                ...devices[currentID]
            })
            setMode('Edit Node Information')
            setBtn('SAVE')
        }
        }
    ,[currentID, devices])

    useEffect(()=>{
        setValues(initialFieldValues)
    },[submitState])

    const handleInputChange = e => {
        var { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        addOrEdit(values)
        setSubmitState(!submitState)
    }
    return (
        <div className="container-form">
            <h1>{mode}</h1>
            <form className="register-form" autoComplete="off" onSubmit={handleFormSubmit}>
                <label>Type: </label>
                <select className="select" placeholder="Device Type" name="type" value={values.type} 
                required="required" onChange={handleInputChange}>
                    {optionValues.map((val, key) => 
                    <option key={key} value={val.value}>{val.name}</option>)
                    }
                </select>
                <label>Device ID: </label>
                <input type="text" placeholder="Device ID" name="ID" value={values.ID} 
                 required="required" onChange={handleInputChange} />
                <label>Location: </label>
                <input type="text" placeholder="Location" name="location" value={values.location} 
                required="required" onChange={handleInputChange} />
                <label>Latitude: </label>
                <input type="number" placeholder="Latitude" name="latitude" value={values.latitude} 
                required="required" onChange={handleInputChange} />
                <label>Longitude: </label>
                <input type="number" placeholder="Longitude" name="longitude" value={values.longitude} 
                required="required" onChange={handleInputChange} />
                <label>Active: </label>
                <div className="container-radio-label">
                    <div className="radio-label">
                        <input type="radio" id="1" name="activeStatus" value="1" onChange={handleInputChange}/>
                        <label htmlFor="1">Yes</label>
                    </div>
                    <div className="radio-label">
                        <input type="radio"  id="0" name="activeStatus" value="0" onChange={handleInputChange}/>
                        <label htmlFor="0">No</label>
                    </div>
                </div>
                <Button type="submit" variant="contained"  style={btnStyle} startIcon={
                btn === "ADD NODE" ? <AddCircleIcon /> : <EditIcon />}>
                    {btn}
                </Button>
                {/*<input type="submit" value={btn} className="btn-register" />*/}
            </form>
        </div>
    )
}

export default RegisterForm
