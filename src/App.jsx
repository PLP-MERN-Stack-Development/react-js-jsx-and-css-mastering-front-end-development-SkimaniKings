import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </Layout>
  );
}

export default App;
