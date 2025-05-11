import classes from  './App.module.css';
import Body from './components/layout/body';
import { linkedInUrl, sourceCodesUrl } from './common/constants';

function App() {
  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <div className={classes.titlePart}>
          <a href={linkedInUrl} target='_blank'><img src={'/sitangCircle.png'} title='Sitang Ruan'/></a>
          <div className={classes.title}>Sitang React Demo 1</div>
        </div>
        <a href={sourceCodesUrl} target='_blank'>{sourceCodesUrl}</a>
      </header>
      <Body></Body>
    </div>
  )
}

export default App;
