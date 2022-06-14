// import logo from './logo.svg';
import './add.css';
import AddList from './components/AddList.js';
import AddProduct from './components/AddProduct.js';
import AddUser from './components/AddUser.js';
import Userdisplay from './components/Userdisplay.js';
import ProductDisplay from './components/ProductDisplay.js';
import React, {useState} from 'react';

function App() {
  const [username, setUsername] = useState ([]);



  const [product, setProduct] = useState ([

        



    ]);

  const AddUsername = ((username)=>{
    setUsername((user)=>[...user, {
      username:username,
    }])

  })
   const AddProducts = ({product, productname, productimage, productprice})=>{
    console.log(product, productname, productimage, productprice)
    setProduct((item)=>[...item,{
      product:product,
      productname:productname,
      productimage:productimage,
      productprice:productprice,
    }])
  }


  return (
    <div className="container">
    <div className="list-style">
    <AddUser add={AddUsername} />
        <div className="display1">
          <div className="dis1">

          <Userdisplay list={username} />
        </div>
          
          <div className="dis">

          <ProductDisplay list={product} />
        </div>
        </div>

    </div>
    
    <div className="product-style">
    <AddProduct add={AddProducts} />
    </div>
    </div>
  );
}

export default App;
