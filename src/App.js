import './App.css';
import Header from './comp/Header';
import Sidebar from './comp/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Category from './comp/Category';
import Content from './comp/Content';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='fixed inset-x-0 inset-y-0'>
          <Header />
          <Category />
        </div>
        <Routes>
          <Route
            path='/search/:term'
            element={
              <div className='app__page'>
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route
            path='/'
            element={
              <div className='mt-28'>
                <Content />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
