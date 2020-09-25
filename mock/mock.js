const hotcate = require('./hotcate.json');
const swiper = require('./swiper.json');
const datalist = require('./cookbook-data-list.json');
const category = require('./cookbook-category.json');

module.exports = ()=>{
    return {
        "swiperlist" : swiper.swiperlist,
        "hotcat" : hotcate.list,
        "top10" :datalist.data.slice(0,10),
        "categorylist" : category.data,
        "list" : datalist.data,
    }
}