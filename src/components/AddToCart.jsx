import AmountButtons from './AmountButtons'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) return stock
      return oldAmount + 1
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) return 1
      return oldAmount - 1
    })
  }

  return (
    <Wrapper>
      <div className='colors'>
        <span> colors : </span>
        {colors.map((color, index) => {
          return (
            <button
              className={`${
                mainColor === color ? 'color-btn active' : 'color-btn'
              }`}
              key={index}
              style={{ background: color }}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          )
        })}
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to='/cart' className='btn'>
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    margin-left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

export default AddToCart
