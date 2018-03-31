$(document).ready(function (){
});

const searchTerms = $('#searchTerms')[0]

function searchRepositories() {
  const url = 'https://api.github.com/search/repositories'
  const term = searchTerms.value

  console.log(term)
}
