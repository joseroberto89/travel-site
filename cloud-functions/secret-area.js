exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "welcome to the Super Secret Area"
    })
}