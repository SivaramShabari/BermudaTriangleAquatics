import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import Bill from './bill';


function ViewAllBills() {
    const [bills, setBills] = useState([])
    useEffect(async () => {
        const db = getFirestore()
        const q = query(collection(db, "bills"));
        const querySnapshot = await getDocs(q);
        setBills([])
        querySnapshot.forEach((doc) => {
            setBills(prevState => [...prevState, { id: doc.id, ...doc.data() }])
            console.log(doc.id, " => ", doc.data());
        });
    }, [])
    return (
        <div>
            {
                bills.map((bill, index) => {
                    return (
                        <div key={index} className='card shadow-lg m-3'>
                            <h2>Bill id: {bill.id}</h2>
                            <Bill
                                key={index}
                                id={bill.id}
                                date={bill.date}
                                customer={{
                                    name: bill.name,
                                    address: bill.address,
                                    pincode: bill.pincode,
                                    phone: bill.phone
                                }}
                                items={bill.items}
                                grandTotal={bill.totalAmount}
                                paymentDetails={{
                                    type: "Cash",
                                    paid: bill.paidAmount,
                                    balance: bill.balanceAmount
                                }}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ViewAllBills
