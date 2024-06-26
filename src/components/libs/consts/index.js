import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'customers',
		label: 'Customers',
		path: '/',
		icon: HiOutlineViewGrid
	},
	{
		key: 'customer analytics',
		label: 'Customer analytics',
		path: '/products',
		icon: HiOutlineCube 
	},
	{
		key: 'campaigns',
		label: 'Campaigns',
		path: '/orders',
		icon: HiOutlineShoppingCart 
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/customers',
		icon: HiOutlineUsers 
	},
	{
		key: 'lead management',
		label: 'Lead management',
		path: '/transactions',
		icon: HiOutlineDocumentText 
	},
	{
		key: 'cart',
		label: 'Cart',
		path: '/messages',
		icon: HiOutlineAnnotation 
	},
	{
		key: 'communications',
		label: 'Communications',
		path: '/messages',
		icon: HiOutlineAnnotation 
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/messages',
		icon: HiOutlineAnnotation 
	},
	{
		key: 'redeem voucher',
		label: 'Redeem Voucher',
		path: '/messages',
		icon: HiOutlineAnnotation 
	},
	{
		key: 'feedback',
		label: 'Feedback',
		path: '/messages',
		icon: HiOutlineAnnotation 
	},
	{
		key: 'communication prices',
		label: 'Communication prices',
		path: '/messages',
		icon: HiOutlineAnnotation 
	},
	{
		key: 'lead management',
		label: 'Lead management',
		path: '/lead',
		icon: HiOutlineAnnotation 
	},

]
