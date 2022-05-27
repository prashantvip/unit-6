import './App.css';
import Comments from './Components/Comments';
import { redditData } from './data/redditData';

function App() {
  return (
    <div className="App">
      <Comments data={redditData}/>
    </div>
  );
}

export default App;
