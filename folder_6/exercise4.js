// write a program to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDay() + 1;
    const months = date.getMonth() ;
    const years = date.getFullYear();

    return `${days}/${months}/${years}`
}

console.log(formatDate());