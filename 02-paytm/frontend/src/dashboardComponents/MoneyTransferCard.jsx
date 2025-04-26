import scanAndPayImg from "../images/scanAndPay.png";
import toMobileImg from "../images/toMobile.png";
import toBankImg from "../images/toBank.png";
import toSelfImg from "../images/toSelf.png";
import receiveMoneyImg from "../images/receiveMoney.png";
import alertsImg from "../images/alerts.png";
import allServicesImg from "../images/allServices.png";
import balanceAndHistoryImg from "../images/balanceAndHistory.png";



export function MoneyTransferCard() {
	return (
		<div className="w-full h-full bg-slate-200 rounded-3xl grid grid-cols-4 grid-rows-2 gap-3 p-4 items-center">
			<ChildCard img={scanAndPayImg} />
			<ChildCard img={toMobileImg} />
			<ChildCard img={toBankImg} />
			<ChildCard img={toSelfImg} />
			<ChildCard1 img={balanceAndHistoryImg} />
			<ChildCard1 img={receiveMoneyImg} />
			<ChildCard1 img={alertsImg} />
			<ChildCard1 img={allServicesImg} />			
		</div>
	);
}

function ChildCard({label, img}){
	return (
		<div className="w-[70%] h-[70%] bg-paytm-200 relative rounded-full justify-self-center ">
			<img className="absolute h-[50%] w-[50%] top-1/2 left-1/2 transform -translate-1/2" src={img} alt="" />
		</div>
	)
}
function ChildCard1({label, img}){
	return (
		<div className="w-[70%] h-[70%] bg-paytm-100 relative rounded-full justify-self-center ">
			<img className="absolute h-[50%] w-[50%] top-1/2 left-1/2 transform -translate-1/2" src={img} alt="" />
		</div>
	)
}
