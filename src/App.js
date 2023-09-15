import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
      <Navbar title="TextUtils" homeText="Home"/>
      <div className="container mt-3">
         <TextForm textHeading="Enter the text to analyze below"/>
      </div>
   </>
  );
}

export default App;