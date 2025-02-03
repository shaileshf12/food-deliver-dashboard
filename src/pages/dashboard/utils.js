import order1 from '../../assets/order1.png';
import order2 from '../../assets/order2.png';
import order3 from '../../assets/order3.png';
import order4 from '../../assets/order4.png';

import john from '../../assets/john.png';
import sofia from '../../assets/sofia.png';
import anand from '../../assets/anand.png';
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';

export const ordersData = [
  {
    count: 75,
    label: 'Total Orders',
    isIncreased: true,
    percentage: 4,
    isRevenue: false,
    img: order1,
  },
  {
    count: 357,
    label: 'Total Delivered',
    isIncreased: true,
    percentage: 4,
    isRevenue: false,
    img: order2,
  },
  {
    count: 65,
    label: 'Total Canceled',
    isIncreased: false,
    percentage: 25,
    isRevenue: false,
    img: order3,
  },
  {
    count: 128,
    label: 'Total Revenue',
    isIncreased: false,
    percentage: 12,
    isRevenue: true,
    img: order4,
  },
];

export const chartOrderData = [
  { day: 'Sunday', orders: 200 },
  { day: 'Monday', orders: 60 },
  { day: 'Tuesday', orders: 456 },
  { day: 'Wednesday', orders: 280 },
  { day: 'Thursday', orders: 500 },
  { day: 'Friday', orders: 100 },
  { day: 'Saturday', orders: 450 },
];

export const customerMapData = [
  { name: 'Sun', value1: 60, value2: 80 },
  { name: 'Mon', value1: 40, value2: 30 },
  { name: 'Tue', value1: 70, value2: 65 },
  { name: 'Wed', value1: 60, value2: 40 },
  { name: 'Thu', value1: 50, value2: 20 },
  { name: 'Fri', value1: 60, value2: 70 },
];

export const pieChartData = [
  { name: 'Total Order', value: 81, color: '#FF5B5B', empty: '#FF5B5B26' },
  { name: 'Customer Growth', value: 22, color: '#00B074', empty: '#00B07426' },
  { name: 'Total Revenue', value: 62, color: '#2D9CDB', empty: '#2D9CDB26' },
];

export const revenueChartData = [
  { name: 'Jan', 2020: 10000, 2021: 20000 },
  { name: 'Feb', 2020: 15000, 2021: 30000 },
  { name: 'Mar', 2020: 20000, 2021: 10000 },
  { name: 'Apr', 2020: 30000, 2021: 35000 },
  { name: 'May', 2020: 35000, 2021: 25000 },
  { name: 'Jun', 2020: 38753, 2021: 20000 },
  { name: 'Jul', 2020: 25000, 2021: 30000 },
  { name: 'Aug', 2020: 32000, 2021: 35000 },
  { name: 'Sept', 2020: 28000, 2021: 20000 },
  { name: 'Oct', 2020: 15000, 2021: 12657 },
  { name: 'Nov', 2020: 22000, 2021: 30000 },
  { name: 'Dec', 2020: 25000, 2021: 35000 },
];

export const reviews = [
  {
    id: 1,
    name: 'John',
    date: '2 days ago',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    rating: 4.5,
    image: john,
    foodImage: food1,
  },
  {
    id: 2,
    name: 'Sofia',
    date: '2 days ago',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    rating: 3,
    image: sofia,
    foodImage: food2,
  },
  {
    id: 3,
    name: 'Anand',
    date: '2 days ago',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    rating: 3,
    image: anand,
    foodImage: food1,
  },
  {
    id: 4,
    name: 'James',
    date: '2 days ago',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    rating: 3,
    image: anand,
    foodImage: food2,
  },
];
