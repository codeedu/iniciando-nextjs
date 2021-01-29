// @flow 
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { Product } from '../../models/product';
interface ProductShowProps{
    product: Product;
};

const ProductShow: NextPage<ProductShowProps> = (props) => {
    const {product} = props;
    const router = useRouter();
    if(router.isFallback){
        return <div>carregando...</div>
    }
    return (
        <div>
            {product.name} - {product.price}
        </div>
    );
};

export default ProductShow;

export const getStaticProps : GetStaticProps = async (context) => {
    const {
        params: {id}
    } = context
    const {data} = await axios.get(`http://host.docker.internal:3000/products/${id}`);
    
    return {
        props: {
            product: data
        },
        revalidate: 20
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    return {
        paths: [
            {params: {id: "6"}},
            {params: {id: "7"}},
        ],
        fallback: true,
    }
}