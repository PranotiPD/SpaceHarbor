import './App.css'
import { Route, Routes } from 'react-router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountPage from './pages/Account';

axios.defaults.baseURL='http://127.0.0.1:4000'
axios.defaults.withCredentials = true;
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/account/:subpage?' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App;