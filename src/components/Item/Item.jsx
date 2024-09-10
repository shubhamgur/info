import { useState } from "react";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import style from './Item.module.css';

const Item=()=>{

    const [data,setData]=useState([])

useEffect(()=>{
fetch('https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Items').then((res)=>res.json())
.then((data)=>setData(data.data.items)).catch((err)=>console.log(err))
},[])


const ItemTable=data.map((ele,ind)=>
<tbody key={ind}>
<tr>
  <td>{ele.Supplier.supplierName}</td>
  <td>{ele.itemName}</td>
  <td>{ele.quantity}</td>
  <td>{ele.unitPrice}</td>
  <td>{ele.Supplier.cityName}</td>
  <td>{ele.Supplier.countryName}</td>
  <td>{ele.Supplier.email}</td>
  <td>{ele.Supplier.phoneNumber}</td>
</tr>
</tbody>
)


    return(
        <>
        <div className={style.mainBorder}>
        <h1 className={style.headind}>Table</h1>
<div style={{marginTop:"70px"}}>
<Table striped bordered hover >
      <thead>
        <tr>
          <th>Supplier</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>City</th>
          <th>Country</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {ItemTable}
    </Table>
    </div>

    </div>
        </>
    )
}

export default Item;