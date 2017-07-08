import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const ProductCategory = ({ ticket, setCategory }) => (
  <div>
    <form>
      {['IPhone', 'Macbook', 'IPad'].map((category, index) => (
        <Link to='/product-model' className='btn btn-secondary d-block'
          key={index} onClick={() => setCategory(category)}>{category}
        </Link>
      ))}
    </form>
  </div>
)

ProductCategory.propTypes = {
  ticket: PropTypes.object,
  setCategory: PropTypes.func
}

export default ProductCategory
