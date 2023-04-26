
import { Dispatch, SetStateAction } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ModalContent, ModalHeader, ModalSection } from "./style"
import { faX } from "@fortawesome/free-solid-svg-icons"

type ModalData = {
  id: number
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

  export default function Modal({ id, setOpenModal }: ModalData) {

    const handleCloseModal = () => {
      setOpenModal(false)
    }

  return (
    <ModalSection>
      <ModalHeader>
        <h2>Title</h2>
        <button onClick={() => handleCloseModal()}>
          <FontAwesomeIcon icon={faX} />
        </button>
      </ModalHeader>

      <ModalContent>
        <div>

        </div>

        <div>

        </div>
      </ModalContent>
    </ModalSection>
  )
}
