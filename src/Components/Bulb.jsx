

const Bulb = () => {


  return(
   <div className="absolute -left-36 -bottom-12 rotate-12 
   mix-blend-dodge animate-pulse duration-75 z-10 w-[200px] xl:w[260px] ">
    
    {/* <div className="bg-bulb w-full h-full " style={{width:260, height:200}}></div> */}
     <img src="src\images\bulb.png"  style={{width:200, height:200}} alt=""
    className="w-full h-full" /> 
   </div>
  )


};

export default Bulb;
