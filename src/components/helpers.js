export const ajaxPromise = (format, url) => {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();

        request.open(format, url, true);
        //request.setRequestHeader('Accept', 'application/json');
        
        request.onload = function() {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject('Page Loaded but something is not OK');
            }
        }
    
        request.onerror = function() {
            reject('Something went wrong...' + request.reponse);
        }

        request.send(null);
    });
}