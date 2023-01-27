import Header from "./components/Header"
import Footer from "./components/UI/Footer/Footer"
import SearchBar from "./components/SearchBar";
import ItemAvtar from "./components/ItemAvtar";
import CategoryExplore from "./components/Explore"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <ItemAvtar/>
      <CategoryExplore/>
      <Footer/>
    </div>
  );
}

export default App;
