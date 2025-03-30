var getul = document.getElementById('list')
//var id = document.getElementById('para')
//var totalPrice = 0;
function addbtn(){
 var a = document.getElementById('input')
   // var b = document.getElementById('inp')
    //var price = parseFloat(b.value);
    //if ( price <= 0) {
      //alert('Please enter a valid price.');
      //return;
  //}
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
      //totalPrice += price;
      //updateTotal();
     }
function deleteall(){
  getul.innerHTML = ''
  //totalPrice = 0;
  //updateTotal();

}
function dellist(e){
  //var newli = e.parentNode.firstChild.nodeValue.trim();
  //var price = parseFloat(newli.split('$')[1]);
 // totalPrice -= price;
e.parentNode.remove()
//updateTotal();
}
function editfun(e){
 var a = prompt('Enter edit value',e.parentNode.firstChild.nodeValue)
 e.parentNode.firstChild.nodeValue = a
    // var existingValue = e.parentNode.firstChild.nodeValue.trim();
  //var [item, priceText] = existingValue.split('$');
  //var price = parseFloat(priceText);
  //totalPrice = totalPrice -price + price1;
  //var newli = e.parentNode.firstChild.nodeValue.trim();
//var create = newli.split(' ');
//var item = create[0]
//var price1 = create[1]
var userEdit = prompt('Enter edit value',item)
  item = userEdit  
// var user = +prompt('Enter corrrect Price',price1)
//price1 = user
e.parentNode.firstChild.nodeValue = `${item} `
//updateTotal();
}
function updateTotal(){
  //id.textContent = `Total Price: $${totalPrice}`;

}