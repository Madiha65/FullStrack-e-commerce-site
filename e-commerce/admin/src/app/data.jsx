import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { RiProductHuntLine } from "react-icons/ri";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import MarkUnreadChatAltTwoToneIcon from "@mui/icons-material/MarkUnreadChatAltTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { Avatar } from "@mui/material";

export const sidebarMenu = [
  {
    title: "Dashboard",
    href: "/",
    icon: <GridViewTwoToneIcon size={16} />,
  },
  {
    title: "Category List",
    href: "/category/list",
    icon: <CategoryTwoToneIcon size={16} />,
    items: [
      {
        title: "Category List",
        href: "/category",
      },
      {
        title: "Add Category",
        href: "/category/addCategory",
      },
    ],
  },
  {
    title: "Product List",
    href: "/product/list",
    icon: <RiProductHuntLine size={16} />,
    items: [
      {
        title: "Product List",
        href: "/products",
      },
      {
        title: "Add Product",
        href: "/products/addProduct",
      },
      {
        title: "Edit Product",
        href: "/products/editProduct",
      },
      {
        title: "Upload Product",
        href: "/products/productUpload",
      },
    ],
  },
  {
    title: "Customers",
    href: "/",
    icon: <PeopleAltTwoToneIcon size={16} />,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <ProductionQuantityLimitsIcon size={16} />,
  },
  {
    title: "Mail",
    href: "/",
    icon: <MarkEmailUnreadTwoToneIcon size={16} />,
  },
  {
    title: "Chat",
    href: "/",
    icon: <MarkUnreadChatAltTwoToneIcon size={16} />,
  },
  {
    title: "Logout",
    href: "/",
    icon: <LogoutTwoToneIcon size={16} />,
  },
];

export const ordersData = [
  {
    OrderId: "1001",
    customer: {
      img: "https://actonvillespurs.org.za/wp-content/uploads/2023/10/456322.webp",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    items: 12000,
    price: "120.50",
    createdAt: {
      date: "July 01, 2023",
      time: "10:15 AM",
    },
    modifiedAt: {
      date: "July 03, 2023",
      time: "02:20 PM",
    },
    status: "completed",
  },
  {
    OrderId: "1002",
    customer: {
      img: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp",
      name: "Alice Smith",
      email: "alice.smith@example.com",
    },
    items: 5,
    price: "75.00",
    createdAt: {
      date: "July 05, 2023",
      time: "09:45 AM",
    },
    modifiedAt: {
      date: "July 06, 2023",
      time: "11:10 AM",
    },
    status: "refunded",
  },
  {
    OrderId: "1003",
    customer: {
      img: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp",
      name: "Michael Johnson",
      email: "michael.j@example.com",
    },
    items: 8,
    price: "200.99",
    createdAt: {
      date: "July 10, 2023",
      time: "01:00 PM",
    },
    modifiedAt: {
      date: "July 12, 2023",
      time: "04:30 PM",
    },
    status: "cancelled",
  },
  {
    OrderId: "1004",
    customer: {
      img: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-14.webp",
      name: "Emily Davis",
      email: "emily.davis@example.com",
    },
    items: 20,
    price: "350.00",
    createdAt: {
      date: "July 15, 2023",
      time: "03:20 PM",
    },
    modifiedAt: {
      date: "July 17, 2023",
      time: "06:00 PM",
    },
    status: "pending",
  },
  {
    OrderId: "1007",
    customer: {
      img: "https://actonvillespurs.org.za/wp-content/uploads/2023/10/456322.webp",
      name: "William Lee",
      email: "william.lee@example.com",
    },
    items: 2,
    price: "30.00",
    createdAt: {
      date: "July 25, 2023",
      time: "12:10 PM",
    },
    modifiedAt: {
      date: "July 26, 2023",
      time: "02:25 PM",
    },
    status: "cancelled",
  },
  {
    OrderId: "1006",
    customer: {
      img: "https://actonvillespurs.org.za/wp-content/uploads/2023/10/456322.webp",
      name: "John Doe",
      email: "john.doe@example.com",
    },
    items: 12000,
    price: "120.50",
    createdAt: {
      date: "July 01, 2023",
      time: "10:15 AM",
    },
    modifiedAt: {
      date: "July 03, 2023",
      time: "02:20 PM",
    },
    status: "completed",
  },
  {
    OrderId: "1007",
    customer: {
      img: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp",
      name: "Alice Smith",
      email: "alice.smith@example.com",
    },
    items: 5,
    price: "75.00",
    createdAt: {
      date: "July 05, 2023",
      time: "09:45 AM",
    },
    modifiedAt: {
      date: "July 06, 2023",
      time: "11:10 AM",
    },
    status: "refunded",
  },
  {
    OrderId: "1008",
    customer: {
      img: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-15.webp",
      name: "Michael Johnson",
      email: "michael.j@example.com",
    },
    items: 8,
    price: "200.99",
    createdAt: {
      date: "July 10, 2023",
      time: "01:00 PM",
    },
    modifiedAt: {
      date: "July 12, 2023",
      time: "04:30 PM",
    },
    status: "cancelled",
  },
  {
    OrderId: "1009",
    customer: {
      img: "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-14.webp",
      name: "Emily Davis",
      email: "emily.davis@example.com",
    },
    items: 20,
    price: "350.00",
    createdAt: {
      date: "July 15, 2023",
      time: "03:20 PM",
    },
    modifiedAt: {
      date: "July 17, 2023",
      time: "06:00 PM",
    },
    status: "pending",
  },
  {
    OrderId: "1010",
    customer: {
      img: "https://actonvillespurs.org.za/wp-content/uploads/2023/10/456322.webp",
      name: "William Lee",
      email: "william.lee@example.com",
    },
    items: 2,
    price: "30.00",
    createdAt: {
      date: "July 25, 2023",
      time: "12:10 PM",
    },
    modifiedAt: {
      date: "July 26, 2023",
      time: "02:25 PM",
    },
    status: "cancelled",
  },
];

export const productList = [
  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "30",
    price: "750.00",
    ratting: {
      ratting: 4.5,
      reviews: 140,
    },
    status: "publish",
  },
  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "39",
    price: "750.00",
    ratting: {
      ratting: 2.4,
      reviews: 24,
    },
    status: "pending",
  },

  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "20",
    price: "750.00",
    ratting: {
      ratting: 1.5,
      reviews: 14,
    },
    status: "publish",
  },
  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "50",
    price: "750.00",
    ratting: {
      ratting: 3.4,
      reviews: 57,
    },
    status: "pending",
  },
  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "30",
    price: "750.00",
    ratting: {
      ratting: 4.5,
      reviews: 140,
    },
    status: "publish",
  },
  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "39",
    price: "750.00",
    ratting: {
      ratting: 2.4,
      reviews: 24,
    },
    status: "pending",
  },

  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "20",
    price: "750.00",
    ratting: {
      ratting: 1.5,
      reviews: 14,
    },
    status: "publish",
  },
  {
    product: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
      title: "Licensed Concrete Cheese",
      cat: "Kids",
    },
    SKU: 86229,
    stock: "50",
    price: "750.00",
    ratting: {
      ratting: 3.4,
      reviews: 57,
    },
    status: "pending",
  },
];
export const categoryList = [
  {
    category: {
      img: "https://st.depositphotos.com/1007650/2337/i/450/depositphotos_23372790-stock-photo-household-scourer.jpg",
    },
    name: "shirt",
    color: "#fffff",
  },
];
