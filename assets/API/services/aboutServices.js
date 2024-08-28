const fetchAssociationsEndPoint = (projectID) =>
`${API_BASE_URL}/website/association/get-all-association/${projectID}?type=${ASSOCIATE_TYPES.ASSOCIATE}`; 

async function handleFetchAssociations() {
    try{
        const websiteID= getwebsiteID();
        if(websiteID){
        const response = await fetch(fetchAssociationsEndPoint(websiteID),{
        method: FETCH_METHOD.GET,});
        
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const associationcontainer = document.getElementById("about-association-item");

        
        const associationItemsHTML = (data?.data || [])
        .map(
            (item)=>`
            <div class="member cxu-fade" data -ease="back">
            <div class="image"
            style="height:auto;">
            <img src="${getFormattedImageURL(item?.logo)}" alt="${item.name}
            style=="width=100%;height=100%;object-fit:cover;">
            </div>
            </div>
            `
            ).join("");

            associationcontainer.innerHTML = associationItemsHTML;
        }else{
            console.error("websiteID id not available.");
        }
        } catch (error) {
            console.error("Fetch error",error);
    }
}

const homeservicesCallBack = async()=> {
    await handleFetchAssociations();
}

handleFetchWebsiteDetails(homeservicesCallBack);
