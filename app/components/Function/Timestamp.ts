export function convertToIST(unixTimestamp:number) {
    // Create a Date object from the Unix timestamp (in milliseconds)
    const date = new Date(unixTimestamp * 1000);
  
    // Convert the date to IST (UTC +5:30)
    const istOffset = 5.5 * 1000; // 5.5 hours in milliseconds
    const istDate = new Date(date.getTime() + istOffset);
  
    // Format the date to a readable string in IST
    const options:any = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    return istDate.toLocaleString('en-IN', options);
  }
  
  const sunriseTimestamp = 1717159887;
  export const sunriseIST = convertToIST(sunriseTimestamp);
  
  