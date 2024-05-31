const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// DAY EXTRACTION FUNCTION 
export function currentDay(){
    const date = new Date()
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex]
}