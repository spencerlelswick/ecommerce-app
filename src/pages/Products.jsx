import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import Filters from '../components/Filters'
import PageHero from '../components/PageHero'
import styled from 'styled-components'

const Products = () => {
  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div``

export default Products
