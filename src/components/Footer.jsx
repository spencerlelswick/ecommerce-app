import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        <span>Spencer's Store</span>
      </h5>
      <span className='copyright'> © {new Date().getFullYear()}</span>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary-6);

  span {
    color: var(--clr-primary-10);
  }

  .copyright {
    color: var(--clr-primary-8);
  }

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
