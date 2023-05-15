import ListView from './ListView'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext()

  if (filtered_products.length < 1)
    return (
      <h5 style={{ textTransform: 'none' }}>
        No products match your search...
      </h5>
    )

  if (grid_view === false) {
    return <ListView filteredProducts={filtered_products} />
  }

  return <GridView filteredProducts={filtered_products}></GridView>
}

export default ProductList
