import React from 'react';
import DashboardStatsGrid from './DashboardStatsGrid';
import Orders from './Orders';
import Filter from './Filter';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 px-4'>
      <DashboardStatsGrid />
      <Filter />
      <Orders />
    </div>
  )
}

export default Dashboard;
