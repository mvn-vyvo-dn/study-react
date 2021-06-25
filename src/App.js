import './App.css';
import Header from './Header';
import Footer from './Footer';
import ListItems from './ListItems';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <ListItems/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
