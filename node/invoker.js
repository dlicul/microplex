var fs = require('fs')

function NodeInvoker() {
    var scriptPath = "./test.js"
    var code = fs.readFileSync(scriptPath, 'utf8')
    var args = { a: 1, b: 2, c: 3 }

    var invoker = this
    var evalStr = '(function(){' + code + '\nreturn main})()'

    try {
        invoker.childMainFunc = eval(evalStr)
    } catch(e) {
        throw "exception when bootstrapping main(): " + e
    }

    if (typeof invoker.childMainFunc !== "function") {
        throw "invalid main() function or function could not be found";
    }

    var result = invoker.childMainFunc(args)
    console.log("result=" + result)
}

NodeInvoker()
