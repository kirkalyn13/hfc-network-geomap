import React  from 'react'
import ReactDOM  from 'react-dom'
import {render} from '@testing-library/react'
import Map from '../Map'
import { Fragment } from 'react'

it("renders without crashing", ()=>{
    const frag = document.createDocumentFragment()
    ReactDOM.render(<Map/>, frag)
})