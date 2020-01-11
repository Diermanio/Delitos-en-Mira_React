import * as $ from "jquery";

function DateTime() {
  $(document).ready(function() {
    //$('.mdb-select').materialSelect();
    $("#datetimepickerReportar").datetimepicker({
      maxDate: new Date(),
      minDate: new Date(2018, 12, 1)
    });
  });
}

export default DateTime;
