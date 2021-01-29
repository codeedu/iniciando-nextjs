// @flow 
import axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import * as React from 'react';
import { Product } from '../../models/product';

interface ProductsListProps{
    products: Product[];
};
const ProductsList: NextPage<ProductsListProps> = (props) => {
    const {products} = props;
    // const [products, setProducts] = React.useState<User[]>([]);

    // React.useEffect(() => {
    //     axios.get('http://localhost:3001/api/products')
    //         .then(response => {
    //             setProducts(response.data);
    //         })
    // }, []);

    return (
        <ul>
            {products.map(p => (
                <li>{p.name} - {p.price}</li>
            ))}
        </ul>
    );
};

export default ProductsList;

export const getStaticProps : GetStaticProps = async (context) => {
    const {data} = await axios.get('http://host.docker.internal:3000/products');
    
    return {
        props: {
            products: data
        }
    }
}