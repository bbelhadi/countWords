const assert = require('assert')
const fs = require('fs')
const countWords = require('./../lib')
const readStreamBasic = fs.createReadStream('./tests/data.test.txt', {
    encoding: 'utf-8',
})
const readStreamCase = fs.createReadStream('./tests/data.test.case.txt', {
    encoding: 'utf-8',
})

const main = async () => {
    console.log('Tests running...')

    // DATA CONTEXT
    const actual = await countWords(readStreamBasic, 2)
    const actualCaseAndLength = await countWords(readStreamCase, 5)

    // DATA EXPECTED
    const expectedDefault = new Map([
        ['lorem', 1],
        ['ipsum', 1],
        ['dolor', 1],
        ['sit', 1],
        ['amet', 1],
        ['sanctus', 1],
        ['forensibus', 1],
        ['assueverit', 1],
        ['cum', 2],
        ['habemus', 1],
        ['deterruisset', 1],
        ['his', 1],
        ['inermis', 1],
        ['referrentur', 1],
        ['nam', 1],
        ['dicunt', 1],
        ['fastidii', 1],
        ['adipisci', 1],
        ['sed', 1],
        ['vide', 1],
        ['utroque', 1],
        ['usu', 1],
        ['omnium', 1],
        ['invidunt', 1],
        ['duo', 1],
        ['vidisse', 1],
        ['accusamus', 1],
        ['habeo', 1],
        ['elitr', 1],
        ['eos', 1],
        ['est', 1],
        ['movet', 1],
        ['quidam', 1],
        ['iisque', 1],
    ])

    const expectedCaseAndLength = new Map([
        ['sanctus', 2],
        ['forensibus', 2],
        ['assueverit', 2],
        ['habemus', 2],
        ['deterruisset', 2],
        ['inermis', 2],
        ['referrentur', 2],
    ])

    // BEHAVIORS TESTS
    assert.deepStrictEqual(
        actual,
        expectedDefault,
        'EXPECTED : countWords with "Default Data" and max length 2'
    )

    assert.deepStrictEqual(
        actualCaseAndLength,
        expectedCaseAndLength,
        'EXPECTED : countWords with "Case Data" and max length 5'
    )
}

main().then(() => console.log('ALL success ! :)'))
