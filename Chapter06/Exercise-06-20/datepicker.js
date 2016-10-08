(function() {

  angular
    .module('datepicker', [])
    .config(function($mdDateLocaleProvider){
      $mdDateLocaleProvider.months = [
        "Január", "Február", "Március", "Április",
        "Május", "Június", "Július", "Augusztus",
        "Szeptember", "Október", "November", "December"
      ];
      var shortMonths = [
        "Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
        "Jul", "Aug", "Szep", "Okt", "Nov", "Dec"
      ];
      $mdDateLocaleProvider.shortMonths = shortMonths;

      $mdDateLocaleProvider.days = [
        "vasárnap", "hétfõ", "kedd", "szerda",
        "csütörtök", "péntek", "szombat"
      ];
      $mdDateLocaleProvider.shortDays = [
        "V", "H", "K", "Sze", "Cs", "P", "Szo"
      ];

      $mdDateLocaleProvider.firstDayOfWeek = 1;
      $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'L', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
      };

      $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('L');
      };

      $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
        return date.getFullYear() + " " + shortMonths[date.getMonth()];
      };

      $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
        return weekNumber + ". hét";
      };

      $mdDateLocaleProvider.msgCalendar = "Naptar";
      $mdDateLocaleProvider.msgOpenCalendar = "Naptar megnyitasa";
    });
})();