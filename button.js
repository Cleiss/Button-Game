let area1 = document.getElementById('area1')
let area2 = document.getElementById('area2')
let area3 = document.getElementById('area3')
let area4 = document.getElementById('area4')
let area5 = document.getElementById('area5')


area1.onclick = function() {

    area1.innerHTML = '2'
    area1.style.background = 'cornflowerblue'
    area2.innerHTML = '1'
    area2.style.background = 'coral'
    area3.innerHTML = '3'
    area3.style.background = 'rgb(253, 219, 23)'
    area4.innerHTML = '5'
    area4.style.background = 'rgb(140, 0, 255)'
    area5.innerHTML = '4'
    area5.style.background = 'rgb(64, 255, 47)'

}

area2.onclick = function() {

    area1.innerHTML = '5'
    area1.style.background = 'rgb(140, 0, 255)'
    area2.innerHTML = '3'
    area2.style.background = 'rgb(253, 219, 23)'
    area3.innerHTML = '4'
    area3.style.background = 'rgb(64, 255, 47)'
    area4.innerHTML = '1'
    area4.style.background = 'coral'
    area5.innerHTML = '2'
    area5.style.background = 'cornflowerblue'
}

area3.onclick = function() {

    area1.innerHTML = '4'
    area1.style.background = 'rgb(64, 255, 47)'
    area2.innerHTML = '2'
    area2.style.background = 'cornflowerblue'
    area3.innerHTML = '1'
    area3.style.background = 'coral'
    area4.innerHTML = '3'
    area4.style.background = 'rgb(253, 219, 23)'
    area5.innerHTML = '5'
    area5.style.background = 'rgb(140, 0, 255)'
}

area4.onclick = function() {

    area1.innerHTML = '3'
    area1.style.background = 'rgb(253, 219, 23)'
    area2.innerHTML = '5'
    area2.style.background = 'rgb(140, 0, 255)'
    area3.innerHTML = '2'
    area3.style.background = 'cornflowerblue'
    area4.innerHTML = '4'
    area4.style.background = 'rgb(64, 255, 47)'
    area5.innerHTML = '1'
    area5.style.background = 'coral'

}

area5.onclick = function() {

    area1.innerHTML = '1'
    area1.style.background = 'coral'
    area2.innerHTML = '4'
    area2.style.background = 'rgb(64, 255, 47)'
    area3.innerHTML = '5'
    area3.style.background = 'rgb(140, 0, 255)'
    area4.innerHTML = '2'
    area4.style.background = 'cornflowerblue'
    area5.innerHTML = '3'
    area5.style.background = 'rgb(253, 219, 23)'

}
