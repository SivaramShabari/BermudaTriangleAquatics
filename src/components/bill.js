import React from 'react'
import logo from '../images/logo.jpg'
import sign from '../images/sign.png'
function Bill(props) {
    const { id, date, grandTotal, dueDate, paymentDetails, customer, items } = props
    return (
        <div className="container mt-4">
            <div className="rw">
                <div className="col-12">
                    <div className="card">
                        <div className="col-12">
                            <div className='row'>
                                <div className="mt-2 row col-xl-6 col-lg-7 col-md-8 col-sm-12 col-xs-10">
                                    <img src={logo} style={{ height: "150px" }} />
                                    <div className='m-2' style={{ fontSize: "14px" }}>
                                        <div className="mt-3 mb-1 font-weight-bold ">
                                            Bermuda Triangle Aquatics
                                        </div>
                                        <div className='my-1'>
                                            6379828754
                                        </div>
                                        <div className='my-1 link'>
                                            <a>
                                                bermudatriangleaqua@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 col-xl-6 text-lg-right text-xs-left text-left col-lg-5 col-md-4 col-sm-12 col-xs-12">
                                    <p className="font-weight-bold mb-1">Bill ID: {id}</p>
                                    <p className="text-muted">{date}</p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="row pt-2 px-4 ">
                            <div className="mt-2 col-md-6">
                                <p className="font-weight-bold mb-1">Bill To</p>
                                <p className="mb-1">{customer.name}</p>
                                <p className="mb-1">{customer.address}</p>
                                <p className="mb-1">{customer.pincode}</p>
                                <p className="mb-1">{customer.phone}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="mx-3 row px-1 py-5">
                            <div className="col-md-12 table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="col-6 border-0 text-uppercase small font-weight-bold">Item | Description</th>
                                            <th className="border-0 text-uppercase small font-weight-bold">Unit Cost ₹</th>
                                            <th className="border-0 text-uppercase small font-weight-bold">Quantity </th>
                                            <th className="border-0 text-uppercase small font-weight-bold">Total ₹</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item, i) => {
                                            return (<tr>
                                                <td className='col-6'>{item.name} | {item.description}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price * item.quantity}</td>
                                            </tr>)
                                        })
                                        }<tr>
                                            <td className='col-6'></td>
                                            <td></td>
                                            <td style={{ fontSize: "17px", fontWeight: "bold" }}>Total:</td>
                                            <td className='tetx-center' style={{ fontSize: "20px", fontWeight: "bold" }}>₹{grandTotal}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row col-12 mb-2 ml-1">
                            <div className="mt-2 col-6 m-4">
                                <p className="font-weight-bold mb-1">Payment Details</p>
                                <p className="mb-1"><span className="text-muted">Payment Type: </span>{paymentDetails.type} </p>
                                <p className="mb-1"><span className="text-muted">Paid: </span>{paymentDetails.paid}₹</p>
                                <p className="mb-1"><span className="text-muted">Balance: </span>{paymentDetails.balance}₹</p>
                            </div>
                            <div className="col-5 py-3 px-2 text-right">
                                <img src={sign} alt='sanjay sign' />
                                <div className="mb-2">SIGNATURE</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill
