import './App.css' 
import { Header,Footer } from './components'
import AllRoutes from './AllRoutes'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <AllRoutes />
      <Footer/>
    </div>
  )
}
export default App