const navUl = () => {
   const ul = document.getElementsByClassName("nav-ul");
   const navItems = ["News", "Blog", "About", "Terms"];
   for (let i = 0; i < ul.length; i++) {
      navItems.forEach((navItem) => {
         const li = document.createElement("li");
         li.innerHTML = `
            <a>${navItem}</a>
         `;
         ul[i].appendChild(li);
      });
   }
};
navUl();

const categoryFetch = async () => {
   const url = `https://openapi.programming-hero.com/api/news/categories`;
   const res = await fetch(url);
   const info = await res.json();
   categoryShow(info.data.news_category);
};
const categoryShow = (data) => {
   const aCategory = [{ category_id: "08", category_name: "Home" }, ...data];
   const categoryUl = document.getElementById("category-ul");
   aCategory.forEach((single) => {
      const li = document.createElement("li");
      li.setAttribute("onclick", `categoryCards(${single.category_id})`);
      li.innerHTML = `<a>${single.category_name}</a>`;
      categoryUl.appendChild(li);
      // console.log(li);
   });
};
categoryFetch();

// return async be careful!
const categoryPage = async (data) => {
   const url = ` https://openapi.programming-hero.com/api/news/category/0${data}`;
   const res = await fetch(url);
   const info = await res.json();
   return info.data;
};
const categoryCards = async (data) => {
   const info = await categoryPage(data);
   const itemFound = document.getElementById("item-found");
   itemFound.innerText = `${info.length > 1 ? info.length + " items found" : "No Data Found"}`;
   console.log(info.length);
   info.forEach((single) => {
      console.log(single);
      // author ---> name, img, published_date
      const { author, details, title, total_view, image_url: image, _id: id } = single;
      const categoryCard = document.getElementById("category-card");
      const div = document.createElement("div");
      div.classList.add("card", "card-side", "shadow-lg", "drop-shadow-xl", "rounded-md", "grid", "grid-cols-12");

      div.innerHTML = `
         <figure class="col-span-12 md:col-span-4 p-3"><img class="min-h-full min-w-full rounded-lg" src=${image} alt="Movie" /></figure>
         <div class="card-body col-span-12 md:col-span-8">
            <h2 class="card-title">${title}</h2>
            <p>${details.slice(0,450)+"....."}</p>
            <div class="card-actions justify-between gap-2 pt-4">
               <div class="flex gap-4 items-center">
                  <div class="avatar">
                     <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src=${image} />
                     </div>
                  </div>
                  <div>
                     <p>${(author?.name??"No name found").toUpperCase()}</p>
                     <p>${author?.published_date??"No date found".toUpperCase()}</p>
                  </div>
               </div>
               <div>
                  <div></div>
                  <div><p>${total_view}</p></div>
               </div>
               <div>♣♥♣♣♣♣♣♣♣</div>
               <div>♠◙ÜÜπ</div>
            </div>
         </div>
`;
      categoryCard.appendChild(div);
   });
};
categoryCards("8");
