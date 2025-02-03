import React from 'react';
import Navbar from '../../components/Navbar';
import DashboardHeader from './components/DashboardHeader';
import OrderCard from './components/OrderCard';
import Charts from './components/charts';
import CustomerReview from './components/CustomerReview';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <Navbar />
      <DashboardHeader />
      <OrderCard />
      <Charts />
      <CustomerReview />
    </div>
  );
}
