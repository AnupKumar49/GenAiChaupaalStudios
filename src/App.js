import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import chaupaalshirt from './Assets/chaupaalshirt.png'; // Import your image files
import chaupaalmug from './Assets/chaupaalmug.png'; // Import your image files
import chaupaalwatch from './Assets/chaupaalwatch.png'; // Import your image files
import chaupaalheadphone from './Assets/chaupaalheadphone.png';
import chaupaalwallet from  './Assets/chaupaalwallet.png';// Import your image files
import Footer from './Components/Footer/footer';
import {  Routes, Route } from 'react-router-dom';
import ProductDescriptionPage from './pages/productDescription/productDescriptionPage';
import CartPage from './pages/cart/cartPage';


function App() {
  const breadcrumbItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Products', link: '/products' },
    { id: 3, label: 'T-Shirts', link: '/products/t-shirts' },
  ];
  const description1 = `Our Studio-Branded Custom T-Shirt collection offers a unique blend of creativity and comfort. This exclusive collection empowers individuals to express their unique styles, whether they are designers, artists, or studio enthusiasts. These customizable T-shirts serve as canvases for self-expression, allowing wearers to craft their own designs, share their artistry, or showcase studio pride. The customization process is straightforward, with various styles, graphics, fonts, and colors to choose from. Premium materials and printing techniques ensure quality and durability. Beyond personal expression, this collection fosters a sense of community, uniting those who appreciate the fusion of art and fashion. It's a celebration of individual identity and the idea that fashion is a reflection of one's self.`;
  const description2 = `<p><strong>1. Custom Graphics:</strong> Unleash your creativity by choosing from a wide selection of studio-themed graphics. Want to make it truly yours? Upload your studio's logo or your own design for a personalized touch.</p>
  <br />
  <p><strong>2. Color Options:</strong> Make a statement by selecting your preferred base T-shirt color. Match it with your studio's branding or opt for a bold contrast. Customize the graphic colors to your liking, creating a T-shirt that's uniquely yours.</p>
  <br />
  <p><strong>3. Premium Quality:</strong> We believe comfort is key. Our T-shirts are crafted from premium-quality, breathable fabric to keep you feeling great all day long. You'll love the softness against your skin and the durability that lasts through countless wears and washes.</p>
  `;

  
const similarProducts = [
  {
    name: 'Chaupaal Tshirt',
    image: chaupaalshirt,
    price: 19.99,
  },
  
  {
    name: 'Chaupaal Mugs',
    image: chaupaalmug,
    price: 29.99,
  },
  {
    name: 'Chaupaal Watch',
    image: chaupaalwatch,
    price: 39.99,
  },
  {
    name: 'Chaupaal Headphone',
    image: chaupaalheadphone,
    price: 49.99,
  },
  {
    name: 'Chaupaal Wallet',
    image: chaupaalwallet,
    price: 49.99,
  },
 
  // Add more similar products as needed
];

  return (
    <div className="App">
      
  
      
      <Routes>
        <Route path="/" element={<ProductDescriptionPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    
      <Footer />
     
    </div>
  );
}

export default App;
