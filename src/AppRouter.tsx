import * as React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';
import {Home, AddOffice, ViewOffice} from './scenes/'

export function BrowserSwitch(){
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/office/add' element={<AddOffice />}/>
      <Route path='/office/:uid' element={<ViewOffice />} />
    </Routes>
  )
}

export {}