console.log("alou");

let url = "https://heroku-pdmm.herokuapp.com/";
const pathRestaurant = "restaurants";
url = url + pathRestaurant;

async function getapi(url, callback) {
  const response = await fetch(url);

  var data = await response.json();
  for (let i = 0; i < data.length; i++) {
    console.log(data);

    const h1 = createH1(data[i].name)
    const p = createP(data[i].description);
    ;

    
    let ul = document.createElement("ul");
    let div = document.createElement("div")
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(ul)
    document.querySelector(".conteiner-geral").appendChild(div)

    for (let j = 0; j < data[i].midia.length; j++) {
        const img = createImg(data[i].midia[j].url)
      div.appendChild(img)
      document.querySelector(".conteiner-geral").appendChild(div);
        
    }
    // for (let j = 0; j < data[i].categories.length; j++) {
    //   let li = createLi(data[i].categories[j].name)
    //   ul.appendChild(li)
    //   div.appendChild(ul)
    //   document.querySelector(".conteiner-geral").appendChild(div);
    // }
    
  }

  console.log(data);
}

function createDiv(data){
    let div = document.createElement("div");
    
}

function createH1(data){
let h1 = document.createElement("h1");
  h1.innerHTML = parseMarkdown(data);
  return h1
}

function createP(data) {
  let p = document.createElement("p");
  p.innerHTML = parseMarkdown(data);
  return p
}

function createLi(data){
    let li = document.createElement("li");
  li.innerText = data;
  return li
}

function createImg(data) {
  let url = "https://heroku-pdmm.herokuapp.com";
  let img = document.createElement("img");
  img.src = data;
  img.style.width = "500px"
  return img
}
function parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')

	return htmlText.trim()
}
getapi(url);
