import { useState } from 'react'

export const useShow = (initShow = true) => {
  const [show, setShow] = useState(initShow)

  const toggleShow = () => {
    setShow(!show)
  }

  return {
    show,
    toggleShow
  }
}
