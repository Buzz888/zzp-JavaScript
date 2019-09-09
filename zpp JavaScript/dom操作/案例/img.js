var imgbox = document.querySelector(".imgbox")
var img =imgbox.querySelector('img')
console.log(imgbox.offsetTop)
var html = document.documentElement
console.log(html.scrollTop+html.clientHeight)
function lazeimg(img){
	console.log(1)
	let trueimg = img.getAttribute('trueimg')
	img.src=trueimg
	img.onload =function(){
		img.style.display='block'
	}
	img.isLoad = true
	
}
window.onscroll =function(){
	if(img.isLoad) return
	let a =html.scrollTop+html.clientHeight
	let b =imgbox.offsetTop+imgbox.clientHeight+100
	if(a>b){
		lazeimg(img)
	}
}