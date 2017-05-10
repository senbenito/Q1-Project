
$(document).ready(function() {
  console.log('Ready to go!');
  $('.modal').modal();
  $('select').material_select();
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    });
  var results = [];
  $('#results').hide();

  function fillResults(data) {
    console.log('filling results');
    var cuisinePlaylist = [];

    for (var i = 0; i < 3; i++) {
      var recipeImage = $(`#recipe${i}img`);
      var recipeTitle = $(`.recipe${i}title`);
      var recipeContent = $(`#recipe${i}content`);
      var recipeMethod = $(`#recipe${i}method`);
      var recipeLink = $(`#recipe${i}link`);

      recipeImage.attr("src", `${data.results[i].image}`);
      recipeTitle.html(`${data.results[i].title}`);
      recipeContent.html(`Ready in <span class="dataDigit">${data.results[i].readyInMinutes}</span> minutes
      <br>Serves <span class="dataDigit">${data.results[i].servings}</span>`);
      recipeMethod.html(`${data.results[i].analyzedInstructions}`);
      recipeLink.attr("href", `${data.results[i].sourceUrl}`);

      switch (data.results[i].cuisines[0]) {
        case "african":
        cuisinePlaylist[i] = 'qEwnHf9Q23k?list=RDqEwnHf9Q23k';
        break;

        case "chines":
        cuisinePlaylist[i] = 'rERvjIrkrRc?list=RDrERvjIrkrRc';
        break;

        case "japanes":
        cuisinePlaylist[i] = 'DkW1iTyS8dk?list=RDDkW1iTyS8dk';
        break;

        case "asian":
        switch (data.results[i].cuisines[1]) {
          case "korean":
          cuisinePlaylist[i] = '4tBnF46ybZk?list=PLCC67A0CADDE19926';
          break;

          case "vietnames":
          cuisinePlaylist[i] = 'fgPrp1KElQk?list=RDfgPrp1KElQk';
          break;

          case "thai":
          cuisinePlaylist[i] = 'SXXK4P2Ogs0?list=RDSXXK4P2Ogs0';
          break;

          default://indian
          cuisinePlaylist[i] = 'QE7uASiH9cM?list=RDQE7uASiH9cM';
        }//closes asian switch
        break;

        case "european":
        switch (data.results[i].cuisines[1]) {

          case "irish":
          cuisinePlaylist[i] = 'Ldf7T6TlV-o?list=PL4lVd8L3ra0GWQkVkiB9iNJo06aXyZoYS';
          break;

          case "eastern european":
          cuisinePlaylist[i] = '8zPfGezduJI?list=RD8zPfGezduJI';
          break;

          default://english
          cuisinePlaylist[i] = 'Qyclqo_AV2M?list=PLz2n4ChRKOrfqsabO_FKd70qHY67BDzHh';
        }//closes european switch
        break;

        case "mediterranean":
        switch (data.results[i].cuisines[2]) {
          case "french":
          cuisinePlaylist[i] = 'Q3Kvu6Kgp88?list=RDQ3Kvu6Kgp88';
          break;

          default://italian
          cuisinePlaylist[i] = 'ERD4CbBDNI0?list=RDXaeBRqIqQkI';
        }//closes mediterranean switch
        break;

        case "mexican":
        cuisinePlaylist[i] = 'klVe7_2UEQ8?list=RDQMarbGOGwBBQ4';
        break;

        case "spanish":
        cuisinePlaylist[i] = 'A93m5DIbLw8?list=PLuS01ZdIZd4eWmMs8Q51oV7094Wx72jSb';
        break;

        case "jewish":
        cuisinePlaylist[i] = 'g3bjZlmsb4A?list=RDg3bjZlmsb4A';
        break;

        case "american":
        cuisinePlaylist[i] = 'nKI8Mo_v3d4?list=PLlu4hx7GfQgxQQq-5AaDFzn-EVvsQO2se';
        break;

        case "cajun":
        cuisinePlaylist[i] = 'fa8vyTfugcI?list=RDfa8vyTfugcI';
        break;

        case "southern":
        cuisinePlaylist[i] = 'Be-hXxc5yN0?list=RDBe-hXxc5yN0';
        break;

        case "greek":
        cuisinePlaylist[i] = 'SVAzB8Uj0KM?list=RDSVAzB8Uj0KM';
        break;

        case "german":
        cuisinePlaylist[i] = '_s44K8rkPRE?list=RD_s44K8rkPRE';
        break;

        case "scandinavian":
        cuisinePlaylist[i] = 'xFrGuyw1V8s?list=RDxFrGuyw1V8s';
        break;

        case "caribbean":
        cuisinePlaylist[i] = 'eMTYOYFyvTo?list=RDeMTYOYFyvTo';
        break;

        case "south american":
        cuisinePlaylist[i] = 'qGKrc3A6HHM?list=RDqGKrc3A6HHM';
        break;

        default://empty
        cuisinePlaylist[i] = 'ktjJtDmsy8A?list=RDktjJtDmsy8A';

      }
    }//closes fillResults for loop
    $("#youtube-playlist0").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist[0]}`);
    $("#youtube-playlist1").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist[1]}`);
    $("#youtube-playlist2").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist[2]}`);
  }//closes fillResults

  $('#searchButton').on('click', function(event) {
    event.preventDefault();
    $('#results').show();
    var query = $('#keyword').val();
    console.log(query);
    var cuisine = $("#cuisine").val() || [];
    console.log(cuisine);

    fillResults(chicken); //offline mode

    // var $xhr = $.getJSON(`https://g-spoonacular-shannon.herokuapp.com/recipes/searchComplex?addRecipeInformation=true&cuisine=${cuisine.toString()}&limitLicense=false&number=3&offset=0&query=${query}&ranking=1&type=main+course`);
    //
    // $xhr.done(function(data) {
    //   if ($xhr.status !== 200) {
    //     return;
    //   }
    //   console.log(data);
    //   fillResults(data);
    // });//closes $xhr.done
    //
    // $xhr.fail(function() {
    //   alert("AJAX failed!");
    // });//closes $xhr.fail

  }); //closes #searchButton on('click function

  $('#chickenButton').on('click', function(event){
    console.log("Chicken Caught!");
    event.preventDefault();
    $('#results').show();
    fillResults(chicken);

  }); //closes #chickenButton on('click function

  var chickenParse = sessionStorage.getItem("chicken");
  var chicken = JSON.parse(chickenParse);
  console.log(chicken);
}); //document.ready closing
