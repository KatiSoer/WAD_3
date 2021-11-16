import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList:[
      {id: 1,name: "SnoopCat",body: "Best meower in the hood.",picture: require('../assets/rich_cat2.jpg')},
      {id: 2,name: "KittyMinaj",body: "Let's go to the beach-each and dig a hole in the sand.",picture: require('../assets/cat_wig.jpg')},
      {id: 3,name: "CatOsbourne",body: "Don't tell my wife I'm here.",picture: require("../assets/mystic_cat.jpg")},
      {id: 4,name: "KittyEscobar",body: "I once won $400 in the casino so now I only eat caviar and smoke cigars.",picture: require("../assets/rich_cat.jpg")},
      {id: 5,name: "WhiteEminem",body: "Don't do drugs, don't have unprotected sex, don't be violent. Leave that to me.",picture: require("../assets/thug_cat.jpg")},
      {id: 6,name: "CoolKitty69",body: "I like going on long walks in the neighbours yard. I prefer a well-groomed partner.",picture: require("../assets/beach_cat.jpg")},
      {id: 7,name: "SelfieKing420",body: "On weekdays I'm a family-man, but on weekends I turn into a real party animal.",picture: require("../assets/selfie_cat.jpg")},
      {id: 8,name: "GingerMeow",body: "I like to take care of my owner's garden by digging up the flowers. Looking for a sugarmama.",picture: require("../assets/selfie_cat2.jpg")},
      {id: 9,name: "Mr. Worldwide",body: "An adventurer looking for a sugarkitty to spoil.",picture: require("../assets/tourist_cat.jpg")},
      {id: 10,name: "SexyCat555",body: "Looking for a mature significant other with whom I could destroy my owners plants and cuddle.",picture: require("../assets/serious_cat.jpg")},
      {id: 11,name: "SeriousLover66",body: "A real gentleman looking for a younger kitty.",picture: require("../assets/formal_cat.jpg")}
      ]
  },
  getters: {
    postListsale: state => {
      var postListsale = state.postList.map(post => {
      return{ name: post.name,
      body: post.body,
      picture: post.picture,
      }
      });
     return postListsale
     },
  },
  mutations: {},
  actions: {},
  modules: {},
});
