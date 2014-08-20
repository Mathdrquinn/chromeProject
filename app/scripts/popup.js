'use strict';

console.log('\'Allo \'Allo! Popup');

$(document).ready(function() {

  $.ajax({
    url: 'https://api.github.com/users/CTFigueroa/repos',
    method: 'GET',
    type: 'jsonp',
    success: function(object) {
      var sortedObject = _.sortBy(object, 'pushed_at').reverse();
      var html = '';
      for (var i =0; i < 5; i++){
        html +=
            '<div class=\'repoContainer\'>'
          + '<a href=\'' + sortedObject[i].html_url + '\'>'
          + '<h2 class=\'repoName\'>' + sortedObject[i].name + '</h2>'
          + '</a>'
          + '<p class=\'description\'>' + sortedObject[i].description + '</p>'
          + '<p class=\'updatedDate\'>Last updated ' + moment(sortedObject[i].updated_at).from() + '</p>'
          + '<p class=\'forks\'> Forks: ' + sortedObject[i].forks_count + '</p>'
          + '<p class=\'starGazers\'> Stargazers: ' + sortedObject[i].stargazers_count + '</p>'
          + '</div>';
      }

      $('.repos').html(html);
        }
  })

});
