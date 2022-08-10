import { FC } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ChatWithMe from './pages/ChatWithMe';
import Resume from './pages/Resume';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Resume />} />
        <Route path='/chat-with-me' element={<ChatWithMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
