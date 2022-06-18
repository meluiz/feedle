import { Route, Routes } from 'react-router-dom'

const Component = function () {
  return (
    <Routes>
      <Route path="/" element={<>Hello world</>} />
    </Routes>
  )
}

export default Component
