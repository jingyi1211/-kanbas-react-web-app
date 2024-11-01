import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DeleteAssignmentDialog({
    dialogTitle,
    confirmDelete,
    cancelDelete,
    show,
}: {
    dialogTitle: string;
    confirmDelete: () => void;
    cancelDelete: () => void;
    show: boolean;
}) {
    return (
        <Modal show={show} onHide={cancelDelete} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={confirmDelete}>
                    Yes
                </Button>
                <Button variant="secondary" onClick={cancelDelete}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
