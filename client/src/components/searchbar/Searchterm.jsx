import { Modal } from "flowbite-react";
import { useState } from "react";
import { setStayDuration } from "../../redux/search/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function Searchterm() {
  const [openModal, setOpenModal] = useState(true);
  const { stayDuration } = useSelector((state) => state.searchs);
  const dispatch = useDispatch();

  const handleStayDuration = (duration) => {
    setOpenModal(false);
    dispatch(setStayDuration(duration));
  };
  console.log(stayDuration);
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Body className="bg-gray-500 rounded-lg shadow-xl">
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-white dark:text-gray-400">
              Looking for
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="bg-white hover:bg-gray-400 text-black p-2 rounded-lg shadow-lg outline-none"
                onClick={() => handleStayDuration("shortTerm")}
                aria-label="Choose Short Term Stay"
              >
                Short Term
              </button>
              <button
                className="bg-violet-500 hover:bg-violet-700 text-black p-2 rounded-lg shadow-lg"
                onClick={() => handleStayDuration("longTerm")}
                aria-label="Choose Long Term Stay"
              >
                Long Term
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div></div>
    </>
  );
}
