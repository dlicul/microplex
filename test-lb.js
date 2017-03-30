var i = 1
var http = require('http')
var success=[]
var failed=[]
var N = 1000
var success_keys = {}
var failed_keys = {}
console.time('send-requests')
console.log("starting " + N + " requests...")
function done() {
    console.log("done.")
    console.timeEnd('send-requests')
    console.log(success.length + "/" + failed.length)
    console.log(success_keys)
    console.log(failed_keys)
}

for (; i <= N; i++) {
    getRequest(i, N)
}

function getRequest(id, N) {
    http.get({ host: "localhost", port: 80, path: "/controller"}, function(response){
        var content = ""
        response.on('data', function(data) {
            content += data
        })
        response.on('end', function() {
            success.push(content)
            success_keys[content] =  (success_keys[content] || 0) + 1
            if (id == N) {
                done();
            }
        })
    }).on('error', function(err) {
        failed.push(err)
        failed_keys[err] += (failed_keys[err] || 0) + 1
    })
}
