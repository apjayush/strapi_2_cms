let articleContent = document.getElementById('articleCards');




fetch('http://localhost:1337/api/articles/?populate=*')
.then((response)=>response.json())
.then((article)=>{
    
//  console.log(article.data);
let arrElm = article.data;
// console.log(arrElm);

//  console.log(articleContent);

let html = '';
 arrElm.forEach((element) => {
     fetch(`http://localhost:1337${element.attributes.img.data.attributes.url}`)
     .then(response=>response.blob())
     .then(bolb =>{
         // console.log(bolb);
         const objectURL = URL.createObjectURL(bolb);
         
         // Create an image element and set its src to the object URL
        const image = new Image();
        image.src = objectURL;
        // console.log(image);

        html += `<div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col pt-2 pr-5">
            <img src="${image.src}" alt="image" class="h-48 w-96 object-cover rounded-lg">
        </div>
        <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${element.attributes.title}</h2>
            <p class="leading-relaxed">${element.attributes.summary}
             </p>
            <a class="read-more-button text-indigo-500 inline-flex items-center mt-4 cursor-pointer" href="http://localhost:5500/src/articles.html?id=${element.id}">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>`;
         
    articleContent.innerHTML = html;
   
    });
});

});

