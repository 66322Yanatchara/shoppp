// ฟังก์ชันคำนวณราคารวม
export const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

