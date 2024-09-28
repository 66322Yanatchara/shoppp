// ข้อมูลสินค้า
const products = [
  { id: 1, name: 'หมีพู', price: 300, description: 'เอาไว้นอนกอดแก้เหงาสำหรับคนไม่มีแฟน', image: 'https://p2.bahamut.com.tw/HOME/creationCover/75/0002665575_B.JPG' },
  { id: 2, name: 'เป็ด', price: 200, description: 'เป็ดว่ายน้ำจังหวะสามซ่า', image: 'https://th.bing.com/th/id/OIP.2LZJ6LpU8pwTiNR8O4k2wgAAAA?rs=1&pid=ImgDetMain' },
  { id: 3, name: 'ปลาฉลาม', price: 300, description: 'ปลาฉลามกินคนแต่ไม่กินเธอ', image: 'https://th.bing.com/th/id/OIP.5FbfkDKBSQ-rHkVrBW8ddQHaE7?rs=1&pid=ImgDetMain' },
  { id: 4, name: 'ไก่', price: 300, description: 'ไก่ร้องกุ๊ก ๆ ', image: 'https://www.chamraktrat.go.th/index/add_file/1rLOMUZMon41540.jpg' },
  { id: 5, name: 'หมู', price: 200, description: 'หมูร้องอุ๊ด ๆ', image: 'https://th.bing.com/th/id/OIP.NpyO_LQ8bxb_1OpGtB8XEAHaHe?rs=1&pid=ImgDetMain' },
  { id: 6, name: 'หมา', price: 300, description: 'หมาร้องโห่ง ๆ', image: 'https://inwfile.com/s-cp/dirxla.jpg' },
  { id: 7, name: 'แมว', price: 300, description: 'แมวร้องเมี๋ยว ๆ ', image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/9970/live/9e4ab180-fd11-11ed-b2aa-9935735a579c.png' },
  { id: 8, name: 'ปลาหมึก', price: 200, description: 'ปลาหมึกชอบพ้นน้ำสีดำ', image: 'https://yuifresh.com/cdn/shop/products/Yui.png?v=1675511169&width=1426' },
  { id: 9, name: 'กุ้ง', price: 300, description: 'กุ้งชอบดีด', image: 'https://png.pngtree.com/png-vector/20220110/ourlarge/pngtree-funny-red-shrimp-cartoon-isolated-funny-prepared-vector-png-image_7874198.png' },
  { id: 10, name: 'เสือ', price: 400, description: 'เสือกินคน', image: 'https://th.bing.com/th/id/OIP.3cuhYX6bke7ARl-EerRkqgHaFE?rs=1&pid=ImgDetMain' },
  { id: 11, name: 'ควาย', price: 500, description: 'ถ้าเป็นควายให้กินหญ้า', image: 'https://newlifeanimals.or.th/wp-content/uploads/2023/04/340373564_237898185443418_7189685860530374882_n.jpg' },
  { id: 12, name: 'งู', price: 300, description: 'gucci belt งูมันเลื่อนเข้ามาอยู่ที่เอว', image: 'https://png.pngtree.com/png-clipart/20230323/ourlarge/pngtree-snake-cartoon-illustration-png-image_6659213.png' },
  { id: 13, name: 'จระเข้', price: 800, description: 'จระเข้ย่างอร่อยยย', image: 'https://www.samunpri.com/wp-content/uploads/2006/12/%E0%B8%88%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B9%89.jpg' },
  { id: 14, name: 'สิงโต', price: 200, description: 'สิงโตหัวใหญ่', image: 'https://th.bing.com/th/id/OIP.SSX0PEg2ZaC7-2ObFp2muQAAAA?rs=1&pid=ImgDetMain' },
  { id: 15, name: 'ฮิปโป', price: 600, description: 'ฮิปโปอ้วนตุบ', image: 'https://th.bing.com/th/id/OIP.LiFUNxo11_XlQ4yDZdQ5NQHaE8?w=800&h=534&rs=1&pid=ImgDetMain' },
  { id: 16, name: 'คาปิปาร่า', price: 700, description: 'มีใครขี้เกียจแบบผมบ้าง', image: 'https://th.bing.com/th/id/R.f5c181832691fb4c9b20b0b415836bca?rik=6Ro57D60jAthXQ&riu=http%3a%2f%2fanimal-hp.com%2fwp-content%2fuploads%2f2022%2f07%2f%e0%b8%ab%e0%b8%99%e0%b8%b92.jpg&ehk=FrKtD6q6ynwjX1tuZC2IQh%2bo1rsL%2fo8vUCypdaJMSdE%3d&risl=&pid=ImgRaw&r=0' },
];

export default products;
