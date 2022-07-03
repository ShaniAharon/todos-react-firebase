import {AppHeader} from './cmps/AppHeader'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <section className=" ">
      <AppHeader />
      <Routes>
        {/* <Route path="/edit" element={<NoteEdit />}>
          <Route path=":id" element={<NoteEdit />} />
        </Route> */}
        {/* <Route path="/" element={<KeepApp />} /> */}
      </Routes>
      {/* <AppFooter /> */}
    </section>
  )
}

export default App
