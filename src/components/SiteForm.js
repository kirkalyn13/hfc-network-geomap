import { useState, useEffect } from 'react'

const SiteForm = ({addOrEdit, currentID, sites}) => {
    const initialFieldValues = {
        siteID: '',
        siteName: '',
        latitude: '',
        longitude: '',
        count2G: '0',
        count3G: '0',
        count4G: '0',
    }
    var [ values, setValues ] = useState(initialFieldValues)
    const [submitState, setSubmitState] = useState(false)
    const [mode, setMode] = useState('Register New Cell Site')
    const [btn, setBtn] = useState('ADD SITE')

    useEffect(() => {
        if(currentID == ''){
           setValues({
               ...initialFieldValues
           })
            setMode('Register New Cell Site')
            setBtn('REGISTER SITE')}
        else{
            setValues({
                ...sites[currentID]
            })
            setMode('Edit Site Information')
            setBtn('SAVE')
        }
        }
    ,[currentID, sites])

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
                <label>Site ID: </label>
                <input type="text" placeholder="Site ID" name="siteID" value={values.siteID} 
                 required="required" onChange={handleInputChange} />
                <label>Site Name: </label>
                <input type="text" placeholder="Site Name" name="siteName" value={values.siteName} 
                required="required" onChange={handleInputChange} />
                <label>Latitude: </label>
                <input type="number" placeholder="Latitude" name="latitude" value={values.latitude} 
                required="required" onChange={handleInputChange} />
                <label>Longitude: </label>
                <input type="number" placeholder="Longitude" name="longitude" value={values.longitude} 
                required="required" onChange={handleInputChange} />
                <label>Technology Count: </label>
                <div className="container-radio-label">
                    <div className="radio-label">
                        <input type="radio" id="1" name="count2G" value="1" onChange={handleInputChange}/>
                        <label for="1">With 2G</label>
                    </div>
                    <div className="radio-label">
                        <input type="radio"  id="0" name="count2G" value="0" onChange={handleInputChange}/>
                        <label for="0">Without 2G</label>
                    </div>
                </div>
                <div className="container-radio-label">
                    <div className="radio-label">
                        <input type="radio" id="1" name="count3G" value="1" onChange={handleInputChange}/>
                        <label for="1">With 3G</label>
                    </div>
                    <div className="radio-label">
                        <input type="radio"  id="0" name="count3G" value="0" onChange={handleInputChange}/>
                        <label for="0">Without 3G</label>
                    </div>
                </div>
                <div className="container-radio-label">
                    <div className="radio-label">
                        <input type="radio" id="1" name="count4G" value="1" onChange={handleInputChange}/>
                        <label for="1">With 4G</label>
                    </div>
                    <div className="radio-label">
                        <input type="radio"  id="0" name="count4G" value="0" onChange={handleInputChange}/>
                        <label for="0">Without 4G</label>
                    </div>
                </div>
                <input type="submit" value={btn} className="btn-register" />
            </form>
        </div>
    )
}

export default SiteForm
