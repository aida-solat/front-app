import React, { useEffect, useState } from 'react';
import { Button, Table, Badge } from 'flowbite-react';
import { getProducts } from '../services/productService';
import ScreenNumber from '../components/screenNumber';
import { toast } from 'react-toastify';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBuyClick = (productId) => {
    fetch('http://localhost:5000/postPurchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='w-full m-4'>
      <Table>
        <Table.Head>
          <Table.HeadCell className='w-1/6'>Item</Table.HeadCell>
          <Table.HeadCell className='w-4/6'>Description</Table.HeadCell>
          <Table.HeadCell>Unit Price</Table.HeadCell>
          <Table.HeadCell className='w-1/6'>Status</Table.HeadCell>
          <Table.HeadCell className='w-1/6'>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {currentProducts.map((product) => (
            <Table.Row
              key={product.id}
              className='bg-white dark:border-gray-700 dark:bg-gray-800'
            >
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {product.name}
              </Table.Cell>
              <Table.Cell>{product.description}</Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>
                {product.status ? (
                  <Badge
                    color='success'
                    className='items-center justify-center'
                  >
                    Available
                  </Badge>
                ) : (
                  <Badge
                    color='failure'
                    className='items-center justify-center'
                  >
                    Out of Stock
                  </Badge>
                )}
              </Table.Cell>
              <Table.Cell>
                {product.status ? (
                  <Button
                    onClick={() => {
                      handleBuyClick(product.id);
                      toast.success('Item purchased successfully');
                    }}
                  >
                    Buy
                  </Button>
                ) : (
                  <Button disabled>Buy</Button>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ScreenNumber
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ProductList;
