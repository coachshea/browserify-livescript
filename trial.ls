num = require './trial.js'
func = (x) -> x*2
func2 = (x) -> x*x
module.exports = num |> func |> func2
