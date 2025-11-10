import { useRef, useEffect } from 'react'

const InputRef = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <h1>useRef Hook Example</h1>
      <input ref={inputRef} type="text" placeholder="focus me on mount!" />
    </div>
  )
}

export default InputRef