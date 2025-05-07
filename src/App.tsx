import classes from  './App.module.css';
import Body from './components/layout/body';
import { linkedInUrl, sourceCodesUrl } from './common/constants';

function App() {
  return (
    <>
      <header className={classes.appHeader}>
        <div className={classes.titlePart}>
          <a href={linkedInUrl} target='_blank'><img src={'/sitangCircle.png'} alt='Sitang Ruan'/></a>
          <div className={classes.title}>Sitang React Demo 1</div>
        </div>
        <a href={sourceCodesUrl} target='_blank'>{sourceCodesUrl}</a>
      </header>
      <Body></Body>
    </>
  )
}

export default App;
