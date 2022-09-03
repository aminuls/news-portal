const navUl = () => {
   const ul = document.getElementsByClassName("nav-ul");
   const navItems = ["News", "Blog", "About", "Terms"];
   console.log(ul);
   for(let i=0; i<ul.length; i++){
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
