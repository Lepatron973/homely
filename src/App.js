import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Statistic from './components/Statistic';
import Home from './pages/Home';
import General from './components/General';
import List from './components/List';
import ListCard from './components/ListCard';
import ArticleCard from './components/ArticleCard';
import Header from './components/Header';
import ArticleStockCard from './components/ArticleStockCard';
import ListPlatsCard from './components/ListPlatsCard';
import IngredientCard from './components/IngredientCard';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home content={<General />} />} />
        <Route path='/stats' element={<Home content={<Statistic />}/>} />
        <Route path='/list' element={<List content={<ListCard />}/>} />
        <Route path='/list/:listId' element={<List content={<ArticleCard />}/>} />
        <Route path='/stock/:listId' element={<List content={<ArticleStockCard />}/>} />
        <Route path='/plats' element={<List content={<ListPlatsCard />}/>} />
        <Route path='/plats/:listId' element={<List content={<IngredientCard />}/>} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
