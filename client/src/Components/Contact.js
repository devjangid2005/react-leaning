import React, { useState } from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [inputvalue, setinputvalue] = useState({
    fname:"",
    lname:"",
    email:"",
    moblie:"",
    message:""
  })
  console.log(inputvalue);
  
  const getvalue = (e)=>{
    const{name, value} = e.target;
    setinputvalue(()=>{
      return {
        ...inputvalue,
        [name]:value
      }
    })
    
  }
  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">Contact Us</h2>
        <div className="container">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="fname" onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lname" onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Moblie</Form.Label>
              <Form.Control type="text" name="moblie" onChange={getvalue} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" className="col-lg-6" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
