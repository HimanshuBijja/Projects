export function StocksCard({bullImg, bearImg}) {
    return (
        <div className="w-full h-full px-5 pb-2 pt-5 bg-slate-200 rounded-3xl flex flex-col">
            <div className="pl-4 pb-2 mb-6 text-2xl border-b-2 flex font-medium">Stocks</div>
            <div className=" flex-1 grid grid-rows-5 gap-2">
                <div className="col-span-1   border-b-1 items-center ">
                    <div className="relative grid grid-cols-10 items-center  rounded-2xl bg-slate-300 py-3">
                        <div className=" pl-7 col-span-6 text-xl">Apple</div>
                        <img
                            className="h-5 w-5 col-span-1 justify-self-end"
                            src={bullImg}
                            alt=""
                        />
                        <div className=" pl-2 col-span-2 text-base">+ 0.43</div>
                    </div>
                </div>
                <div className="col-span-1   border-b-1 items-center ">
                    <div className="relative grid grid-cols-10 items-center  rounded-2xl bg-slate-300 py-3">
                        <div className=" pl-7 col-span-6 text-xl">Apple</div>
                        <img
                            className="h-5 w-5 col-span-1 justify-self-end"
                            src={bullImg}
                            alt=""
                        />
                        <div className=" pl-2 col-span-2 text-base">+ 0.43</div>
                    </div>
                </div>
                <div className="col-span-1   border-b-1 items-center ">
                    <div className="relative grid grid-cols-10 items-center  rounded-2xl bg-slate-300 py-3">
                        <div className=" pl-7 col-span-6 text-xl">Apple</div>
                        <img
                            className="h-5 w-5 col-span-1 justify-self-end"
                            src={bearImg}
                            alt=""
                        />
                        <div className=" pl-2 col-span-2 text-base">+ 0.43</div>
                    </div>
                </div>
                <div className="col-span-1   border-b-1 items-center ">
                    <div className="relative grid grid-cols-10 items-center  rounded-2xl bg-slate-300 py-3">
                        <div className=" pl-7 col-span-6 text-xl">Apple</div>
                        <img
                            className="h-5 w-5 col-span-1 justify-self-end"
                            src={bullImg}
                            alt=""
                        />
                        <div className=" pl-2 col-span-2 text-base">+ 0.43</div>
                    </div>
                </div>
                <div className="col-span-1 ite1s-center ">
                    <div className="relative grid grid-cols-10 items-center  rounded-2xl bg-slate-300 py-3">
                        <div className=" pl-7 col-span-6 text-xl">Apple</div>
                        <img
                            className="h-5 w-5 col-span-1 justify-self-end"
                            src={bearImg}
                            alt=""
                        />
                        <div className=" pl-2 col-span-2 text-base">+ 0.43</div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}
