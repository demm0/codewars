module.exports =  function TransportationOnVacation(day){
    return ((day * 40) - (Math.trunc(day/7) * 50) - (Math.trunc((day % 7)/3) * 20));
}