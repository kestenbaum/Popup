import {useState} from "react";

import './App.css'
import Popup from "./components/UI/Popup/Popup.tsx";

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
        <button
            onClick={() => setOpen(true)}
        >
             Modal
        </button>
        <Popup
            setShowModal={setOpen}
            children={"content"}
            showModal={open}
        />
    </>
  )
}

export default App
