var getul = document.getElementById('list')

function addbtn(){
 var a = document.getElementById('input')
  
    var li = document.createElement('li')
    var btn = document.createElement('button')
    var del = document.createTextNode('Delete')
    var editbtn = document.createElement('button')
    var edit = document.createTextNode('Edit')
    var liText = document.createTextNode(`${a.value}`)
      li.appendChild(liText)
      getul.appendChild(li)
      btn.appendChild(del)
      li.appendChild(btn)
      editbtn.appendChild(edit)
      li.appendChild(editbtn)
    btn.setAttribute('onclick','dellist(this)')
    editbtn.setAttribute('onclick','editfun(this)')
      a.value = ''
      b.value = ''
    
function deleteall(){
  getul.innerHTML = ''


}
function dellist(e){

e.parentNode.remove()
}
function editfun(e){
 var a = prompt('Enter edit value',e.parentNode.firstChild.nodeValue)
 e.parentNode.firstChild.nodeValue = a
var userEdit = prompt('Enter edit value',item)
  item = userEdit  
e.parentNode.firstChild.nodeValue = `${item} `
}
