function ajax(options) {
    var method = options.method || "GET";
    var url = options.url || "";
    var data = options.data || "";
    var isAsync = options.isAsync === undefined ? true : options.isAsync;
    var success = options.success || function() {};
    var error = options.error || function() {};

    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText));
        }
    }
    xhr.onerror = function() {
        error("error");
    }

    if (method == 'GET') {
        if (url.indexOf('?') > -1) {
            if (url.indexOf('?') === url.length - 1) {
                url += data;
            } else {
                url += '&' + data;
            }
        } else {
            url += '?' + data;
        }
        xhr.open(method, url, isAsync);
        xhr.send();
    }
}