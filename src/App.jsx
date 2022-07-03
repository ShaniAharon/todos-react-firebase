import {Route, Routes} from 'react-router-dom'
import {AppHeader} from './components/AppHeader'
import {TodoEdit} from './views/TodoEdit'
import {TodoDetails} from './views/TodoDetails'
import {TodoApp} from './views/TodoApp'

function App() {
  return (
    <section className=" ">
      <AppHeader />
      <Routes>
        <Route path="/edit" element={<TodoEdit />}>
          <Route path=":id" element={<TodoEdit />} />
        </Route>
        <Route path="/:id" element={<TodoDetails />} />
        <Route path="/" element={<TodoApp />} />
      </Routes>
      {/* <AppFooter /> */}
    </section>
  )
}

export default App
