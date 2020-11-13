const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  
  const monthPartials = {
    "jan":"January",
    "feb":"February",
    "mar":"March",
    "apr":"April",
    "may": "May",
    "jun": "June",
    "jul": "July",
    "aug": "August",
    "sep": "September",
    "oct": "October",
    "nov": "November",
    "dec": "December"
  }
  const utils = {
    parseUrlDate: function([year,month,day]){
        let validYear = "";
        let validMonth = "";
    
        let min = 0;
        let max;
    
        if(!isNaN(year)&&parseInt(year)>=0){
            validYear+=parseInt(year);
        }
        else return new Date();
    
        if(monthPartials[month]){
            validMonth+=(months.indexOf(monthPartials[month]));
        }
        else return new Date();
    
        max = new Date(validYear,(parseInt(validMonth)+1).toString(),0).getDate();
    
        if(parseInt(day)>min&&parseInt(day)<=max){
            return new Date(validYear,validMonth,parseInt(day));
        }
    
        return new Date();
    },

    dateFromUrl : function({hash}){
        return utils.parseUrlDate(hash.split("/").slice(-3));
    }
}

export default utils;