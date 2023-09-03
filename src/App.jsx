import './App.scss';
import Buttons from './components/Buttons';
import Carousel from './components/Carousel'
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <div className='titleBox'>
          <h3 className='titleText'>Discover our <br/> planet-friendly offer </h3>
          <div className='titleDecoration'></div>
        </div>
        <Buttons />
      </div>
      <div className='carousel'>
        <Carousel/> 
      </div>
      <div className='showProducts'>
        <button className='btnAllProducts'>BROWSER ALL PRODUCTS</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
