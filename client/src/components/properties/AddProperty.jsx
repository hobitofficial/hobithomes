import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function AddProperty() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="text-white bg-violet-500 hover:bg-violet-700 p-2 rounded-lg shadow-lg"
        onClick={() => setOpenModal(true)}
      >
        Add Property
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-black ">
          <span className="text-violet-500"> Add New Property</span>
        </Modal.Header>
        <Modal.Body className="bg-black">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
