
// portfolio

const FilterContainre=document.querySelector(".Portfolio-filter"),
Filterbtns=FilterContainre.children,
 totalFilterBtn=Filterbtns.length,
 PortfolioItems=document.querySelectorAll(".portfolio-items"),
 totalPortfolioItems =  PortfolioItems.length;


  for(let i=0; i<totalFilterBtn ; i++)
  {
     Filterbtns[i].addEventListener("click",function(){
        FilterContainre.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");
        for(let j=0; j< totalPortfolioItems; j++)
        {
           if(filterValue === PortfolioItems[j].getAttribute("data-category") )
           {
            PortfolioItems[j].classList.remove("hide");
                PortfolioItems[j].classList.add("show");
           }
           else
           {          PortfolioItems[j].classList.remove("show");
                 PortfolioItems[j].classList.add("hide");
           }
           if(filterValue === "all")
           { 
            PortfolioItems[j].classList.remove("hide");
            PortfolioItems[j].classList.add("show");
           }
        }
        
     })
  }
   
  // portfolio part2
  const lightbox=document.querySelector(".lightbox"),
         lightboxclose = document.querySelector(".lightbox"), 
        lightboximg=lightbox.querySelector(".lightbox-img"),
        lightboxText =lightbox.querySelector(".caption-text"),
        lightboxCounter =lightbox.querySelector(".caption-counter");
        let itemIndex =0;
        for(let i=0;i<totalPortfolioItems;i++)
        {        
        PortfolioItems[i].addEventListener("click" , function(){
                   itemIndex=i;
                   changeItem();
                   toggleLightbox();
        })
        }
        function toggleLightbox(){

            lightbox.classList.toggle("open");
           
        }
        function changeItem ()
        {
       ImageSrc=PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboximg.src = ImageSrc;
        lightboxText.innerHTML= PortfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML =(itemIndex+1) +" of "+ totalPortfolioItems;

      } 
      function next()
      {
         if(itemIndex===totalPortfolioItems-1)
         {
            itemIndex =0;
         }
         else
         {          itemIndex++;
         }
                   changeItem();
      }
      function prev()
      {
         if(itemIndex===0)
         {
            totalPortfolioItems-1;
         }
         else
         {          itemIndex--;
         }
                   changeItem();
      }
// close  portfolio part 2
lightbox.addEventListener('click',function(event)
{
       if(event.target === lightboxclose || event.target === lightbox)
       {
          toggleLightbox();
       }
})

 // aside NavBar
  const nav = document.querySelector(".nav"),
  navList=nav.querySelectorAll("li"),
  allSection =document.querySelectorAll(".section"),
  totalNavLis=  navList.length;
  for(var i=0; i<totalNavLis;i++)
  {
      const a = navList[i].querySelector("a");
      a.addEventListener("click",function(){
         for(var i=0; i<totalNavLis;i++)
     {
        allSection[i].classList.remove("back-section");
     }
         for(var j=0; j<totalNavLis;j++){
            if(navList[j].querySelector("a").classList.contains("active")){

                   allSection[j].classList.add("back-section");
         }
         navList[j].querySelector("a").classList.remove("active");
      } 
       this.classList.add("active");
           showSections(this);
           if(window.innerWidth < 1200){
              asidSectionToggler();
           }
      })
  }
  function showSections(element)
  {
     for(var i=0; i<totalNavLis;i++)
     {
        allSection[i].classList.remove("active");
     }
const traget =  element.getAttribute("href").split("#")[1];
document.querySelector("#"+traget).classList.add("active");
  }
  const navtotogglerbtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");


  navtotogglerbtn.addEventListener("click",() =>{
     asidSectionToggler();
  })


  function asidSectionToggler() {
           aside.classList.toggle("open");
           navtotogglerbtn.classList.toggle("open");
           for(var i=0; i<totalNavLis;i++)
           {
              allSection[i].classList.toggle("open");
           }
  }