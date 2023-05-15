import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'

const ProductList = () => {
  const { filtered_products } = useFilterContext()

  return <GridView filteredProducts={filtered_products}>ProductList</GridView>
}

export default ProductList
