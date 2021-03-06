
function GetData(id)
{
    $.getJSON('/Controller/Action/', { methodVar: value }, function (response) {
        if (response.success) {
            //get values
            var data = JSON.parse(JSON.stringify(response.data));
            var firstName = data['FirstName'];

            //ShowModalSuccess('Message Here', false);
            ShowModalSuccess(response.message, false);
        }
        else {
            ShowModalError(response.message, true);
        }
    });
}


function PostMethod(id) {

    var formData = new FormData();
    formData.append('id', id);

    $.ajax({
        url: '/Controller/Action/',
        type: "POST",
        contentType: false,
        processData: false,
        data: formData,
        success: function (response) {
            if(response.success) {

            }
            else {

            }
        },
        fail: function () {
           
        }
    });
}


function PostMethodForm(action) {
    //get all parameter within FORM
    var formAction = $('#FormID').attr("action");
    var formData = new FormData($('#FormID').get(0));

    //add custom parameter
    var paramVal = 1;
    formData.append('paramName', paramVal);


    contentType = false;
    processData = false;
    $.ajax({
        type: "POST",
        url: formAction,
        data: formData,
        dataType: "json",
        contentType: contentType,
        processData: processData,
        success: function (response) {
            if (response.success) {

            }
            else {

            }
        },
        fail: function () {

        }

    });
}
