import {Modal, Button, Text} from '@gravity-ui/uikit';

export function RelationModal({
    relationData,
    relationOpen,
    setRelationOpen,
   }) {

    const handleCloseModal = () => {
        setRelationOpen(false);
    };

    return (
        <Modal open={relationOpen} onClose={handleCloseModal}>
            Абас
        </Modal>
    )
 }