export  function timeDay(type) {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    if (type == 'start') {
        return year + '/' + month + '/' + day
    } else if (type == 'end') {
        return `${year}/${month}/${day} 23:59`
    } else {
        time = new Date(time - (type * 24 * 60 * 60 * 1000))
        year = time.getFullYear();
        month = time.getMonth() + 1;
        if(type=='0'){
            day = time.getDate()+1;
        }else{
            day = time.getDate();
        }
        return year + '/' + month + '/' + day
    }
}