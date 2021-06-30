import './App.scss';
import ColorBox from './components/ColorBox/index'
function App() {
  console.log("Render App")
  return (
    <div className="App">
      <h1> Welcome Nguyen Quoc Huy</h1>
      <ColorBox></ColorBox>
    </div>
  );
}

export default App;
