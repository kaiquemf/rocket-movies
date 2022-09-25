import { Routes, Route } from 'react-router-dom';

import { CreateNote } from '../pages/CreateNote';
import { Home } from '../pages/Home';
import { NotePreview } from '../pages/NotePreview';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/createnote' element={<CreateNote />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/notepreview/:id' element={<NotePreview />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
  )
}