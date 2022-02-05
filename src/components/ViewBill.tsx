import React, { useEffect, useState } from "react";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import Bill from "./bill";

function ViewBill() {
	const { id }: any = useParams();
	const [bills, setBills] = useState<Array<any>>([]);
	useEffect(() => {
		const db = getFirestore();
		const q = query(collection(db, "bills"));
		getDocs(q).then((querySnapshot) => {
			setBills([]);
			querySnapshot.forEach((doc) => {
				setBills((prevState) => [...prevState, { id: doc.id, ...doc.data() }]);
				console.log(doc.id, " => ", doc.data());
			});
		});
	}, []);
	return (
		<div>
			{bills.map((bill, i) => {
				if (bill.id === id && !bill.isArchived) {
					return (
						<>
							<a
								href="upi://pay?pa=UPIID@oksbi&amp;pn=JOHN BRITAS AK &amp;cu=INR"
								className="upi-pay1"
							>
								Pay Now !
							</a>
							<Bill
								id={bill.id}
								date={bill.date}
								customer={{
									name: bill.name,
									address: bill.address,
									pincode: bill.pincode,
									phone: bill.phone,
								}}
								items={bill.items}
								totalAmount={bill.totalAmount}
								paidAmount={bill.paidAmount}
								balanceAmount={bill.balanceAmount}
							/>
						</>
					);
				} else {
					return <h1>Invalid Bill-ID or Bill is deleted.</h1>;
				}
			})}
		</div>
	);
}

export default ViewBill;
