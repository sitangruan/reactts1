import './App.css';
import Body from './components/layout/body';
import { sourceCodesUrl } from './common/constants';

function App() {
  return (
    <>
      <header className='app-header'>
        <div className='title'>Sitang React Demo 1</div>
        <a href={sourceCodesUrl} target='_blank'>{sourceCodesUrl}</a>
      </header>
      <Body></Body>
    </>
  )
}

export default App;
