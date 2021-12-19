import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
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
              <div className='app__page'>
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
