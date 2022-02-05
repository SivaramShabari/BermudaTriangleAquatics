import React, { useEffect, useRef, useState } from "react";
import logo_ from "../images/logo2.jpg";
import sign_ from "../images/sign.png";
import base_ from "../images/white.jpg";
import {
	Stage,
	Layer,
	Group,
	Rect,
	Text,
	Image as KImage,
	Line,
} from "react-konva";
function Bill(props: any) {
	const {
		id,
		date,
		totalAmount,
		paidAmount,
		dueDate,
		balanceAmount,
		customer,
		items,
	} = props;
	const [logoProps, setLogo] = useState<any>({
		x: 20,
		y: 20,
		width: 0,
		height: 0,
	});
	const [sign, setSign] = useState<any>({ width: 0, height: 0 });
	const [base, setbase] = useState<any>({ image: "" });
	const [windowWidth, setWindowWidth] = useState<any>(window.innerWidth);
	const ratio = Math.min((windowWidth * 0.9) / 1127, 1);
	const stageRef = useRef<any>();
	const height = 1595 + items.length * 10;

	useEffect(() => {
		const logo = new Image();
		const signs = new Image();
		const base = new Image();

		base.src = base_;
		logo.src = logo_;
		signs.src = sign_;

		base.onload = () => {
			base.height = 1595 + items.length * 10;
			setbase({ image: base });
		};
		logo.onload = () => {
			let height = 200;
			let width = logo.width * (height / logo.height);
			setLogo({ ...logoProps, width, height, image: logo });
		};

		signs.onload = () => {
			let height = 100;
			let width = signs.width * (height / signs.height);
			setSign({ width, height, image: signs });
		};
	}, []);
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
			console.log((1575 + items.length * 10) * ratio);
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	const download = () => {
		let name = `${customer.name}_${id}.jpg`;
		let uri = stageRef.current.toDataURL({
			pixelRatio: 3,
			mimeType: "image/jpeg",
			backgroundColor: "#fff",
		});
		let link = document.createElement("a");
		link.download = name;
		link.href = uri;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<>
			<button
				style={{ width: "200px" }}
				className="ml-3 btn btn-primary"
				onClick={() => download()}
			>
				Download
			</button>
			<div
				className="m-3 shadow-lg"
				style={{
					width: Math.min(windowWidth * 0.9, 1127),
					maxHeight: (1575 + items.length * 10) * ratio + 10,
				}}
			>
				<Stage
					fill="#fff"
					width={1127 * ratio}
					height={(1595 + items.length * 10) * ratio}
					ref={stageRef}
					scaleX={ratio}
					scaleY={ratio}
					pixelRatio={5}
				>
					<Layer>
						<KImage image={base.image} />
						<KImage {...logoProps} />
						<Rect
							x={0}
							y={0}
							width={1127}
							height={1595 + items.length * 10}
							stroke={"#000"}
							strokeWidth={1}
						/>
						<Text
							x={logoProps.x + logoProps.width + 20}
							y={80}
							text="BERMUDA TRIANGLE AQUATICS"
							fontSize={18}
							fontStyle="bold"
						/>
						<Text
							x={logoProps.x + logoProps.width + 20}
							y={120}
							text="6379828754"
							fontSize={17}
							fontStyle=""
						/>

						<Text
							x={logoProps.x + logoProps.width + 20}
							y={150}
							text="bermudatriangleaqua@gmail.com"
							fontSize={17}
							fontStyle=""
							fill="blue"
							onMouseEnter={(e: any) =>
								(e.target.getStage().container().style.cursor = "pointer")
							}
							onMouseLeave={(e: any) =>
								(e.target.getStage().container().style.cursor = "default")
							}
							onClick={() => {}}
						/>
						<Text
							x={1127 - 300}
							y={80}
							text={"Bill Id: " + id}
							fontSize={17}
							fontStyle="bold"
							fill="black"
							onClick={() => {}}
							align="right"
							width={280}
						/>
						<Text
							x={1127 - 220}
							y={120}
							text={"Bill date: " + date}
							fontSize={17}
							fill="black"
							onClick={() => {}}
							fontStyle="bold"
							align="right"
							width={200}
						/>
						<Text
							x={1127 - 220}
							y={150}
							text={"Due date: " + (dueDate || "On Receiving")}
							fontSize={17}
							fill="black"
							onClick={() => {}}
							fontStyle="bold"
							align="right"
							width={200}
						/>
						<Line
							x={20}
							y={280}
							stroke={"black"}
							strokeWidth={1}
							points={[0, 0, 1080, 0]}
						/>
						<Text
							x={20}
							y={300}
							text="BILL TO"
							fontSize={22}
							fontStyle="bold"
						/>
						<Text
							x={20}
							y={340}
							text={customer.name + " | Phn: " + customer.phone}
							fontSize={19}
							fontStyle="bold"
						/>
						<Text
							x={20}
							y={370}
							text={customer.address}
							fontSize={17}
							fontStyle=""
							fill="black"
							width={500}
							onMouseEnter={(e: any) =>
								(e.target.getStage().container().style.cursor = "pointer")
							}
							onMouseLeave={(e: any) =>
								(e.target.getStage().container().style.cursor = "default")
							}
							onClick={() => {}}
						/>
						<Line
							x={20}
							y={450}
							stroke={"black"}
							strokeWidth={1}
							points={[0, 0, 1080, 0]}
						/>
						<Text
							x={60}
							y={475}
							text="ITEM | DESCRIPTION"
							fontSize={20}
							fontStyle="bold"
						/>
						<Text
							x={650}
							y={475}
							text="RATE ₹"
							fontSize={19}
							fontStyle="bold"
						/>
						<Text
							x={800}
							y={475}
							text="QTY"
							fontSize={19}
							fontStyle="bold"
							fill="black"
						/>
						<Text
							x={1000}
							y={475}
							text="TOTAL ₹"
							fontSize={19}
							fontStyle="bold"
							fill="black"
						/>
						<Line
							x={20}
							y={515}
							stroke={"black"}
							strokeWidth={1}
							points={[0, 0, 1080, 0]}
						/>

						{items.map((item: any, i: number) => {
							return (
								<Group key={i} y={540 + i * 55}>
									<Text x={60} text={item.name} fontSize={20} />
									<Text x={650} text={item.price} fontSize={19} />
									<Text
										x={800}
										text={item.quantity}
										fontSize={19}
										fill="black"
									/>
									<Text
										x={1000}
										text={(item.price * item.quantity).toString()}
										fontSize={19}
										fontStyle="bold"
										fill="black"
									/>
									<Line
										x={20}
										y={35}
										stroke="#888"
										strokeWidth={1}
										points={[0, 0, 1080, 0]}
									/>
								</Group>
							);
						})}
						<Group y={540 + items.length * 55}>
							<Text
								x={770}
								text="Grand Total :"
								fontSize={19}
								fontStyle="bold"
								fill="black"
								align="left"
							/>
							<Text
								x={1000}
								text={"₹ " + totalAmount}
								fontSize={19}
								fontStyle="bold"
								fill="black"
							/>
						</Group>
						<Group y={585 + items.length * 55}>
							<Text
								x={840}
								text="Paid :"
								fontSize={19}
								fill="black"
								align="left"
							/>
							<Text
								x={1000}
								text={"₹ " + paidAmount}
								fontSize={19}
								fontStyle="bold"
								fill="black"
							/>
							<Line
								x={700}
								y={35}
								stroke="#888"
								strokeWidth={1}
								points={[0, 0, 400, 0]}
							/>
						</Group>
						<Group y={640 + items.length * 55}>
							<Text
								x={740}
								text="Balance amount :"
								fontSize={19}
								fill="black"
								align="left"
							/>
							<Text
								x={1000}
								text={"₹ " + balanceAmount}
								fontSize={19}
								fontStyle="bold"
								fill="black"
							/>
							<Line
								x={700}
								y={35}
								stroke="#666"
								strokeWidth={5}
								points={[0, 0, 400, 0]}
							/>
						</Group>
						<Group
							// y={680 + (items.length * 55)}
							y={1595 + items.length * 10 - 380}
						>
							<Text
								x={920}
								y={240}
								text="Signature"
								fontSize={19}
								fill="black"
								align="left"
								fontStyle="bold"
							/>
							<Text
								x={920}
								y={268}
								text="Date:"
								fontSize={19}
								fill="#777"
								align="left"
							/>
							<KImage x={900} y={100} {...sign} />
						</Group>

						<Group y={1595 + items.length * 10 - 320} x={20}>
							<Text
								text="Payment Instructions"
								fontSize={19}
								fill="black"
								align="left"
								fontStyle="bold"
							/>
							<Text
								y={30}
								text="BANK TRANSFER"
								fontSize={19}
								fontStyle="bold"
								fill="black"
							/>
							<Text
								y={60}
								text="Acc no : 37165242609"
								fontSize={19}
								fill="black"
							/>
							<Text
								y={85}
								text="IFSC : SBIN0004792"
								fontSize={19}
								fill="black"
							/>
							<Text
								y={108}
								text="Account holder : SANJAY S"
								fontSize={19}
								fill="black"
							/>
							<Text
								y={150}
								text="OTHER"
								fontSize={19}
								fontStyle="bold"
								fill="black"
							/>
							<Text y={180} text="Google pay" fontSize={19} fill="black" />
							<Text
								y={210}
								text="Phone number : 6379828754"
								fontSize={19}
								fill="black"
							/>
							<Text
								y={235}
								text="UPI id : sssssanjay60@oksbi"
								fontSize={19}
								fill="black"
							/>
						</Group>
					</Layer>
				</Stage>
			</div>
		</>
	);
}

export default Bill;
