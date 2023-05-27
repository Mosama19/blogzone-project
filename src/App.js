import Home from './components/home/Home';
import Footer from './components/shared/Footer';
import NavBar from './components/shared/NavBar';
import UsersignUp from "./components/login/signUp"
function App() {
  return (
    <div className="App box-border">
      <NavBar />
      <Home />
      <UsersignUp />
      <Footer />
    </div>
  );
}

export default App;
