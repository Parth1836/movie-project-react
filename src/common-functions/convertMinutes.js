export const convertMinutesToHours = (minutes) => {
    let hours = Math.floor(minutes/60);
    let mins = Math.floor(minutes%60);
    return `${hours} Hour ${mins} minutes`
}