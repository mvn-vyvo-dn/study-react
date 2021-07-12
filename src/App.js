import './App.css';
import Header from './Header';
import Footer from './Footer';
import GetListData from './GetListData';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <GetListData />
      </main>
      <Footer />
    </div>
  );
}

export default App;
