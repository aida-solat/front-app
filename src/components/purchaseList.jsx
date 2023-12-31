import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';

function PurchaseList() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getPurchases')
      .then((response) => response.json())
      .then((data) => setPurchases(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='w-full m-4'>
      <Table>
        <Table.Head>
          <Table.HeadCell className='w-3/6'>Item ID</Table.HeadCell>
          <Table.HeadCell className='w-2/6'>Date</Table.HeadCell>
          <Table.HeadCell className='w-2/6'>Time</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {purchases.map((purchase) => {
            const date = new Date(purchase.purchaseDate);
            const dateString = date.toLocaleDateString();
            const timeString = date.toLocaleTimeString();

            return (
              <Table.Row
                key={purchase.id}
                className='bg-white dark:border-gray-700 dark:bg-gray-800'
              >
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {purchase.productId}
                </Table.Cell>
                <Table.Cell>{dateString}</Table.Cell>
                <Table.Cell>{timeString}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default PurchaseList;
