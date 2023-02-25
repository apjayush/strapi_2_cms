console.log('hi');

let urlParams = new URLSearchParams(window.location.search);
let elmId = urlParams.get('id');

fetch(`http://localhost:1337/api/articles/${elmId}?populate=*`)
.then(response=>response.json())
.then((data)=>{
    let obtained = data.data;
    console.log(obtained.attributes.title);
    fetch(`http://localhost:1337${obtained.attributes.img.data.attributes.url}`)
    .then(response=>response.blob())
    .then((blob)=>{
        const objectURL = URL.createObjectURL(blob);
         
        // Create an image element and set its src to the object URL
       const image = new Image();
       image.src = objectURL;
       console.log(image.src);

       let articleContent = document.getElementById('articleContent');
  //      articleContent.innerHTML = `<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col" >
  //      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${obtained.attributes.title}</h1>
  //    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="${image.src}">
  //    <div class="text-center lg:w-2/3 w-full">
       
  //      <p class="mb-8 leading-relaxed  text-left">${obtained.attributes.description}</p>
       
  //    </div>
  //  </div>`
       articleContent.innerHTML = `<div class="container mx-auto flex px-10 py-2 items-left  flex-col">
       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">${obtained.attributes.title}</h1>
       <span class="font-semibold title-font text-gray-700 mt-2">CATEGORY</span>
     <span class="mt-1 text-gray-500 text-sm  mb-4">12 Jun 2019</span>
     <img class="h-64 w-64" alt="hero" src="${image.src}">
     <div class="text-left lg:w-2/3 w-full mt-6">
      
       <p class="mb-8 leading-relaxed">${obtained.attributes.description}</p>
      
     </div>
   </div>`;
    })
   

})

