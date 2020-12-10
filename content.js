const courseContacts = document.querySelectorAll(".course-contacts");


courseContacts.forEach((item) => {
  item.remove();
});

const cursosList = document.querySelector(".card-deck");

if(cursosList){
  const cursoDescricao = cursosList.querySelectorAll(".no-overflow");
  cursoDescricao.forEach((item) => {
    item.remove();
  });
}
  



