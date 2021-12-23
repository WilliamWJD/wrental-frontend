import { Content, HeaderModal, ContentModal, OptionsModal } from './styles';

import { ReactModal } from '../../../components/Modal';

interface DeleteDialogProps{
    modalIsOpen:boolean;
    closeModal():void;
    handleDelete():void;
    itemName:string;
}

export function DeleteDialog({modalIsOpen, closeModal, handleDelete, itemName}:DeleteDialogProps) {
    return (
        <ReactModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
        >
            <Content>
                <HeaderModal>
                    <h1>Atenção !</h1>
                </HeaderModal>
                <ContentModal>
                    <p>Tem certeza que deseja excluir o inquilino <strong>{itemName}</strong> ?</p>
                    <p>Todos os registros de locações e recibos de aluguéis serão perdidos.</p>
                </ContentModal>
                <OptionsModal>
                    <button className="buttonYes" onClick={handleDelete}>Sim</button>
                    <button className="buttonNo" onClick={closeModal}>Não</button>
                </OptionsModal>
            </Content>
        </ReactModal>
    )
}