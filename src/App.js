import Header from "./components/UI/Header/Header"
import Footer from "./components/UI/Footer/Footer"
import SearchBar from "./components/UI/SearchBar/SearchBar";
import ItemAvtar from "./components/UI/ItemAvtar/ItemAvtar";
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
