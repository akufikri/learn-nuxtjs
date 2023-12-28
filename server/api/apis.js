export default defineCachedEventHandler(async (event) => {
      // handle query params
      // const { name } = getQuery(event)
      // handle post data
      // const { age } = await readBody(event)
      // api call dat
      const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_6RGFMB1WlsaIoWqPrRci7rfLqqSVekxRm8YYexod')
      return data
})