import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import {ModalDelay} from "./ModalDelay";
import { ModalInternalError} from "./ModalInternalError";
import { ModalTimeOut } from "./ModalTimeOut";
import { Container } from "./style";

function Modal() {
  const { modal} = useContext(ModalContext);


  return (
    <>
      {modal.delay && modal.openModal ? (
        <Container>
          <ModalDelay />
        </Container>

      ) : modal.timeout && modal.openModal ? (
        <Container>
          <ModalTimeOut/>
        </Container>
        
      ) : modal.internalError && modal.openModal ? (
        <Container>
          <ModalInternalError />
        </Container>
      ) : null}
    </>
  );
}
export default Modal;
