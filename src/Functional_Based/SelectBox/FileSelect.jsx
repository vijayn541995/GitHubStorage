

import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'


const POPULATE_DEVICE = 'populateDevice'
const CLEAR = 'clear'

const data = {
Devices: [
    {
      value: 'Android',
      label: 'Android',
      Types: [
        { value: 'Android Mobile', label: 'Android Mobile'},
        { value: 'Android-2', label: 'Android-2' },
        { value: 'Android-3', label: 'Android-3' }
      ]
    },
    {
      value: 'IOS',
      label: 'IOS',
      Types: [
        { value: 'Ios Mobile', label: 'Ios Mobile' },
        { value: 'Ios Mobile-2', label: 'Ios Mobile-2' },
        { value: 'Ios Mobile-3', label: 'Ios Mobile-3' }
      ]
    },
    {
        value: 'OTT',
        label: 'OTT',
        Types: [
          { value: 'OTT Mobile', label: 'OTT Mobile' },
          { value: 'OTT-2', label: 'OTT-2' },
          { value: 'OTT-3', label: 'OTT-3' }
        ]
      }
  ]
}

const initialState = {
  disableDevices: false,
  disableState: true,
  loadingState: false,
  TypesToBeLoaded: []
}

function reducer(state, action) {
  switch (action.type) {
    case POPULATE_DEVICE:
      return {
        ...state,
        disableDevices: true,
        disableState: false,
        loadingState: true,
        TypesToBeLoaded: data.Devices.find(
          Devices => Devices.value === action.Devices
        ).Types
      }
    case CLEAR:
    default:
      return initialState
  }
}

function FileSelect() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div  className="App row">
        <div className='col-md-6'>
            
      <h1>Select Box</h1>

<Select
  isDisabled={state.disableDevices}
  isLoading={state.loadingState}
  isClearable
  isSearchable
  placeholder="Select A Device..."
  name="Device"
  options={data.Devices}
  onChange={e => dispatch({ type: POPULATE_DEVICE, Devices: e.value })}
/>

<br />

{!state.disableState && (
  <>
    <Select
      isDisabled={state.disableState}
      isLoading={false}
      isClearable
      isSearchable
      placeholder="Select Type..."
      name="Type OF Device"
      options={state.TypesToBeLoaded}
    />

    <br />

    <button type="button" onClick={() => dispatch({ type: CLEAR })}>
      Clear
    </button>
  </>
)}

        </div>
            </div>
  )
}

 export default FileSelect;


const rootElement = document.getElementById('root')
ReactDOM.render(<FileSelect />, rootElement)
