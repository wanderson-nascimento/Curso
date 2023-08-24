import { Header } from '../components/Header'
import { Search } from '../components/Search'
import { Main } from '../components/Main'

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <div>
        <Search />
        <Main />
      </div>
    </>
  )
}

export default App
