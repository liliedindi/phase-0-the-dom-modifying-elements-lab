// Write your code here!
const main =document.querySelector('main#main')
main.remove();
const newHeader=document.createElement('h1')
document.body.append(newHeader)
newHeader.nodeName=('H1')
newHeader.id=("victory");
newHeader.innerHTML =('lils is the champion')