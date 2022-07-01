// module.exports.getDate = function(){
//     var today = new Date();
//     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     return today.toLocaleDateString("en-IN", options);
// }
exports.getDate = function(){
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString("en-IN", options);
}
console.log(exports.getDate())
// console.log(module.exports.getDate())