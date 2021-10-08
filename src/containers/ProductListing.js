import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productAction';

const ProductListing = () => {
  const products = useSelector(state => state);
  console.log(products);
  const dispatch = useDispatch();

  const fetchProducs = async () => {
    const reponse = await axios
      .get('https://fakestoreapi.com/products')
      .catch(err => {
        console.log('Eror', err);
      });
    
    const fetchedData = reponse.data;
    console.log('from useEffect',fetchedData);
    dispatch(setProducts(fetchedData));
  };
 

  useEffect(() => {
    fetchProducs();
   
  }, []);

  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products').then((response) => {
  //     console.log('hiiiiiiiiiiii',response.data);
  //     const fetchedData = response.data;
  //     console.log('from useEffect',fetchedData);
  //     dispatch(setProducts(fetchedData));
  //   });
  //   console.log('byeeeeeeeeee')
  // }, []);

  console.log('product hello :', products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
