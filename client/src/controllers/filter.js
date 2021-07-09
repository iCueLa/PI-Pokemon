export function orderAZ (array) {
    return array.sort(function(a, b) {
        if(a.name < b.name){
            return -1;
        }
        if( a.name > b.name) {
            return 1;
        }
       return 0;
    });
};

 export function orderZA(array) {
    return array.sort(function (a, b) {
        if(a.name < b.name) {
            return 1;
        }
        if( a.name > b.name) {
            return -1;
        }
        return 0;
    })
}