function InitializeCheckBoxSlider() {
    $('.checkbox-slider--c').each(function () {
        var checkBox = $(this).find('input');
        checkBox.change(function () {
            var isChecked = $(this).is(':checked') ? true : false;
            $(this).val(isChecked);
        });
    });
}

function InitializDataList() {
    $('.input-data-list').each(function () {
        var sourceTextBox = $(this);
        sourceTextBox.change(function () {
            var targetID = $(this).attr('for');
            var dataList = $('datalist[for="' + targetID + '"]');
            var targetTextBox = $('#' + targetID + '');
            var selectedOpt = $('#' + dataList.attr('id') + ' option[value="' + sourceTextBox.val() + '"]');
            var selectedVal = selectedOpt.attr('data-value');
            targetTextBox.val(selectedVal);
        });
    });
}




