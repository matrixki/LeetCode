/*

Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.
*/

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
 var dayOfTheWeek = function(day, month, year) {
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let totalDays = 4;
    function isLeapYear(year){
        return (year%4===0 && year%100!==0) || year%400===0;
    }
    for(let i=1971;i<year;i++){
        totalDays += isLeapYear(i) ? 366 : 365;
    }
    for(let i=1;i<month;i++){
        if(i===2 && isLeapYear(year)){
            totalDays += 1;
        }
        totalDays += days[i];
    }
    totalDays += day;
    return names[totalDays%7];
};