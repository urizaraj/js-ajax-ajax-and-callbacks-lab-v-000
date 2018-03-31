$(document).ready(function (){
});

const searchTerms = $('#searchTerms')[0]
const results = $('#results')[0]
const details = $('#details')[0]

function searchRepositories() {
  const base = 'https://api.github.com/search/repositories?'
  const terms = {
    q: searchTerms.value
  }
  const url = base + $.param(terms)
  $.get(url).done(displayRepositories).fail(displayError)
}

function displayRepositories(data) {
  console.log('success', data)
}

function displayError(error) {
  console.log('error', error)
}
