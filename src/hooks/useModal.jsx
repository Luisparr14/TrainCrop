import { useEffect, useState } from 'react'

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e
      switch (key) {
        case 'Escape':
          setShowModal(false)
          break
        case '?':
          setShowModal(true)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const firstTime = localStorage.getItem('firstTime')
    if (firstTime === null || firstTime === 'true') {
      setShowModal(true)
      localStorage.setItem('firstTime', false)
    } else localStorage.setItem('firstTime', false)
  }, [])

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  return {
    showModal,
    toggleModal
  }
}
