$(document).ready(function (){
});

const searchTerms = $('#searchTerms')

function searchRepositories() {
  const url = 'https://api.github.com/search/repositories'
  const term = $('#searchTerms').value.params()

  console.log(term)
}
