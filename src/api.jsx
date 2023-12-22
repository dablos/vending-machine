const productsData = [
  { id: 1, name: "Small Coffee", price: 1.5, inventory: 10 },
  { id: 2, name: "Large Coffee", price: 2.0, inventory: 5 },
];

export const getProducts = () => Promise.resolve(productsData);
