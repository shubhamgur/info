import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './AddItem.module.css'
import { Button } from "react-bootstrap";

const AddItem=()=>{

const [item,setItem]=useState(false)
const [supplier,setSupplier]=useState(false)
const [itemName,setItemName]=useState('')
const [quantity,setQuantity]=useState('')
const [price,setPrice]=useState('')
const [supplierName,setSupplierName]=useState('')
const [email,setEmail]=useState('')
const [phoneNumber,setPhonenumber]=useState('')
const [error,setError]=useState('')
const [statee,setStatee]=useState('')
const [city,setCity]=useState('')
const [pin,setPin]=useState('')

const time=()=>{
    setTimeout(()=>{
        setError('')
    },3000
    )
}


const bclick=()=>{
    if(itemName.length>225){
        setError('item Name length should be max 225')
        time();
        return;
    }
    if(quantity>10){
        setError('quantity should be under 10')
        time();
        return;
    }
    if(email!= /[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/){
        setError('invalid email')
        time();
        return;
    }
    if(phoneNumber.length!=10){
        setError('invalid phone number')
        time();
        return;
    }

    const objItem={
        itemName:itemName,
 quantity:quantity,
 unitPrice:price,
 currency:"$",
 submissionDate:"2021-07-21"
    }

const objSupplier={
    supplierName:supplierName,
 companyName:"Apple",
 email:email,
 phoneCode:"+91",
 phoneNumber:phoneNumber,
 countryId:"1",
 stateId:statee,
 cityId:city
}

const obj={
    itemDetails:objItem,
    supplier:objSupplier
}

fetch('https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers',
{method:"POST",body:JSON.stringify(obj)}).then((res)=>res.json()).then((data)=>console.log("succesfull"))
.catch((err)=>console.log(err))


}


    return(
        <>

<div>
        <input type='checkbox' onClick={()=>setItem(!item)}/>
       <strong>Item</strong>
       <input type='checkbox' onClick={()=>setSupplier(!supplier)}/>
       <strong>Supplier</strong>
       </div>
       
       {item && (
        <div className={style.itemData}>
   <Row>
        <Col><strong> Item Name</strong></Col>
        <Col><input type='text' onChange={(e)=>{setItemName(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>Quantity </strong></Col>
        <Col><input type='number' onChange={(e)=>{setQuantity(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong> Unit Price ($) </strong></Col>
        <Col><input type='number' onChange={(e)=>{setPrice(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>Date of Submission</strong></Col>
        <Col><input type='date'/></Col>
      </Row>
      </div>
       )}


{supplier && (
    <div className={style.itemData}>
   <Row>
        <Col><strong> Supplier Name</strong></Col>
        <Col><input type='text' onChange={(e)=>{setSupplierName(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>Country </strong></Col>
        <Col><input type='number' onChange={(e)=>{setQuantity(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong> Email Address </strong></Col>
        <Col><input type='text' onChange={(e)=>{setEmail(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>Phone Number</strong></Col>
        <Col><input type='number' onChange={(e)=>{setPhonenumber(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>State</strong></Col>
        <Col><input type='text' onChange={(e)=>{setStatee(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>City</strong></Col>
        <Col><input type='text' onChange={(e)=>{setCity(e.target.value)}}/></Col>
      </Row>
      <Row className={style.row}>
        <Col><strong>Pin Number</strong></Col>
        <Col><input type='number' onChange={(e)=>{setPin(e.target.value)}}/></Col>
      </Row>
      </div>
)}
      


<h5 style={{color:"red",marginLeft:"30px",marginTop:"20px"}}> {error}</h5>
      <Button className={style.button} disabled={!supplier || !item} onClick={bclick} variant="success">Submit</Button>




</>
    )
}

export default AddItem;