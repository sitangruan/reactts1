/**
* This is the loading service which allows toggling the global loading mask from anywhere.
*/

import React, { JSX, useContext, useState} from "react";
import LoadingMask from "./loadingMask";
import { LoadingMaskServiceProps } from "../../common/interfaces";

const LoadingServiceContext = React.createContext<(visible: boolean, showSpinner?: boolean, isMaskTransparent?: boolean) => void>(
  () => {return;}
);

export const useLoadingMask = (): ((visible: boolean, showSpinner?: boolean, isMaskTransparent?: boolean) => void) => useContext(LoadingServiceContext);

export const LoadingMaskServiceProvider = ({children}: LoadingMaskServiceProps): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);
  const [isMaskTransparent, setIsMaskTransparent] = useState<boolean>(false);

  const trigger = (visible: boolean, showSpinner = true, isTransparent = true) => {
    if (visible) {
      setIsShow(true);
      setIsShowSpinner(showSpinner);
      setIsMaskTransparent(isTransparent);
    } else {
      setIsShow(false);
      setIsShowSpinner(false);
      setIsMaskTransparent(false);
    }
  }

  return <>
    <LoadingServiceContext.Provider value={trigger}>
      {children}
    </LoadingServiceContext.Provider>
    <LoadingMask visible={isShow} showSpinner={isShowSpinner} isMaskTransparent={isMaskTransparent}></LoadingMask>
  </>
}
