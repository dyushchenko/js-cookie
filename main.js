document.getElementById('search').onclick = function() {
    let query = document.getElementById('query').value
    window.location.href = 'https://google.com/search?q=' + query
}

document.getElementById('add_link').onclick = function() {
    let cookies = document.cookie.split(';')
    let cookie = cookies.toString().split('=')
    document.cookie = cookie[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    let name = document.getElementById('name').value
    let link = document.getElementById('link').value

    let ul = document.getElementById('links')
    
    let li = document.createElement('li')
    li.classList.add('list-group-item')

    let group_link = document.createElement('a')
    group_link.href = link
    group_link.textContent = name

    li.appendChild(group_link)
    ul.appendChild(li)

    document.cookie = name + '=' + link
}

function on_load() {
    let cookies = document.cookie.split(';')
    let cookie = cookies.toString().split('=')

    let name = cookie[0]
    let link = cookie[1]

    let ul = document.getElementById('links')
    
    let li = document.createElement('li')
    li.classList.add('list-group-item')

    let group_link = document.createElement('a')
    group_link.href = link
    group_link.textContent = name

    li.appendChild(group_link)
    ul.appendChild(li)
}