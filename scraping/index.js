import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

const URLS = {
   loaderboard: 'https://kingsleague.pro/estadisticas/clasificacion/',
}

async function scrape(url) {
   const res = await fetch(url)
   const html = await res.text()

   return cheerio.load(html)
}

async function getLeaderboard() {
   const $ = scrape(URLS.loaderboard)

   $('table tbody tr').each((index, el) => {
      const rawTeam = $(el).find('.fs-table-text_3').text().trim()
      const rawVictories = $(el).find('.fs-table-text_4').text().trim()
      const rawLoses = $(el).find('.fs-table-text_5').text().trim()
      const rawGoalsScored = $(el).find('.fs-table-text_6').text().trim()
      const rawGoalsConceded = $(el).find('.fs-table-text_7').text().trim()
      const rawCardsYellow = $(el).find('.fs-table-text_8').text().trim()
      const rawCardsRed = $(el).find('.fs-table-text_9').text().trim()

      console.log({
         rawTeam,
         rawVictories,
      })
   })
}
