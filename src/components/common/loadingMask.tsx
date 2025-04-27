import classes from './loadingMask.module.css';
import { LoadingMaskProps } from '../../common/interfaces';

const LoadingMask: React.FC<LoadingMaskProps> = ({visible, showSpinner=true, isMaskTransparent=false}: LoadingMaskProps) => {
  if (!open) {
    return <></>;
  }

  const spinner = showSpinner? <div className={classes.ldsSpinner}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div> : <></>

  const wrapperClass = isMaskTransparent ? classes.dialogWrapper : [classes.dialogWrapper, classes.notTransparent].join(' ');
  const loader = <div className={wrapperClass}>{spinner}</div>;
  
  return visible ? loader : <></>;
}

export default LoadingMask;