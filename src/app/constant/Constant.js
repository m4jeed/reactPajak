const Constant={
    //BASE_URL:"http://localhost:8090/",
    BASE_URL:"http://182.23.44.62:7088//",
    API_HEADER:(token)=>{
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            }
        }
    },

    primaryColor:"#2F4F4F",
    primaryColors:"#66CCFF",
    textColor:"rgba(0, 0, 0, 0.7)",
    textColorLight:"rgba(0, 0, 0, 0.4)",
    lineColor:"rgba(0, 0, 0, 0.1)",
    detailColor:"#F0F8FF",
    textColor2:"#FFFFFF",
    
}

export default Constant;