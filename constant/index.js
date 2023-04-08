import { table1, table2, table3, table4, almari1, almari2, almari3, almari4, almari5, almari6, chair1, chair2, chair3, chair4, chair5, khat1, khat2, khat3, khat4, khat5, khat6, sofa1, sofa2, sofa3, sofa4, sofa5, chair6 } from '../assets'

const products = [
    {
        id: 1,
        category: 'almirah',
        image: almari1,
        name: 'Almirah 1',
        short_dis: 'Adjustable Shelf almirah.',
        long_dis: 'Comfortable, Stylish & Elegant almirah for your home. There are three different color: blue, black and chocolate.',
        price: 22000
    },
    {
        id: 2,
        category: 'almirah',
        image: almari2,
        name: 'Almirah 2',
        short_dis: 'Beautiful big almirah.',
        long_dis: 'Comfortable, Stylish & Elegant almirah for your home. There are three different color: blue, black and chocolate.',
        price: 20000
    },
    {
        id: 3,
        category: 'almirah',
        image: almari3,
        name: 'Almirah 3',
        short_dis: 'Add sensible style to your home.',
        long_dis: 'Comfortable, Stylish & Elegant almirah for your home. There are three different color: blue, black and chocolate.',
        price: 25000
    },
    {
        id: 4,
        category: 'almirah',
        image: almari4,
        name: 'Almirah 4',
        short_dis: 'Danish Design almirah.',
        long_dis: 'Comfortable, Stylish & Elegant almirah for your home. There are three different color: blue, black and chocolate.',
        price: 22000
    },
    {
        id: 5,
        category: 'almirah',
        image: almari5,
        name: 'Almirah 5',
        short_dis: 'Cupboard & Steel Almirah.',
        long_dis: 'Comfortable, Stylish & Elegant almirah for your home. There are three different color: blue, black and chocolate.',
        price: 13000
    },
    {
        id: 6,
        category: 'almirah',
        image: almari6,
        name: 'Almirah 6',
        short_dis: 'Household Stylish Almirah.',
        long_dis: 'Comfortable, Stylish & Elegant almirah for your home. There are three different color: blue, black and chocolate.',
        price: 18000
    },
    {
        id: 7,
        category: 'chair',
        image: chair1,
        name: 'Chair 1',
        short_dis: 'Cupboard & Steel Chair.',
        long_dis: 'Comfortable, Stylish & Elegant Chair for your home. There are three different color: blue, black and chocolate.',
        price: 11000
    },
    {
        id: 8,
        category: 'chair',
        image: chair2,
        name: 'Chair 2',
        short_dis: 'Household Stylish Chair.',
        long_dis: 'Comfortable, Stylish & Elegant Chair for your home. There are three different color: blue, black and chocolate.',
        price: 2700
    },
    {
        id: 9,
        category: 'chair',
        image: chair3,
        name: 'Chair 3',
        short_dis: 'Danish Design Chair.',
        long_dis: 'Comfortable, Stylish & Elegant Chair for your home. There are three different color: blue, black and chocolate.',
        price: 3500
    },
    {
        id: 10,
        category: 'chair',
        image: chair4,
        name: 'Chair 4',
        short_dis: 'Household Stylish Chair.',
        long_dis: 'Comfortable, Stylish & Elegant Chair for your home. There are three different color: blue, black and chocolate.',
        price: 4000
    },
    {
        id: 11,
        category: 'chair',
        image: chair5,
        name: 'Chair 5',
        short_dis: 'Cupboard & Steel Chair.',
        long_dis: 'Comfortable, Stylish & Elegant Chair for your home. There are three different color: blue, black and chocolate.',
        price: 2500
    },
    {
        id: 12,
        category: 'chair',
        image: chair6,
        name: 'Chair 6',
        short_dis: 'Household Stylish Chair.',
        long_dis: 'Comfortable, Stylish & Elegant Chair for your home. There are three different color: blue, black and chocolate.',
        price: 1900
    },
    {
        id: 13,
        category: 'khat',
        image: khat1,
        name: 'Khat 1',
        short_dis: 'Cupboard & Steel Khat.',
        long_dis: 'Comfortable, Stylish & Elegant Khat for your home. There are three different color: blue, black and chocolate.',
        price: 16000
    },
    {
        id: 14, category: 'khat',
        image: khat2,
        name: 'Khat 2',
        short_dis: 'Household Stylish Khat.',
        long_dis: 'Comfortable, Stylish & Elegant Khat for your home. There are three different color: blue, black and chocolate.',
        price: 6000
    },
    {
        id: 15,
        category: 'khat',
        image: khat3,
        name: 'Khat 3',
        short_dis: 'Danish Design Khat.',
        long_dis: 'Comfortable, Stylish & Elegant Khat for your home. There are three different color: blue, black and chocolate.',
        price: 12000
    },
    {
        id: 16,
        category: 'khat',
        image: khat4,
        name: 'Khat 4',
        short_dis: 'Cupboard & Steel Khat.',
        long_dis: 'Comfortable, Stylish & Elegant Khat for your home. There are three different color: blue, black and chocolate.',
        price: 9000
    },
    {
        id: 17,
        category: 'khat',
        image: khat5,
        name: 'Khat 5',
        short_dis: 'Household Stylish Khat.',
        long_dis: 'Comfortable, Stylish & Elegant Khat for your home. There are three different color: blue, black and chocolate.',
        price: 5500
    },
    {
        id: 18,
        category: 'khat',
        image: khat6,
        name: 'Khat 6',
        short_dis: 'Cupboard & Steel Khat.',
        long_dis: 'Comfortable, Stylish & Elegant Khat for your home. There are three different color: blue, black and chocolate.',
        price: 7000
    },
    {
        id: 19,
        category: 'sofa',
        image: sofa1,
        name: 'Sofa 1',
        short_dis: 'Household Stylish Sofa.',
        long_dis: 'Comfortable, Stylish & Elegant Sofa for your home. There are three different color: blue, black and chocolate.',
        price: 13200
    },
    {
        id: 20, category: 'sofa',
        image: sofa2,
        name: 'Sofa 2',
        short_dis: 'Household Stylish Sofa.',
        long_dis: 'Comfortable, Stylish & Elegant Sofa for your home. There are three different color: blue, black and chocolate.',
        price: 22000
    },
    {
        id: 21, category: 'sofa',
        image: sofa3,
        name: 'Sofa 3',
        short_dis: 'Danish Design Sofa.',
        long_dis: 'Comfortable, Stylish & Elegant Sofa for your home. There are three different color: blue, black and chocolate.',
        price: 17000
    },
    {
        id: 22, category: 'sofa',
        image: sofa4,
        name: 'Sofa 4',
        short_dis: 'Household Stylish Sofa.',
        long_dis: 'Comfortable, Stylish & Elegant Sofa for your home. There are three different color: blue, black and chocolate.',
        price: 13500
    },
    {
        id: 23, category: 'sofa',
        image: sofa5,
        name: 'Sofa 5',
        short_dis: 'Cupboard & Steel Sofa.',
        long_dis: 'Comfortable, Stylish & Elegant Sofa for your home. There are three different color: blue, black and chocolate.',
        price: 12000
    },
    {
        id: 24, category: 'table',
        image: table1,
        name: 'Table 1',
        short_dis: 'Household Stylish Table.',
        long_dis: 'Comfortable, Stylish & Elegant Table for your home. There are three different color: blue, black and chocolate.',
        price: 4800
    },
    {
        id: 25, category: 'table',
        image: table2,
        name: 'Table 2',
        short_dis: 'Cupboard & Steel Table.',
        long_dis: 'Comfortable, Stylish & Elegant Table for your home. There are three different color: blue, black and chocolate.',
        price: 3500
    },
    {
        id: 26, category: 'table',
        image: table3,
        name: 'Table 3',
        short_dis: 'Danish Design Table.',
        long_dis: 'Comfortable, Stylish & Elegant Table for your home. There are three different color: blue, black and chocolate.',
        price: 4000
    },
    {
        id: 27,
        category: 'table',
        image: table4,
        name: 'Table 4',
        short_dis: 'Cupboard & Steel Table.',
        long_dis: 'Comfortable, Stylish & Elegant Table for your home. There are three different color: blue, black and chocolate.',
        price: 2200
    },

];

const navLinks = [
    {
        id: "/dashboard",
        title: "Dashboard",
    },
    {
        id: "/cart",
        title: "Cart",
    },
];

const addProductToLocalStorage = (id, quantity) => {
    const item = {
        id: parseInt(id),
        quantity: parseInt(quantity)
    };
    const storage = localStorage.getItem('product');
    const added_all_product = JSON.parse(storage);
    if (added_all_product) {
        const selected_product = added_all_product.find(p => p?.id == id);
        if (selected_product) {
            const index = added_all_product.indexOf(selected_product);
            const edited_item = {
                id: parseInt(selected_product.id),
                quantity: parseInt(selected_product.quantity) + parseInt(quantity)
            };
            if (edited_item.quantity === 0) {
                added_all_product.splice(index, 1);
            }
            else { added_all_product[index] = edited_item; }
            localStorage.setItem('product', JSON.stringify(added_all_product))
        }
        else {
            added_all_product.push(item)
            localStorage.setItem('product', JSON.stringify(added_all_product))
        }
    }
    else {
        localStorage.setItem('product', JSON.stringify([item]))
    }
};

const backend = 'https://furniture-backend-tau.vercel.app';
// const backend = 'http://localhost:5000';

export { products, navLinks, addProductToLocalStorage, backend }