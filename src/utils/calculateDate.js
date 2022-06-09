import moment from "moment";



export const calculateDayAgos = (givenTime) => {
    const current = moment().startOf('day');
    const given = moment(givenTime, "YYYY-MM-DD");

    return moment.duration(given.diff(current)).asDays() *-1 ;
}