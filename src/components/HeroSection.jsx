export const HeroSection = () => {
  return (
    <main className="flex w-[1125px] justify-between m-auto h-[613px] mt-[80px]">
      <div className="">
        <h1 className=" w-[595px] h-[306px] font-extrabold text-[108px] leading-[102px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <div className="w-[595px] h-[307px]">
          <p className="w-[404px] h-[91p] pt-[36px] font-semibold text-[16px] leading-[24px] text-my_color">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div>
            <button className=" bg-redbg text-white h-[41px] w-[150px] px-[16px] py[6px] mt-[36px] font-semibold text-[24px] mr-[40px]">
              Shop Now
            </button>
            <button className="h-[41px] w-[141px] px-[16px] py[6px] mt-[36px] border-[1px] border-slate-400 font-semibold text-[24px] text-my_color">
              Category
            </button>
          </div>
          <div className="mt-[36px]">
            <p className=" text-my_color mb-[16px]">Also Available On</p>
            <div className="flex">
              <img className="mr-[16px]" src="/images/amazon.png" alt="" />
              <img src="/images/flipkart.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" content-center">
        <img className=" h-[485px]" src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};
