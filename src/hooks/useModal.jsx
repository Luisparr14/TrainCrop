import { useEffect, useState } from 'react'

export const useModal = (id) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (id === 'instructions') {
      const handleKeyDown = (e) => {
        const { key } = e
        switch (key) {
          case 'Escape':
            setShowModal(false)
            break
          case '?':
            setShowModal(prev => !prev)
            break
          default:
            break
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [id])

  useEffect(() => {
    const firstTime = localStorage.getItem(`firstTime-${id}`)
    if (firstTime === null || firstTime === 'true') {
      setShowModal(true)
      localStorage.setItem(`firstTime-${id}`, false)
    } else localStorage.setItem(`firstTime-${id}`, false)
  }, [id])

  const toggleModal = () => {
    setShowModal((prev) => !prev)
  }

  return [showModal, toggleModal]
}
