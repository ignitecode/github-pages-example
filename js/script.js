
/**
 * This will render a new Gif card to the DOM and replace
 * the name and url dynamically.
 */
let renderGif = function(name, url) {
  return `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${url}" />
              <div class="card-body">
                <p class="card-text">${name}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 views</small>
                </div>
              </div>
            </div>
          </div>
          `
}

let search = function(value) {
  let $container = $("#main");
  $container.empty();

  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=${encodeURI(value)}&api_key=dc6zaTOxFJmzC`,
    type: 'GET',
    dataType: 'json'
  }).done((response) => {
    response.data.forEach(gif => {
      $container.append(renderGif(gif.title, gif.images.original.url))
    });
  });
}



$(function() {
  console.log('Loaded & Ready!');
  search("the office");

  $('#search').click(function() {
    // Get input from form field
    let $formValue = $('.form-control').val();
    search($formValue);
  });
});
