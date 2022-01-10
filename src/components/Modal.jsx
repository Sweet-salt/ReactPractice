import ReactDom from 'react-dom';

const Modal = ( {childern} ) => ReactDom.createPortal(childern, document.querySelector("#modal"));

export default Modal;