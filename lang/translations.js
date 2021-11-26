import axios from 'axios'
export default async (context, locale) => {
  return await axios
    .get(`https://api.betacore.nl/language/61a0b798ed04e55b926a3dc7`)
    .then(res => {
      var language = res.data.find(language => language.code === locale)
      return language.translations
    })
}
