import './App.css';
import Header from './Header';
import Footer from './Footer';
import RegisterFormHook from './RegisterFormHook';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <RegisterFormHook />
      </main>
      <Footer />
    </div>
  );
}

export default App;
