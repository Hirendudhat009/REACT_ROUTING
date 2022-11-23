import { Link } from 'react-router-dom'

const Product = () => {
    return <div>
        <header>
            <h1>Product</h1>
        </header>
        <div>
            <li><Link to='/products/p1'>Book</Link></li>
            <li><Link to='/products/p2'>Pen</Link></li>
            <li><Link to='/products/p3'>Mobile</Link></li>
        </div >
    </div >
}

export default Product;