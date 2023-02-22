const express = require('express')
const app = express()
const PORT = 3000
const axios = require('axios')
const cheerio = require('cheerio')
const url = "https://www.nytimes.com/"

axios(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)

        const articles = []

        $('.css-xdandi', html).each(function() {
            const text = $(this).text()
            const link = $(this).find('a').attr('href')
            articles.push({
                text,
                link
            })
        })

        console.log(articles)

    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))