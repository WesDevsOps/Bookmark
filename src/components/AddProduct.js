
import React,{useState, useEffect} from 'react';


import '../components/css/product.css';
function AddProduct(props) {
const [product, setProduct] = useState('setProduct');
const item = [
    {
        id: '1',
        productname: 'Laptop',
        productimage: '../Photos/images(2).jpeg',
        productprice: 'R17 000.00',
        Bookmark: false
    },{
        id: '2',
        productname: 'Phone',
        productimage: '../Photos/images(2).jpeg',
        productprice: 'R5 000.00'
    },{
        id: '3',
        productname: 'IPhone Pro Max',
        productimage: '../Photos/images(2).jpeg',
        productprice: 'R15 000.00',
    },{
        id: '4',
        productname: 'Ipad',
        productimage: '../Photos/images(2).jpeg',
        productprice: 'R1 000.00',
    },{
        id: '5',
        productname: 'Ipad',
        productimage: '../Photos/images(2).jpeg',
        productprice: 'R12 000.00',  
    },{
        id: '6',
        productname: 'Ipad',
        productimage: '../Photos/images(2).jpeg',
        productprice: 'R13 000.00',
    }
    ]
        

    useEffect (()=>{
        const resut = localStorage.setItem('resut', JSON.stringify(item));
         localStorage.getItem('resut');
         let result = JSON.parse(localStorage.getItem('resut'))
            console.log(result)
    },[product])












 
    // const [productname, setProductname] = useState('productname');
    // const [productimage, setProductimage] = useState('');
    // const [productprice, setProductprice] = useState('');
    




    const add = ((items)=>{

        props.add(items)
    })

      return (
        <div>
            <div className="text">
                <h1>Bookmark</h1>
            </div>
                <div className="Bookmark">
                    {item.map((items,index)=>(
                
                    <div className="cont" key={index}>
                    <div className="product-name"><p>{items.productname}</p></div>
                    <div className="product-image"><img src={items.productimage} className="img1"/>

                    </div>
                    <div className="product-price"><p>{items.productprice}</p></div>
                    <div><button className="product-btn" type="submit" onClick={()=>add(items)}><p>Buy Now</p></button></div>
                </div>

                    ))}
            </div>

        </div>


        );

}
export default AddProduct;