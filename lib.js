const normalize = word => word.toLowerCase()
const filterWordByLength = minLength => word => word.length > minLength
const countWords = (acc, word) => {
    acc.set(word, acc.has(word) ? acc.get(word) + 1 : 1)
    return acc
}

const getText = stream =>
    new Promise((resolve, reject) => {
        let text = ''
        stream.on('data', chunk => (text += chunk))
        stream.on('end', () => resolve(text))
        stream.on('error', reject)
    })

module.exports = (readStream, minLength = 2) =>
    getText(readStream).then(text =>
        text
            .split(/[,.:;?!' /\n]/)
            .map(normalize)
            .filter(filterWordByLength(minLength))
            .reduce(countWords, new Map())
    )
