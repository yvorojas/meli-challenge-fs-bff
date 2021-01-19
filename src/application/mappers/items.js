import { DEFAULT_AUTHOR } from '../constants'

const getPicture = (pictures) => (pictures.length > 0 ? pictures[0].url : null)

const mapPrice = (price, currency) => {
  const splittedPrice = price.toString().split('.')
  return {
    currency,
    amount: parseInt(splittedPrice[0]),
    decimals: splittedPrice.length > 1 ? parseInt(splittedPrice[1]) : 0,
  }
}

const mapItem = ({
  id,
  title,
  price,
  currency_id: currency,
  thumbnail: picture,
  condition,
  shipping: { free_shipping },
  address,
}) => ({
  id,
  title,
  price: mapPrice(price, currency),
  picture,
  condition,
  free_shipping,
  address: address ? address.state_name : null,
})

const mapItems = (results) => results.map(mapItem)

const mapCategories = (categories) =>
  categories.map((category) => category.name)

export const mapToQueryResponse = ({ results }, categories) => ({
  author: DEFAULT_AUTHOR,
  categories: mapCategories(categories),
  items: mapItems(results),
})

export const mapToItemByIdResponse = ({ item, description }, categories) => {
  const mappedItem = {
    author: DEFAULT_AUTHOR,
    item: {
      ...mapItem(item),
      picture: getPicture(item.pictures),
      description: description ? description.plain_text : null,
      sold_quantity: item.sold_quantity,
    },
    categories: mapCategories(categories),
  }
  return mappedItem
}
