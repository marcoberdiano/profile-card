import bgtop from '../images/bg-pattern-top.svg';
import bgbottom from '../images/bg-pattern-bottom.svg';
import CardProfile from './CardProfile';

function App() {
  return (
    <main>
      <img className='bgtop' src={bgtop} alt=''></img>
      <CardProfile/>
      <img className='bgbottom' src={bgbottom} alt=''></img>
    </main>
  );
}

export default App;
