// Show and hide Dependent Type forms
$(function () {
  $("input[name='patienttype']").click(function () {
    if ($("#dependent").is(":checked")) {
      $(".dependenttype").show();
      $("#pin2").prop("disabled", false);
      $("#dependenttype_default").prop("checked", true);
    } else {
      $(".dependenttype").hide();
      $(".dependenttype").prop("checked", false);
      $("#pin2").prop("disabled", true);
      $("#withdisability").prop("checked", false);
      $("#withauthorization").prop("checked", false);
    }
  });
});

// Disable & hide PIN input when Non-Member is Selected
$(function () {
  $("input[name='patienttype']").click(function () {
    if ($("#nonmember").is(":checked")) {
      $("#pinform").hide();
      $("#pin1").prop("disabled", true);
      $("#pin2").prop("disabled", true);
    } else {
      $("#pinform").show();
      $("#pin1").prop("disabled", false);
      $("#pin2").prop("disabled", false);
    }
  });
});

