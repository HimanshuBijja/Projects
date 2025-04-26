import loanImg from "../images/loan.png";
import insuranceImg from "../images/Insurance.png";
import travelImg from "../images/travel.png";
import mutualFundsImg from "../images/mutualFunds.png";

export function PillsCard() {
	return (
		<div className="w-full h-full grid grid-rows-4 gap-3 ">
			<ChildCard label={"Loans"} description={"Personal, Gold and More ..."} img={loanImg} />
			<ChildCard
				label={"Insurance"}
				description={"Motor, Health and More ..."}
				img={insuranceImg}
			/>
			<ChildCard
				label={"Travel & Transit"}
				description={"Flight, Train, Bus, Hotel, Metro"}
                img={travelImg}
			/>
			<ChildCard label={"Mutual Funds"} description={"SIPs"} img={mutualFundsImg} />
		</div>
	);
}

function ChildCard({ label, description, img }) {
	return (
		<div className="bg-slate-200 w-full h-full rounded-3xl font-medium p-4 relative">
			<div className="border-b-2 w-max pl-2 px-5 relative">
				{label}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					className="size-4.5  absolute -right-2.5 top-1/2 transform -translate-1/2 "
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
					/>
				</svg>
			</div>
			<div className="text-slate-400 text-sm font-medium pt-1.5 pl-2">
				{description}
			</div>
			{/* <div className=" absolute bg-paytm-200 rounded-full h-3 w-3 right-4 top-[10%] "></div>
			<div className=" absolute bg-paytm-300 rounded-full h-3 w-3 right-8 top-[10%] "></div> */}
			<div className=" absolute rounded-full h-14 w-14 right-3 top-[40%] flex justify-center items-baseline-last ">
				<img className="w-[80%] h-[80%] rounded-full" src={img} alt="" />
			</div>
		</div>
	);
}

// <div className=" absolute bg-white rounded-full h-11 w-11 right-10 top-[10%] "></div>
//             <div className=" absolute bg-white rounded-full h-11 w-11 right-16 top-[50%] "></div>
