import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Bill from './bill';


function ViewBill() {
    const { id } = useParams();
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
                    if (bill.id === id) {
                        return (
                            <Bill
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
                        )
                    }
                })
            }
        </div>
    )
}

export default ViewBill
