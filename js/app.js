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
   const data = await res.json();
   categoryShow(data.data.news_category);
};
const categoryShow = (data) => {
   const aCategory = [{ category_id: "00", category_name: "Home" }, ...data];
   const categoryUl = document.getElementById("category-ul");
   aCategory.forEach((one) => {
      const li = document.createElement("li");
      li.innerHTML = `<a>${one.category_name}</a>`;
      categoryUl.appendChild(li);
   });
};
categoryFetch();
