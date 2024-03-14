import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProducts from './BestSellingProducts'

export default function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <WeeklySalesChart/>
        <BestSellingProducts/>
    </div>
  )
}
