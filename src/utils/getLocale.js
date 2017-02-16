const DEFAULT_LOCALE = 'en-gb'

const getLocale = () => ((window.navigator && window.navigator.language) || DEFAULT_LOCALE).split('-')[0]

export default getLocale
