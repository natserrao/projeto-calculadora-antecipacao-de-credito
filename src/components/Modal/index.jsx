import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import {ModalDelay} from "./ModalDelay";
import ModalInternalError from "./ModalInternalError";
import ModalTimeOut from "./ModalTimeOut";
import { ModalWrapper } from "./style";

function Modal() {
  const { modal} = useContext(ModalContext);


  return (
    <>
      {modal.delay && modal.openModal ? (
        <ModalWrapper>
          <ModalDelay />
        </ModalWrapper>

      ) : modal.timeout && modal.openModal ? (
        <ModalWrapper>
          <ModalTimeOut/>
        </ModalWrapper>
        
      ) : modal.internalError && modal.openModal ? (
        <ModalWrapper>
          <ModalInternalError />
        </ModalWrapper>
      ) : null}
    </>
  );
}
export default Modal;
