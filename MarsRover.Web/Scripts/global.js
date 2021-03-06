/// <reference path="global.js" />
function CheckRequiredFields() {
    refreshValidations();
    var validated = true;
    var requiredValidationSpan = $('#field-validation-span');
    $('.required-input').each(function () {
        var input = $(this);
        var label = input.attr('placeholder');
        if (input.val() == "" || input.val() == null) {
            validated = false;
            var toAppend = requiredValidationSpan.clone();
            toAppend.addClass('field-validation-span');
            toAppend.find('span').text(label + ' is required');
            input.after(toAppend);
        }
    });
    return validated;
}


function CheckFields()
{
    refreshValidations();
    var validated = true;
    var requiredValidationSpan = $('#field-validation-span');
    $('label').each(function () {
        var labelFor = $(this).attr('for');
        var labelForText = $(this).text();
        var input = $('#' + labelFor + '');
        if (input.val() == "" || input.val() == null) {
            validated = false;
            var toAppend = requiredValidationSpan.clone();
            toAppend.addClass('field-validation-span');
            toAppend.attr('data-valmsg-for', labelFor);
            toAppend.find('span').attr('for', labelFor);
            toAppend.find('span').text(labelForText + ' is required');
            input.after(toAppend);
        }
    });
    return validated;
}

function refreshValidations()
{
    $('.field-validation-span').each(function () {
        $(this).remove();
    });
}

function ShowModalConfirm(textTitle, textBody, functionOnclick) {
    var modal = $('#modal_conf');
    modal.find('#modal_conf_header_title').text(textTitle);
    modal.find('#modal_conf_body_text').text(textBody);
    modal.find('#modal_conf_btn_yes').attr('onclick', functionOnclick);

    modal.modal({ backdrop: 'static' }, 'show');
}

function ShowModalError(message, backdrop)
{
    var modal = $('#modal_notify');
    var modalMessage = modal.find('#modal_notify_message');
    modalMessage.text(message);
    backdrop ? modal.modal({ backdrop: 'static' }, 'show') : modal.modal('show');
}

function ShowModalSuccess(message, backdrop) {
    var modal = $('#modal_success');
    var modalMessage = modal.find('#modal_success_message');
    modalMessage.text(message);
    var modalButton = modal.find('#modal_success_button');
    backdrop ? modal.modal({ backdrop: 'static' }, 'show') : modal.modal('show');
    //modal.modal(backdrop ? "{ backdrop: 'static' }, 'show')" : "modal.modal('show')");
}

function ShowModalSuccessRedirect(message, redirectLocation, hasLoadingScreen) {
    var modal = $('#modal_success');
    var modalMessage = modal.find('#modal_success_message');
    modalMessage.text(message);
    var modalButton = modal.find('#modal_success_button');
    modalButton.attr("onclick", "location.href = '" + redirectLocation + "'; " + (hasLoadingScreen ? "ShowLoadingScreen(); " : ""));
    modal.modal({ backdrop: 'static' }, 'show');
}
function ShowLoadingScreen() {
    $('#modalLoadingScreen').modal({ backdrop: 'static' }, 'show');
}

function HideLoadingScreen() {
    $('#modalLoadingScreen').hide();
    $('.modal-backdrop').remove();
}






function ProcessingLoader() {
    var divProcessing = $('#defaultTable_processing');
    divProcessing.text('');
    divProcessing.removeClass('dataTables_processing');
    divProcessing.addClass('col-12');
    divProcessing.append('<div class="lds-bar py-0">Processing... <div></div><div></div><div></div><div></div></div>');
    $('#defaultTable_length').css('padding-bottom', '15px');
}


