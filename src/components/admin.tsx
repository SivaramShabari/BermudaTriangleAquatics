import React, { useEffect, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
function Admin() {
	const [isCreatingBill, setIsCreatingBill] = useState(false);
	const [items, setItems] = useState([
		{
			name: "",
			description: "",
			price: 0,
			quantity: 1,
			image: "",
		},
	]);
	const [billDetails, setBillDetails] = useState({
		name: "",
		address: "",
		pincode: "",
		phone: "",
		email: "",
		paidAmount: 0,
		balanceAmount: 0,
		totalAmount: 0,
		date: "",
		items: items,
		dueDate: "",
		discount: "",
		isArchived: false,
	});
	const [grandTotal, setGrandTotal] = useState(0);
	useEffect(() => {
		setGrandTotal(
			items.reduce((acc, item) => acc + item.price * item.quantity, 0)
		);
		return () => {};
	}, [items]);

	useEffect(() => {
		setBillDetails({ ...billDetails, items });
	}, [items]);

	const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setItems([
			...items,
			{
				name: "",
				description: "",
				price: 0,
				quantity: 1,
				image: "",
			},
		]);
	};
	const createBill = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setBillDetails({
			...billDetails,
			isArchived: false,
			items: items,
			totalAmount: items.reduce(
				(acc, item) => acc + item.price * item.quantity,
				0
			),
			balanceAmount:
				items.reduce((acc, item) => acc + item.price * item.quantity, 0) -
				billDetails.paidAmount,
		});
		console.log(billDetails);
		if (billDetails.name && billDetails.address && billDetails.phone) {
			console.log(billDetails);
			setIsCreatingBill(true);
			const db = getFirestore();
			addDoc(collection(db, "bills"), billDetails)
				.then((doc) => {
					console.log("Bill added with id :", doc.id);
					alert("Bill added successfully");
					setIsCreatingBill(false);
					//window.location.reload()
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			alert("Please fill all the details");
		}
	};
	return (
		<div>
			<div className="card shadow-lg pt-4 m-5">
				<form>
					<fieldset>
						<legend>
							<h2>
								<b>BILLING FORM</b>
							</h2>
						</legend>
						<br />
						<div className="w-full">
							<div className="">
								<label className=" ">Receiver Name</label>
								<div>
									<input
										name="first_name"
										placeholder="Name"
										className="input input-primary mb-4 w-80 text-xs"
										type="text"
										onChange={(e) =>
											setBillDetails({ ...billDetails, name: e.target.value })
										}
									/>
								</div>
							</div>
							<div className="">
								<label className="w-full ">Receiver Address</label>
								<div className="input-group">
									<input
										name="last_name"
										placeholder="Address"
										className="input input-primary mb-4 w-80 text-xs "
										type="text"
										onChange={(e) =>
											setBillDetails({
												...billDetails,
												address: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className="">
								<label className="w-full ">Receiver Phone</label>
								<div className="input-group">
									<input
										name="user_name"
										placeholder="Phone number"
										className="input input-primary mb-4 w-80 text-xs "
										type="tel"
										onChange={(e) =>
											setBillDetails({ ...billDetails, phone: e.target.value })
										}
									/>
								</div>
							</div>
							<div className="">
								<label className="w-full ">Billing Date</label>
								<div>
									<input
										name="confirm_password"
										className="input input-primary mb-4 w-80 text-xs mb-3 "
										type="date"
										onChange={(e) =>
											setBillDetails({ ...billDetails, date: e.target.value })
										}
									/>
								</div>
							</div>
							<div className="">
								<label className="w-full">Bill Due Date</label>
								<div className="input-group">
									<input
										name="user_password"
										placeholder=""
										className="input input-primary mb-4 w-80 text-xs "
										type="date"
										onChange={(e) =>
											setBillDetails({
												...billDetails,
												dueDate: e.target.value,
											})
										}
									/>
								</div>
							</div>
							<div className="">
								<label className="w-full ">Paid Amount</label>
								<div>
									<input
										name="email"
										placeholder="Paid Amount ₹"
										className="input input-primary mb-4 w-80 text-xs "
										type="number"
										onChange={(e) =>
											setBillDetails({
												...billDetails,
												paidAmount: parseInt(e.target.value),
											})
										}
									/>
								</div>
							</div>
						</div>
					</fieldset>
				</form>
				{items.map((item, i) => {})}
				<div className="w-full overflow-x-auto">
					<table style={{ minWidth: "900px" }} className="w-full table">
						<thead>
							<tr>
								<th
									scope="col"
									className="border-0 text-uppercase small font-weight-bold bg-transparent"
								>
									Item
								</th>
								<th
									scope="col"
									className="border-0 text-uppercase small font-weight-bold z-6"
								>
									Description
								</th>
								<th
									scope="col"
									className="border-0 text-uppercase small font-weight-bold"
								>
									Unit Cost ₹
								</th>
								<th
									scope="col"
									className="border-0 text-uppercase small font-weight-bold"
								>
									Quantity{" "}
								</th>
								<th
									scope="col"
									className="border-0 text-uppercase small font-weight-bold"
								>
									Total ₹
								</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item, i) => {
								return (
									<tr key={i}>
										<td>
											<input
												type="text"
												className="input input-accent "
												placeholder="Item name"
												value={item.name}
												onChange={(e) => {
													let x = [...items];
													x[i].name = e.target.value;
													setItems(x);
												}}
											/>
										</td>
										<td>
											<div>
												<input
													type="text"
													className="input input-accent "
													placeholder="Item description"
													value={item.description}
													onChange={(e) => {
														let x = [...items];
														x[i].description = e.target.value;
														setItems(x);
													}}
												/>
											</div>
										</td>
										<td>
											<input
												type="text"
												className="input input-accent "
												placeholder="Cost per item"
												value={item.price}
												onChange={(e) => {
													let x: any = [...items];
													x[i].price = e.target.value;
													setItems(x);
												}}
											/>
										</td>
										<td>
											<input
												type="number"
												className="input input-accent w-f"
												placeholder="Quantity"
												value={item.quantity}
												onChange={(e) => {
													let x: any = [...items];
													x[i].quantity = e.target.value;
													setItems(x);
												}}
											/>
										</td>
										<td className="font-weight-bold">
											{(item.price * item.quantity).toFixed(2)}
										</td>
									</tr>
								);
							})}
							<tr>
								<td>
									<button
										className="btn btn-primary"
										onClick={(e) => addItem(e)}
									>
										Add Item
									</button>
								</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td style={{ border: "none" }} className=""></td>
								<td style={{ border: "none" }}></td>
								<td style={{ border: "none" }}></td>
								<td style={{ fontSize: "17px", fontWeight: "bold" }}>Total:</td>
								<td
									className="tetx-center"
									style={{ fontSize: "20px", fontWeight: "bold" }}
								>
									₹{grandTotal.toFixed(2)}
								</td>
							</tr>
							<tr>
								<td style={{ border: "none" }} className=""></td>
								<td style={{ border: "none" }}></td>
								<td style={{ border: "none" }}></td>
								<td style={{ fontSize: "17px", fontWeight: "bold" }}>
									Advance payment:
								</td>
								<td
									className="tetx-center"
									style={{ fontSize: "20px", fontWeight: "bold" }}
								>
									₹{billDetails.paidAmount.toFixed(2)}
								</td>
							</tr>
							<tr>
								<td style={{ border: "none" }} className=""></td>
								<td style={{ border: "none" }}></td>
								<td style={{ border: "none" }}></td>
								<td style={{ fontSize: "17px", fontWeight: "bold" }}>
									Balace:
								</td>
								<td
									className="tetx-center"
									style={{ fontSize: "20px", fontWeight: "bold" }}
								>
									₹{(grandTotal - billDetails.paidAmount).toFixed(2)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				{false && (
					<div
						className="alert alert-success"
						role="alert"
						id="success_message"
					>
						{" "}
						Success!.
					</div>
				)}
				<div>
					<label className="col-md-8 "></label>
					<div className="col-md-8 m-3">
						<br />
						{!isCreatingBill ? (
							<button
								type="submit"
								className="btn btn-accent text-black"
								onClick={(e) => createBill(e)}
							>
								Create Bill{" "}
							</button>
						) : (
							<div className="btn btn-disabled btn-primary">
								Creating Bill...
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
