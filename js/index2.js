$(document).ready(function () {
  const $content = $('#content');
  const url = 'http://localhost:5555';
  $('#usersMenu').click(function () {
    $content.empty();

    $content.append(`<h1>Users</h1>`);

    $content.append(`<br/>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Search with UserId">
        <span class="input-group-btn">
          <button id="searchWithUserId" class="btn btn-primary" type="button">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
    `);

    $('#searchWithUserId').click(function () {
      $.get(`${url}/user/rR4I3Sz9fSMSgLwmMSXvCJvDkEE2`).done(function (data) {
        console.log(data);

        $content.append(`
          <br/>
          <h1 class="text-center text-capitalize">${data.name}</h1>
          <h2 class="text-center">${data.phone}</h2>
          <h2 class="text-center">${data.status}</h2>
          <h2 class="text-center">${data.blood_group}</h2>
          <br/><br/>
        `);


        var arr = Object.keys(data.userImages);

        for (let i = 0; i < arr.length; i += 3) {

          $content.append(`
          <div id="card-group-${i}" class="card-columns row p-4">
          </div>
          `);

          $(`#card-group-${i}`).append(`
            <div class="card col">
              <img style="height: 400px" class="card-img-top" src="${data.userImages[arr[i]].url}" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">${data.userImages[arr[i]].title}</h4>
                <p class="card-text">${data.userImages[arr[i]].description}</p>
              </div>
            </div>
          `);
          if (i + 1 < data.userImages.length) {
            $(`#card-group-${i}`).append(`
            <div class="card col">
              <img style="height: 400px" class="card-img-top" src="${data.userImages[arr[i + 1]].url}" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">${data.userImages[arr[i + 1]].title}</h4>
                <p class="card-text">${data.userImages[arr[i + 1]].description}</p>
              </div>
            </div>
          `);
          } else {
            $(`#card-group-${i}`).append(`
            <div class="col">
              
            </div>
          `);
          }


          if (i + 2 < data.userImages.length) {
            $(`#card-group-${i}`).append(`
            <div class="card col">
              <img style="height: 400px" class="card-img-top" src="${data.userImages[arr[i + 2]].url}" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">${data.userImages[arr[i + 2]].title}</h4>
                <p class="card-text">${data.userImages[arr[i + 2]].description}</p>
              </div>
            </div>
          `)
          } else {
            $(`#card-group-${i}`).append(`
            <div class="col">
              
            </div>
          `);
          }


        }


      }).fail(function (err) {
        console.log(err);
      })
    })
  });

  $('#reportsMenu').click(function () {
    $content.empty();

    $content.append(`<h1>Reports</h1>`);

    $content.append(`<br/>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Search with UserId">
        <span class="input-group-btn">
          <button id="searchWithUserId" class="btn btn-primary" type="button">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
    `);

    $('#searchWithUserId').click(function () {
      $content.empty();

      $content.append(`<h1>Reports</h1>`);

      $content.append(`<br/>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Search with UserId">
        <span class="input-group-btn">
          <button id="searchWithUserId" class="btn btn-primary" type="button">
            <i class="fa fa-search"></i>
          </button>
        </span>
      </div>
      `);
      $.get(`${url}/user/rR4I3Sz9fSMSgLwmMSXvCJvDkEE2`).done(function (data) {
        console.log(data);

        $content.append(`
          <br/>
          <h1 class="text-center text-capitalize">${data.name}</h1>
          <h2 class="text-center">${data.phone}</h2>
          <h2 class="text-center">${data.status}</h2>
          <h2 class="text-center">${data.blood_group}</h2>
          <div class="text-center"><input type="button" id="get_file" value="Grab file">
            <input type="file"  accept="image/x-png,image/gif,image/jpeg" id="my_file">
            <div id="customfileupload">Upload report image</div></div>
          <br/><br/>
          
        `);

          document.getElementById('get_file').onclick = function() {
              document.getElementById('my_file').click();
          };

          $('input[type=file]').change(function (e) {
              $('#customfileupload').html($(this).val());
          });

      }).fail(function (err) {
        console.log(err);
      })
    })
  });
});