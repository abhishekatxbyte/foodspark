import { createSlice } from '@reduxjs/toolkit'
let dummy_data = {
    "id": 1,
    "bgColor":'red',
    "title": "Zomato API",
    "HeroImg": "./assets/images/ZomatoAPIImg/Zomato_logo.png",
    "HeroData": 'Zomato restaurant listing API will extract and download the data from Zomato, including restaurant details, reviews, ratings, etc., in the required format, such as CSV, Excel, etc.    ',
    "efficientApisHeader": "Most Efficient Zomato APIs",
    "efficientApisHeader": ["Scrape Zomato restaurant and food menu data without any limits", "Extract past data from users’ profiles", "Built-in data filters to get updates easily", "Best Zomato food delivery scraping API for huge-scale crawling", "Extract data occasionally"],
    "sectionData": [{
        "id":1, 
        "imageUrl":"",
        "header": "Scrape Region-Wise Zomato Food Delivery Competitor Price Data",
        "content": "Our web scraping services can help you get maximum data appropriate for your requirements with an enormous database. Foodspark offers the best food data scraping services by extracting the price data from Zomato."
    },{
        "id":2, 
        "imageUrl":"",
        "header": "Scrape Region-Wise Zomato Food Delivery Competitor Price Data",
        "content": "Our web scraping services can help you get maximum data appropriate for your requirements with an enormous database. Foodspark offers the best food data scraping services by extracting the price data from Zomato."
    },{
        "id":3, 
        "imageUrl":"",
        "header": "Scrape Region-Wise Zomato Food Delivery Competitor Price Data",
        "content": "Our web scraping services can help you get maximum data appropriate for your requirements with an enormous database. Foodspark offers the best food data scraping services by extracting the price data from Zomato."
    }]
}
let dummy_data_array=[dummy_data,dummy_data,dummy_data]
console.log(dummy_data_array)
const initialState = {
    apiData: dummy_data,
    apiDataArray: [],
    headers: [],
    filteredData: []
}

export const slice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        ADD_DATA: (state, action) => {
            state.apiData = action.payload
            state.apiDataArray = [...state.apiDataArray, action.payload]
        },
        SET_HEADERS(state, action) {
            state.headers = action.payload
        },
        SET_FILTERED_DATA(state, action) {
            state.filteredData = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD_DATA, SET_HEADERS, SET_FILTERED_DATA } = slice.actions

export default slice.reducer