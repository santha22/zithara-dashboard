import React from 'react';
import { VscKebabVertical } from "react-icons/vsc";

const recentdata = [
  { id: 1, name: 'Aaron Smith', phone: '8743843092', email: 'kartheek843@gmail.com', orders: 45, trans: 35, awards: 8434 },
  { id: 2, name: 'John Cashnew', phone: '8743843092', email: 'kartheek843@gmail.com', orders: 45, trans: 35, awards: 8434 },
  { id: 3, name: 'Kartheek Reddy', phone: '8743843092', email: 'kartheek843@gmail.com', orders: 45, trans: 35, awards: 8434 },
  { id: 4, name: 'Arjun Kumar', phone: '8743843092', email: 'kartheek843@gmail.com', orders: 45, trans: 35, awards: 8434 },
  { id: 5, name: 'Kaden Smith', phone: '8743843092', email: 'kartheek843@gmail.com', orders: 45, trans: 35, awards: 8434 },
  { id: 6, name: 'Kartheek Reddy', phone: '8743843092', email: 'kartheek843@gmail.com', orders: 45, trans: 35, awards: 8434 }
];

const Orders = () => {
  return (
    <div className='bg-white px-4 pb-4 rounded-sm border border-gray-200 flex-1'>
      <div className='overflow-auto'>
        <table className='w-full min-w-full'>
          <thead>
            <tr className='bg-white'>
              <th className='text-left py-2 border-b-2'>NAME</th>
              <th className='text-left py-2 border-b-2'>PHONE</th>
              <th className='text-left py-2 border-b-2'>EMAIL ADDRESS</th>
              <th className='text-left py-2 border-b-2'>ORDERS</th>
              <th className='text-left py-2 border-b-2'>TRANS</th>
              <th className='text-left py-2 border-b-2'>TNG AWARDS</th>
              <th className='text-left py-2 border-b-2'></th>
            </tr>
          </thead>
          <tbody>
            {recentdata.map((order) => (
              <tr key={order.id}>
                <td className='py-2'>{order.name}</td>
                <td className='py-2'>{order.phone}</td>
                <td className='py-2'>{order.email}</td>
                <td className='py-2'>{order.orders}</td>
                <td className='py-2'>{order.trans}</td>
                <td className='py-2'>{order.awards}</td>
                <td className='py-2'><VscKebabVertical /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders;
