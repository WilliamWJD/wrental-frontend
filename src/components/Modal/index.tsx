import Modal from 'react-modal';

const customStyles = {
    overlay:{
        backgroundColor:'rgba(0,0,0,0.4'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface ReactModalProps{
    modalIsOpen:boolean;
    closeModal():void;
    children:any;
}

export function ReactModal({ modalIsOpen, closeModal, children }:ReactModalProps) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            {children}
        </Modal>
    )
}