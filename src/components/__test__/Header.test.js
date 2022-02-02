import React  from 'react'
import ReactDOM  from 'react-dom'
import {render} from '@testing-library/react'
import Header from '../Header'

it("renders without crashing", ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Header/>, div)
})