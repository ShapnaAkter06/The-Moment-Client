import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
