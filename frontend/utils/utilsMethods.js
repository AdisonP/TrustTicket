exports.convertTimestampToDateFR = (timestamp) => {
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + year;
}

exports.convertTimestampToDate = (timestamp) => {
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return (month < 10 ? "0" : "") + month + "/" + (day < 10 ? "0" : "") + day + "/" + year;
}


exports.convertTimestampToHour = (timestamp) => {
    var date = new Date(timestamp)
    var h = date.getHours()
    var min = date.getMinutes()
    var pm = date.getTime()
    return h.toString() + 'h' + (min < 10 ? '0' : ' ') + min.toString()
}
exports.convertTimestampToMonth = (timestamp) => {
    var date = new Date(timestamp);
    var month = date.getMonth() + 1;
    return month.toString();
}
