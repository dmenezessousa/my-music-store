import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../fetchData';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

const HomePage = (props) => {
  const { addItemToCart } = props;
  const [productData, setProductData] = useState();

  
  useEffect(() => {
    fetchProducts().then(data => setProductData(data))
  }, [])

  if(!productData){
    return null;
  }

  return (
  <Layout color="red">
    <Box p={4}>
      {productData.map(product => (
        <Box
          key={product.id}
          mb={4}
          display="flex"
          alignItems="center"
        >
          <ProductDisplay
            addItemToCart={addItemToCart}            
            product={{
              id: product.id,
              title: product.title,
              brand: product.brand,
              price: product.price,
              description: product.description,
              image: product.image,
            }}
            /> 
        </Box>
      ))}
    </Box>
  </Layout>
  )
};

export default HomePage;