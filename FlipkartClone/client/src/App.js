import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'


//components
import Header from './components/header/Header';
import Home from './components/home/Home'
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView';
import Cart from './components/cart/Cart';


const App=()=>{
  return(
    <ContextProvider>
       <BrowserRouter>
    <Header/>
    <Box style={{marginTop: 54}}>
    <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
    </Box>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
