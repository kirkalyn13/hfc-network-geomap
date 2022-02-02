import React  from 'react'
import ReactDOM  from 'react-dom'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Details from '../Details'


it("renders without crashing", ()=>{
    const table = document.createElement('table')
    ReactDOM.render(<Details/>, table)
})


it("renders detail type correctly", ()=> {
    const {getByTestId} = render(<Details deviceType="HFC Node"></Details>)
    expect(getByTestId('details')).toHaveTextContent("HFC Node")
})

it("renders detail id correctly", ()=> {
    const {getByTestId} = render(<Details deviceType="123"></Details>)
    expect(getByTestId('details')).toHaveTextContent("123")
})

it("renders detail location correctly", ()=> {
    const {getByTestId} = render(<Details deviceType="Pampanga"></Details>)
    expect(getByTestId('details')).toHaveTextContent("Pampanga")
})

it("renders detail latitude correctly", ()=> {
    const {getByTestId} = render(<Details deviceType="15.135079769844719"></Details>)
    expect(getByTestId('details')).toHaveTextContent("15.135079769844719")
})

it("renders detail longitude correctly", ()=> {
    const {getByTestId} = render(<Details deviceType="120.58994873535379"></Details>)
    expect(getByTestId('details')).toHaveTextContent("120.58994873535379")
})

it("renders detail status correctly", ()=> {
    const {getByTestId} = render(<Details deviceType="Active"></Details>)
    expect(getByTestId('details')).toHaveTextContent("Active")
})