const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config={params:{q:searchTerm}};
    const res=await axios.get('https://api.tvmaze.com/search/shows',config)
    makeImage(res.data)
    form.elements.query.value=''
})
const makeImage=function(shows){
    for (let result of shows){
        if (result.show.image){
            const newimage=document.createElement('img');
            newimage.src=result.show.image.medium;
            document.body.append(newimage)
        }
    }
}
