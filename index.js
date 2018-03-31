$(document).ready(function (){
});



function searchRepositories() {
  const base = 'https://api.github.com/search/repositories?'
  const terms = {
    q: searchTerms.value
  }
  const url = base + $.param(terms)
  $.get(url).done(displayRepositories).fail(displayError)
}

function displayRepositories(data) {
  const searchTerms = $('#searchTerms')[0]
  const results = $('#results')[0]
  const details = $('#details')[0]
  
  console.log('success', data)
  results.html = ''
  data.items.forEach(rep => {
    results.innerHTML += `<div class='res'>
    ${rep.name}<br>
    ${rep.description}<br>
    <a href="${rep.html_url}">Link</a><br>
    by ${rep.owner.login}<br>
    <a href="${rep.owner.html_url}">Profile</a><br>
    <img src="${rep.owner.avatar_url}">
    </div><br>`
  })
}

function displayError(error) {
  console.log('error', error)
}
