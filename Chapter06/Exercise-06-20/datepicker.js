(function() {

  angular
    .module('datepicker', [])
    .config(function($mdDateLocaleProvider){
      $mdDateLocaleProvider.months = [
        "Janu�r", "Febru�r", "M�rcius", "�prilis",
        "M�jus", "J�nius", "J�lius", "Augusztus",
        "Szeptember", "Okt�ber", "November", "December"
      ];
      var shortMonths = [
        "Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
        "Jul", "Aug", "Szep", "Okt", "Nov", "Dec"
      ];
      $mdDateLocaleProvider.shortMonths = shortMonths;

      $mdDateLocaleProvider.days = [
        "vas�rnap", "h�tf�", "kedd", "szerda",
        "cs�t�rt�k", "p�ntek", "szombat"
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
        return weekNumber + ". h�t";
      };

      $mdDateLocaleProvider.msgCalendar = "Naptar";
      $mdDateLocaleProvider.msgOpenCalendar = "Naptar megnyitasa";
    });
})();