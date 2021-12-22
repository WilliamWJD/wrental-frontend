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
}

export function ReactModal({ modalIsOpen, titleModal, closeModal }:ReactModalProps) {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Content>
                <HeaderModal>
                    <h1>Atenção !</h1>
                </HeaderModal>
                <ContentModal>
                    <p>Tem certeza que deseja excluir o inquilino <strong>William José Dias</strong></p>
                </ContentModal>
                <OptionsModal>
                    <button className="buttonYes">Sim</button>
                    <button className="buttonNo" onClick={closeModal}>Não</button>
                </OptionsModal>
            </Content>
        </Modal>
    )
}