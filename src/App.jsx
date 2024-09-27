import { useState } from 'react'; // นำเข้า useState เพื่อใช้จัดการข้อมูลภายใน
import './index.css'; // นำเข้า CSS สำหรับจัดการสไตล์
import products from './data'; // นำเข้าข้อมูลสินค้า
import { calculateTotal } from './utils'; // ฟังก์ชันคำนวณราคารวม

function App() {
  // สร้าง state สำหรับเก็บสินค้าที่อยู่ในตะกร้า
  const [cartItems, setCartItems] = useState([]);

  // ฟังก์ชันสำหรับเพิ่มสินค้าลงในตะกร้า
  const addToCart = (product) => {
    const foundItem = cartItems.find(item => item.id === product.id);
    
    if (foundItem) {
      // ถ้าสินค้ามีในตะกร้าแล้ว, เพิ่มจำนวนสินค้า
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // ถ้ายังไม่มีในตะกร้า, เพิ่มสินค้านั้นพร้อมจำนวนเริ่มต้น 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // ฟังก์ชันสำหรับลบสินค้าจากตะกร้า
  const removeFromCart = (product) => {
    const foundItem = cartItems.find(item => item.id === product.id);

    if (foundItem.quantity > 1) {
      // ถ้าสินค้ามีจำนวนมากกว่า 1, ให้ลดจำนวนลง 1
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      // ถ้าสินค้ามีจำนวน 1 ให้ลบออกจากตะกร้า
      setCartItems(cartItems.filter(item => item.id !== product.id));
    }
  };

  return (
    <div className="container">
      <h1>ขายสัตว์</h1>

      {/* แสดงรายการสินค้า */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>ราคา: ฿{product.price}</p>
            <button onClick={() => addToCart(product)}>
              ใส่ตะกร้า
            </button>
          </div>
        ))}
      </div>

      {/* แสดงรายการสินค้าที่อยู่ในตะกร้า */}
      <div className="cart">
        <h2>ตะกร้าของฉัน</h2>
        {cartItems.length === 0 ? (
          <p>ตะกร้าว่างเปล่า</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name} (฿{item.price}) - จำนวน: {item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item)}>-</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ส่วนแสดงยอดรวมและชำระเงิน */}
      <div className="checkout">
        <h2>ยอดรวม</h2>
        <p>ราคารวมสินค้า: ฿{calculateTotal(cartItems)}</p>
        <p>ค่าจัดส่ง: ฿100</p>
        <p>ราคารวมทั้งหมด: ฿{calculateTotal(cartItems) + 100}</p>
        <button>ชำระเงิน</button>
      </div>
    </div>
  );
}

export default App;
