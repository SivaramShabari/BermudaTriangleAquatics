import React, { useEffect, useState } from "react";
import {
	collection,
	query,
	where,
	getDocs,
	getFirestore,
	deleteDoc,
	doc,
	setDoc,
	QuerySnapshot,
} from "firebase/firestore";
import Bill from "./bill";

function ViewAllBills() {
	const [bills, setBills] = useState<Array<any>>([]);
	const [change, setChange] = useState(false);
	useEffect(() => {
		const db = getFirestore();
		const q = query(collection(db, "bills"));
		getDocs(q).then((querySnapshot) => {
			setBills([]);
			querySnapshot.forEach((doc) => {
				setBills((prevState) => [
					...prevState,
					{ id: doc.id, ...doc.data(), isVisible: false },
				]);
				console.log(doc.id, " => ", doc.data());
			});
		});
	}, [change]);
	const deleteBill = (id: any) => {
		const db = getFirestore();
		deleteDoc(doc(db, "bills", id)).then(() => alert("Bill deleted"));
		setChange(!change);
	};
	const archiveBill = (id: any, state: any) => {
		const db = getFirestore();
		setDoc(doc(db, "bills", id), { isArchived: state }, { merge: true }).then(
			() => {
				state && alert("Bill archived");
				!state && alert("Bill unarchived");
				setChange(!change);
			}
		);
	};
	return (
		<div className="m-3">
			{bills.map((bill, index) => {
				return (
					<div key={index} className="col-12">
						<div className="ml-3 mb-3">
							<div className="text-xl">
								Bill to: <span className="text-primary">{bill.name}</span>
							</div>
							<div className="text-xl mb-2">
								Bill date: <span className="text-primary">{bill.date}</span>
								<h5> Bill id: {bill.id}</h5>
							</div>
							{!bill.isVisible && (
								<button
									className="btn btn-primary mr-3"
									onClick={() => {
										setBills((prevState) =>
											prevState.map((bill) => {
												if (bill.id === bill.id) {
													bills[index].isVisible = true;
												}
												return bill;
											})
										);
									}}
								>
									View Bill
								</button>
							)}
							{bill.isVisible && (
								<button
									className="btn btn-primary mr-3"
									onClick={() => {
										setBills((prevState) =>
											prevState.map((bill) => {
												if (bill.id === bill.id) {
													bills[index].isVisible = false;
												}
												return bill;
											})
										);
									}}
								>
									Hide Bill
								</button>
							)}
							{bill.isArchived && (
								<button
									className="btn btn-warning mr-3"
									onClick={() => archiveBill(bill.id, false)}
								>
									Un Archive
								</button>
							)}
							{!bill.isArchived && (
								<button
									className="btn btn-warning mr-3"
									onClick={() => archiveBill(bill.id, true)}
								>
									Archive
								</button>
							)}
							<button
								className="btn btn-error"
								onClick={() => deleteBill(bill.id)}
							>
								Delete
							</button>
						</div>
						{bill.isVisible && (
							<Bill
								kry={index}
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
						)}
						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default ViewAllBills;
