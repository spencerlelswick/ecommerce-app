import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Nothing found!</h3>
        <Link to='/' className='btn'>
          Return to Home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 10rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default Error
