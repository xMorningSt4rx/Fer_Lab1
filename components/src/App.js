import './App.css';
import Navigation from './components/Navigation';
// import Player from './components/Player';
import Main from './components/Main';
import Footer from './components/Footer';


function App(){
  return (
    <div className='App'>
      <Navigation/>
      {/* <Player/> */}
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
