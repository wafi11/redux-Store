import ReactDOM from "react-dom";

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-75"></div>
  );
};
const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
      <div className="bg-white p-4 rounded-lg shadow-lg text-gray-900 mx-2 ">
        {children}
      </div>
    </div>
  );
};
const portralElement = document.getElementById("modal");
const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackdropOverlay />, portralElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portralElement
      )}
    </>
  );
};

export default Modal;
