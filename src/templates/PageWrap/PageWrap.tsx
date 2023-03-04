
import { useEffect } from "react"

const PageWrap = ({ children }) => {
  return (
    <>
      <header>Potential Header</header>
      <main className='main'>
        {children}
      </main>
      <footer>
        Potential Footer
      </footer>
    </>
  )
}

export default PageWrap