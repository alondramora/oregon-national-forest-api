const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT ?? 8000

app.use(cors())


const forests = {
    'deschutes': {
        'name': 'Deschutes',
        'established': 'July 1, 1908',
        'acres': '1,596,900',
        'location': 'Deschutes, Klamath, Lake, and Jefferson counties',
        'info': 'https://www.fs.usda.gov/deschutes/'
    },
    'fremontwinema': {
        'name': 'Fremont-Winema',
        'established': '2002',
        'acres': '2,252,587',
        'location': 'Lake, Klamath counties',
        'info': 'https://www.fs.usda.gov/fremont-winema/'
    },
    'malheur': {
        'name': 'Malheur',
        'established': 'July 1, 1908',
        'acres': '1,465,287',
        'location': 'Grant, Harney, Baker, and Malheur counties',
        'info': 'https://www.fs.usda.gov/malheur'
    },
    'mthood': {
        'name': 'Mt Hood',
        'established': 'July 1, 1908',
        'acres': '1,071,466',
        'location': 'Clackamas, Hood River, Wasco, Multnomah, Marion, and Jefferson counties',
        'info': 'https://www.fs.usda.gov/mthood'
    },
    'ochoco': {
        'name': 'Ochoco',
        'established': 'July 1, 1911',
        'acres': '851,033',
        'location': 'Crook, Harney, Wheeler, Grant counties',
        'info': 'https://www.fs.usda.gov/ochoco'
    },
    'rogueriversiskiyou': {
        'name': 'Rogue River–Siskiyou',
        'established': '2004 (1906)',
        'acres': '1,723,179',
        'location': 'Coos, Curry, Douglas, Jackson, Josephine, and Klamath counties in Oregon; Del Norte, and Siskiyou counties in California',
        'info': 'https://www.fs.usda.gov/rogue-siskiyou/'
    },
    'siuslaw': {
        'name': 'Siuslaw',
        'established': 'July 1, 1908',
        'acres': '634,207',
        'location': 'Lane, Lincoln, Tillamook, Douglas, Yamhill, Benton, Coos, and Polk counties',
        'info': 'https://www.fs.usda.gov/siuslaw'
    },
    'umatilla': {
        'name': 'Umatilla',
        'established': 'July 1, 1908',
        'acres': '1,407,087',
        'location': 'Umatilla, Grant, Columbia, Morrow, Wallowa, Union, Wheeler counties in Oregon; Garfield, Asotin, Walla Walla counties of Washington',
        'info': 'https://www.fs.usda.gov/umatilla'
    },
    'umpqua': {
        'name': 'Umpqua',
        'established': 'July 2, 1907',
        'acres': '983,129',
        'location': 'Douglas, Jackson, Lane counties',
        'info': 'https://www.fs.usda.gov/umpqua'
    },
    'wallowawhitman': {
        'name': 'Wallowa-Whitman',
        'established': 'May 6, 1905',
        'acres': '2,392,508',
        'location': 'Wallowa, Baker, Union, Grant, and Umatilla counties',
        'info': 'https://www.fs.usda.gov/wallowa-whitman'
    },
    'willamette': {
        'name': 'Willamette',
        'established': 'July 1, 1933',
        'acres': '1,675,407',
        'location': 'Lane, Linn, Marion, Douglas, Clackamas, and Jefferson counties',
        'info': 'https://www.fs.usda.gov/willamette'
    },
    'unknown': {
        'name': 'unknown',
        'established': 'unknown',
        'acres': 'unknown',
        'location': 'unkown',
        'info': 'unkown'
    }
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/css/normalize.css', (request, response) => {
    response.sendFile(__dirname + '/css/normalize.css')
})

app.get('/css/style.css', (request, response) => {
    response.sendFile(__dirname + '/css/style.css')
})

app.get('/api/:name', (request, response) => {
    const forestName = request.params.name.toLowerCase()
    if (forests[forestName]) {
        response.json(forests[forestName])
    } else {
        response.json(forests['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})