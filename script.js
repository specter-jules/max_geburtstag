const items = document.querySelectorAll(".timeline-item");


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

    }

});

},
{
threshold:0.25
});


items.forEach(item=>{
    observer.observe(item);
});





const pizza = document.querySelector(".pizza");


window.addEventListener("scroll",()=>{

    const offset = window.scrollY * 0.05;

    pizza.style.transform =
    `translateY(${offset}px)`;

});





// Birthday Überraschung

const birthday = document.querySelector(".birthday-surprise");


const birthdayObserver = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                birthday.classList.add("visible");

            },1300);


            birthdayObserver.unobserve(entry.target);

        }

    });

},
{
threshold:0.5
});


birthdayObserver.observe(birthday);