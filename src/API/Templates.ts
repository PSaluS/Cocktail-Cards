import Cocktail from "./types"

const emptyCokcktail: Cocktail = {
    id: null,
    title: null,
    elements: {
        alcohols:[],
        noAlcohols: []
    },
    img: {
        url: "",
        alt: null
    },
    build:  null,
    ice: null,
    content: null,
    author: null

}

export default emptyCokcktail;