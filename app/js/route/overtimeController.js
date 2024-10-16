app.controller('overtimeController',function($scope, $http){
    $scope.overtimeSchedules = [
        {
            ScheduleID: 1,
            ScheduleDate: "2024-10-01T00:00:00",
            StartTime: "18:00:00",
            EndTime: "22:00:00",
            HourlyRate: 200000,
            Status: ""
        },
        {
            ScheduleID: 2,
            ScheduleDate: "2024-10-05T00:00:00",
            StartTime: "19:00:00",
            EndTime: "23:00:00",
            HourlyRate: 250000,
            Status: ""
        },
        {
            ScheduleID: 3,
            ScheduleDate: "2024-10-10T00:00:00",
            StartTime: "17:30:00",
            EndTime: "21:30:00",
            HourlyRate: 220000,
            Status: ""
        },
        {
            ScheduleID: 4,
            ScheduleDate: "2024-10-12T00:00:00",
            StartTime: "20:00:00",
            EndTime: "00:00:00",
            HourlyRate: 240000,
            Status: ""
        },
        {
            ScheduleID: 5,
            ScheduleDate: "2024-10-15T00:00:00",
            StartTime: "18:00:00",
            EndTime: "21:00:00",
            HourlyRate: 230000,
            Status: ""
        }
    ];
    
});