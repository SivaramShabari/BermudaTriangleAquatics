import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import { collection, addDoc, getFirestore } from "firebase/firestore";
function Admin() {
    const [isAdmin, setIsAdmin] = useState(false)
    const [billDetails, setBillDetails] = useState({
        name: '',
        address: '',
        pincode: '',
        phone: '',
        email: '',
        paidAmount: 0,
        balanceAmount: 0,
        totalAmount: 0,
        date: '',
        items: [],
        dueDate: '',
        discount: '',
    })
    const [items, setItems] = useState([{
        name: "",
        description: "",
        price: 0,
        quantity: 1,
        image: "",
    }])
    const [grandTotal, setGrandTotal] = useState(0)
    useEffect(() => {
        setGrandTotal(items.reduce((acc, item) => acc + item.price * item.quantity, 0))
        return () => {
        }
    }, [items])
    useEffect(() => {
        setBillDetails({ ...billDetails, items })
    }, [items])
    const addItem = e => {
        e.preventDefault()
        setItems([...items, {
            name: "",
            description: "",
            price: 0,
            quantity: 1,
            image: "",
        }])
    }
    const createBill = e => {
        e.preventDefault()
        setBillDetails({ ...billDetails, items: items })
        console.log(billDetails)
        if (billDetails.name && billDetails.address && billDetails.pincode && billDetails.phone) {
            setIsAdmin(true)
            const db = getFirestore()
            addDoc(collection(db, "bills"), billDetails).then((doc) => {
                console.log("Bill added with id :", doc.id)
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert("Please fill all the details")
        }
    }
    return (
        <div>
            <div className="card shadow-lg pt-4 m-5">
                <form className="well form-horizontal" action=" " method="post" id="contact_form">
                    <fieldset>
                        <div className='m-1 row'>
                            <legend>
                                <center>
                                    <h2>
                                        <b>BILLING FORM</b>
                                    </h2>
                                    <img style={{ height: "150px", marginBottom: "30px" }} src={logo} alt="logo" />
                                </center>
                            </legend>
                            <br />
                            <div className='col-6'>
                                <div className="form-group">
                                    <label className="col-md-8 control-label">Receiver Name</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input
                                                name="first_name"
                                                placeholder="Name"
                                                className="form-control"
                                                type="text"
                                                onChange={e => setBillDetails({ ...billDetails, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-8 control-label" >Receiver Address</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input
                                                name="last_name"
                                                placeholder="Address"
                                                className="form-control"
                                                type="text"
                                                onChange={e => setBillDetails({ ...billDetails, address: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-8 control-label">Pincode</label>
                                    <div className="col-md-8 selectContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                            <input
                                                name="last_name"
                                                placeholder="Pincode"
                                                className="form-control"
                                                type="text"
                                                onChange={e => setBillDetails({ ...billDetails, pincode: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-8 control-label">Receiver Phone</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input
                                                name="user_name"
                                                placeholder="Phone number"
                                                className="form-control"
                                                type="tel"
                                                onChange={e => setBillDetails({ ...billDetails, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="form-group">
                                    <label className="col-md-8 control-label" >Billing Date</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input
                                                name="confirm_password"
                                                className="form-control"
                                                type="date"
                                                onChange={e => setBillDetails({ ...billDetails, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-8 control-label" >Bill Due Date</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input
                                                name="user_password"
                                                placeholder=""
                                                className="form-control"
                                                type="date"
                                                onChange={e => setBillDetails({ ...billDetails, dueDate: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-8 control-label">Paid Amount</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input
                                                name="email"
                                                placeholder="Paid Amount ₹"
                                                className="form-control"
                                                type="text"
                                                onChange={e => setBillDetails({ ...billDetails, paidAmount: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label className="col-md-8 control-label">Balance Amount</label>
                                    <div className="col-md-8 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input
                                                name="contact_no"
                                                placeholder=""
                                                className="form-control"
                                                type="text"
                                                value={grandTotal - billDetails.paidAmount}
                                                onChange={e => setBillDetails({ ...billDetails, balanceAmount: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {
                            items.map((item, i) => {

                            })
                        }
                        <div className="mx-1 row px-1 py-5">
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="col-3 border-0 text-uppercase small font-weight-bold">Item</th>
                                            <th className="col-4 border-0 text-uppercase small font-weight-bold">Description</th>
                                            <th className="border-0 text-uppercase small font-weight-bold">Unit Cost ₹</th>
                                            <th className="border-0 text-uppercase small font-weight-bold">Quantity </th>
                                            <th className="border-0 text-uppercase small font-weight-bold">Total ₹</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, i) => {
                                            return (<tr key={i}>
                                                <td className='col-3'>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Item name"
                                                        value={item.name}
                                                        onChange={(e) => {
                                                            let x = [...items]
                                                            x[i].name = e.target.value
                                                            setItems(x)
                                                        }}
                                                    />
                                                </td>
                                                <td className='col-3'>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Item description"
                                                        value={item.description}
                                                        onChange={(e) => {
                                                            let x = [...items]
                                                            x[i].description = e.target.value
                                                            setItems(x)
                                                        }}
                                                    />
                                                </td>
                                                <td className='col-2'>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Cost per item"
                                                        value={item.price}
                                                        onChange={(e) => {
                                                            let x = [...items]
                                                            x[i].price = e.target.value
                                                            setItems(x)
                                                        }}
                                                    />
                                                </td>
                                                <td className='col-2'>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Quantity"
                                                        value={item.quantity}
                                                        onChange={(e) => {
                                                            let x = [...items]
                                                            x[i].quantity = e.target.value
                                                            setItems(x)
                                                        }}
                                                    />
                                                </td>
                                                <td className='col-2 font-weight-bold'>
                                                    {parseFloat(item.price * item.quantity).toFixed(2)}
                                                </td>
                                            </tr>)
                                        })

                                        }
                                        <tr>
                                            <td>
                                                <button className="btn btn-primary" onClick={e => addItem(e)}>Add Item</button>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: 'none' }} className=''></td>
                                            <td style={{ border: 'none' }}></td>
                                            <td style={{ border: 'none' }}></td>
                                            <td style={{ fontSize: "17px", fontWeight: "bold" }}>Total:</td>
                                            <td className='tetx-center' style={{ fontSize: "20px", fontWeight: "bold" }}>₹{parseFloat(grandTotal).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: 'none' }} className=''></td>
                                            <td style={{ border: 'none' }}></td>
                                            <td style={{ border: 'none' }}></td>
                                            <td style={{ fontSize: "17px", fontWeight: "bold" }}>Advance payment:</td>
                                            <td className='tetx-center' style={{ fontSize: "20px", fontWeight: "bold" }}>₹{parseFloat(billDetails.paidAmount).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: 'none' }} className=''></td>
                                            <td style={{ border: 'none' }}></td>
                                            <td style={{ border: 'none' }}></td>
                                            <td style={{ fontSize: "17px", fontWeight: "bold" }}>Balace:</td>
                                            <td className='tetx-center' style={{ fontSize: "20px", fontWeight: "bold" }}>₹{parseFloat(grandTotal - billDetails.paidAmount).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {false && <div
                            className="alert alert-success"
                            role="alert"
                            id="success_message"> Success!.
                        </div>}
                        <div className="form-group">
                            <label className="col-md-8 control-label"></label>
                            <div className="col-md-8"><br />
                                <button type="submit"
                                    className="btn btn-success"
                                    onClick={e => createBill(e)}>
                                    Create Bill </button>
                            </div>
                        </div>


                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Admin
