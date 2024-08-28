const FETCH_WEBSITE_DETAILS_END_POINT = `${API_BASE_URL}/website/auth/get-website-by-uid/${WEBSITE_UID}`;
async function handleFetchWebsiteDetails(CAllBackSerivces =() => {}) {
    // console.log("dsdsk==", WEBSITE_UID, FETCH_WEBSITE_DETAILS_END_POINT);
    try {
        const response = await fetch(FETCH_WEBSITE_DETAILS_END_POINT, {
            method: "GET",});
            
        if(!response.ok){
            throw new Error(`HTTP  error! status: ${response.status}`);
        }

        const data = await response.json();
       
        if(data?.data){
            sessionStorage.setItem("websiteData",JSON.stringify(data?.data));
            CAllBackSerivces();
            }
        }catch(error){
            console.error("Fetch.error",error);
        }
    
}
handleFetchWebsiteDetails();