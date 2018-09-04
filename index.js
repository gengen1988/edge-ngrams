module.exports = function Tokenizer(minGram = 1, maxGram = 8, separator = ' ') {
  return function tokenize(str) {
    return str.split(separator).reduce((memo, token) => {
      for (let i = minGram; i <= maxGram && i <= token.length; ++i) {
        memo = [...memo, token.substr(0, i)]
      }
      return memo
    }, [])
  }
}
