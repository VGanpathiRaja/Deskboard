import './App.css';
import Topbar from './Components/Mainframes/Topbar';
import SideNav from './Components/Mainframes/Sidebar';
import Daskboard from './Components/Mainframes/Daskbord';
function App() {
  return (
    <div>
      <Topbar/>
      <Daskboard/>
      <SideNav/>
    </div>
  );
}

export default App;
