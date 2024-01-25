
function change()
{
    console.log("button clicked")
    const index = Math.round(Math.random()*10000000).toString(16)
    document.body.style.backgroundColor='#'+index
}