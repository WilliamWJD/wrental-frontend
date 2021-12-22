import Modal from 'react-modal';
import { Content, HeaderModal, ContentModal, OptionsModal } from './styles';

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
    titleModal:string;
    handleDelete():void;
    itemName:string;
}

export function ReactModal({ modalIsOpen, titleModal, closeModal, handleDelete, itemName }:ReactModalProps) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <Content>
                <HeaderModal>
                    <h1>Atenção !</h1>
                </HeaderModal>
                <ContentModal>
                    <p>Tem certeza que deseja excluir o inquilino <strong>{itemName}</strong></p>
                </ContentModal>
                <OptionsModal>
                    <button className="buttonYes" onClick={handleDelete}>Sim</button>
                    <button className="buttonNo" onClick={closeModal}>Não</button>
                </OptionsModal>
            </Content>
        </Modal>
    )
}