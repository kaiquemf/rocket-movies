import { Routes, Route } from 'react-router-dom';

import { NotePreview } from '../pages/NotePreview';
import { CreateNote } from '../pages/CreateNote';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';


export function AppRoutes(){
  return (
  <Routes location={location} key={location.pathname}>
    <Route path='/' element={ <Home /> }/>
    <Route path="/createnote" element={ <CreateNote /> }/>
    <Route path='/profile' element={ <Profile /> }/>
    <Route path='/notepreview/:id' element={ <NotePreview /> }/>
  </Routes>
  )
}