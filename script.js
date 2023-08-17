const quote=document.getElementById("quote")
const container=document.getElementsByClassName("container")
const author=document.getElementById("author")
const button=document.getElementById("button")
const url="https://api.quotable.io/random"
function getRandomColor() {
    // Generate random values for red, green, and blue components
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Create a CSS color string using the random values
    var color = `rgb(${r},${g},${b})`
    return color;
}
var r=Math.floor(Math.random()*256)
var g=Math.floor(Math.random()*256)
var b=Math.floor(Math.random()*256)
const show= async ()=>{
   try{
    const fetchedData=await fetch(url)
    const data=await fetchedData.json()
    console.log(data)
    quote.innerHTML=`"${data.content}"`
    author.innerHTML=`-${data.author}`
    document.body.style.backgroundColor=getRandomColor()
    button.style.color="#fff";
    button.style.border="1px solid #fff"
   }
   catch(error)
   {
    console.error(error)
   }
}