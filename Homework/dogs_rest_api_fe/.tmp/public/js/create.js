(function(){

  $(function(){

    $("#addDogForm").validate({
      errorClass: "text-danger",
      rules: {
        name: {
          type: 'string',
          // required: true,
          // uppercase: true
        },
        breed: {
          type: 'string',
          // required: true,
          // maxLength: 40
        },
        sex: {
          type: 'string',
          // required: true,
          // alpha: true
        },
        age: {
          type: 'string',
          // required: true
        },
        height_in_inches: {
          type: 'integer',
          // required: true,
          // numeric: true
        },
        weight_in_pounds: {
          type: 'integer',
          // required: true,
          // numeric: true
        },
    },
      messages: {
      first_name: {
        required: "success",
        minlength: "unsuccessful"
        },
      }
    })
  })
  //schema: true

})();
