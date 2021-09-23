document.getElementById("notify-btn").addEventListener("click", ()=>
{
    if(document.getElementById("email").validity.valid)
    {
        document.getElementById("mail-error").style.display = "none";
        document.getElementById("email").style.border = "1px hsla(223, 87%, 63%, 0.548) solid";
    }
    else
    {
        document.getElementById("mail-error").style.display = "inline";
        document.getElementById("email").style.border = "1px hsl(354, 100%, 66%) solid";
    }
});

/*Media querry changed state*/
const mediaQuery = window.matchMedia('(min-width: 900px)');

function handleTabletChange(e) 
{
  // Check if the media query is true
  if (e.matches) //if viewports at least 900px wide
  { 
    //document.getElementById("intro-pannel").appendChild(document.getElementById("mail-error")); 
    document.getElementById("notify-btn").insertAdjacentElement('afterend', document.getElementById("mail-error"));
  }
  else//if viewports less than 900px wide
  {     
     document.getElementById("email").insertAdjacentElement('afterend', document.getElementById("mail-error"));
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery)