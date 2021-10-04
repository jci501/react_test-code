import './App.css';
import Buttom from './components/Buttom';
import Header from './components/Header';
import Maincontent from './components/Maincontent';
<head>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>


function App() {
  return (
    <div className="App">
     <Header/>
     <Maincontent/>
      <Buttom/>
     
    </div>
  );
}

export default App;
