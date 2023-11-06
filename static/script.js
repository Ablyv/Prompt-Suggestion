let imp = document.getElementsByTagName('span')[0]
let ext = document.getElementsByTagName('span')[1]

const impRedirect = () =>{
  window.location.href = "/impromptu";
}

const extRedirect = () =>{
  window.location.href = "/extemporaneous";
}

imp.addEventListener("click", impRedirect);
ext.addEventListener("click", extRedirect);