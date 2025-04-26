import mobileRechargeImg from "../images/mobileRecharge.png";
import electricityImg from "../images/electricity.png";
import creditCardImg from "../images/creditCard.png";
import fastagImg from "../images/fastag.png";
import billsImg from "../images/bills.png";
import { Card } from "../components/Card";

export function RechargeCard() {
	return (
		<div className="grid grid-cols-5 gap-3 h-full w-full ">
			<MiniCard label={"All Bill Payments"} img={billsImg} />
			<MiniCard label={"Mobile Recharge"} img={mobileRechargeImg} />
			<MiniCard label={"Electricity Bill"} img={electricityImg} />
			<MiniCard label={"FASTag Recharge"} img={fastagImg} />
			<MiniCard label={"Credit Card"} img={creditCardImg} />
		</div>
	);
}

function MiniCard({ label, img }) {
	return (
		<div className="relative">
			<div className="pb-3 px-10 w-full h-full bg-slate-200 rounded-3xl text-center font-medium text-sm flex items-baseline-last justify-center">
				<div className=" px-[20%] border-t-1 pt-2">{label}</div>
			</div>
			<img
				className="w-[36%] h-[30%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[85%] "
				src={img}
				alt=""
			/>
		</div>
	);
}
