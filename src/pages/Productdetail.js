import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {
    const params = useParams()

    return (
        <header>
            <h1>{params.productId}</h1>
        </header>
    )
}

export default ProductDetail;