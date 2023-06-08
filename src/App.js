import logo from './logo.svg';
import './App.css';
import './Components/Header.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
<div>
      <Header />
      <div className="content">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
