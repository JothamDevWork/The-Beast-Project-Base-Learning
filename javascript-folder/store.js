

function showparagraphofcar(event){

  const showparagraph = event.target.nextElementSibling;

  if(showparagraph.style.display === "none"){
      showparagraph.style.display = "block";
  }
  else{
     showparagraph.style.display = "none";
  }

}