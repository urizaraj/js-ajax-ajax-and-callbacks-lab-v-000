$(document).ready(function (){
});

const searchTerms = $('#searchTerms')[0]

function searchRepositories() {
  const base = 'https://api.github.com/search/repositories?'
  const terms = {
    q: searchTerms.value
  }
  const url = base + $.param(terms)
  $.get(url).done(displayRepositories).failure(displayError)
}

function displayRepositories(data) {
  console.log('success', data)
}

function displayError(error) {
  console.log('error', error)
}
