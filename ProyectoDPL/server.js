const express = require('express'); 
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

let store = {
		  "dishes": [
			    {
			      "name": "Uthappizza",
			      "image": "images/uthappizza.png",
			      "category": "mains",
			      "label": "Hot",
			      "price": "4.99",
			      "featured": "true",
			      "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
			      "comments": [
			        {
			          "rating": 5,
			          "comment": "Imagine all the eatables, living in conFusion!",
			          "author": "John Lemon thundertruck",
			          "date": "2012-10-16T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
			          "author": "Paul McVites",
			          "date": "2014-09-05T17:57:28.556094Z"
			        },
			        {
			          "rating": 3,
			          "comment": "Eat it, just eat it!",
			          "author": "Michael Jaikishan",
			          "date": "2015-02-13T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Ultimate, Reaching for the stars!",
			          "author": "Ringo Starry",
			          "date": "2013-12-02T17:57:28.556094Z"
			        },
			        {
			          "rating": 2,
			          "comment": "It's your birthday, we're gonna party!",
			          "author": "25 Cent",
			          "date": "2011-12-02T17:57:28.556094Z"
			        }
			      ]
			    },
			    {
			      "name": "Zucchipakoda",
			      "image": "images/zucchipakoda.png",
			      "category": "appetizer",
			      "label": "",
			      "price": "1.99",
			      "featured": "false",
			      "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
			      "comments": [
			        {
			          "rating": 5,
			          "comment": "Imagine all the eatables, living in conFusion!",
			          "author": "John Lemon",
			          "date": "2012-10-16T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
			          "author": "Paul McVites",
			          "date": "2014-09-05T17:57:28.556094Z"
			        },
			        {
			          "rating": 3,
			          "comment": "Eat it, just eat it!",
			          "author": "Michael Jaikishan",
			          "date": "2015-02-13T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Ultimate, Reaching for the stars!",
			          "author": "Ringo Starry",
			          "date": "2013-12-02T17:57:28.556094Z"
			        },
			        {
			          "rating": 2,
			          "comment": "It's your birthday, we're gonna party!",
			          "author": "25 Cent",
			          "date": "2011-12-02T17:57:28.556094Z"
			        }
			      ]
			    },
			    {
			      "name": "Vadonut",
			      "image": "images/vadonut.png",
			      "category": "appetizer",
			      "label": "New",
			      "price": "1.99",
			      "featured": "false",
			      "description": "A quintessential ConFusion experience, is it a vada or is it a donut?",
			      "comments": [
			        {
			          "rating": 5,
			          "comment": "Imagine all the eatables, living in conFusion!",
			          "author": "John Lemon",
			          "date": "2012-10-16T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
			          "author": "Paul McVites",
			          "date": "2014-09-05T17:57:28.556094Z"
			        },
			        {
			          "rating": 3,
			          "comment": "Eat it, just eat it!",
			          "author": "Michael Jaikishan",
			          "date": "2015-02-13T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Ultimate, Reaching for the stars!",
			          "author": "Ringo Starry",
			          "date": "2013-12-02T17:57:28.556094Z"
			        },
			        {
			          "rating": 2,
			          "comment": "It's your birthday, we're gonna party!",
			          "author": "25 Cent",
			          "date": "2011-12-02T17:57:28.556094Z"
			        }
			      ]
			    },
			    {
			      "name": "ElaiCheese Cake",
			      "image": "images/elaicheesecake.png",
			      "category": "dessert",
			      "label": "",
			      "price": "2.99",
			      "featured": "false",
			      "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
			      "comments": [
			        {
			          "rating": 5,
			          "comment": "Imagine all the eatables, living in conFusion!",
			          "author": "John Lemon",
			          "date": "2012-10-16T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
			          "author": "Paul McVites",
			          "date": "2014-09-05T17:57:28.556094Z"
			        },
			        {
			          "rating": 3,
			          "comment": "Eat it, just eat it!",
			          "author": "Michael Jaikishan",
			          "date": "2015-02-13T17:57:28.556094Z"
			        },
			        {
			          "rating": 4,
			          "comment": "Ultimate, Reaching for the stars!",
			          "author": "Ringo Starry",
			          "date": "2013-12-02T17:57:28.556094Z"
			        },
			        {
			          "rating": 2,
			          "comment": "It's your birthday, we're gonna party!",
			          "author": "25 Cent",
			          "date": "2011-12-02T17:57:28.556094Z"
			        }
			      ]
			    }
			  ],
			  "promotions": [
			    {
			      "name": "Weekend Grand Buffet",
			      "image": "images/buffet.png",
			      "label": "New",
			      "price": "19.99",
			      "featured": "true",
			      "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
			    }
			  ],
			  "leaders": [
			    {
			      "name": "Peter Pan",
			      "image": "images/alberto.png",
			      "designation": "Chief Epicurious Officer",
			      "abbr": "CEO",
			      "featured": "false",
			      "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
			    },
			    {
			      "name": "Dhanasekaran Witherspoon",
			      "image": "images/alberto.png",
			      "designation": "Chief Food Officer",
			      "abbr": "CFO",
			      "featured": "false",
			      "description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
			    },
			    {
			      "name": "Agumbe Tang",
			      "image": "images/alberto.png",
			      "designation": "Chief Taste Officer",
			      "abbr": "CTO",
			      "featured": "false",
			      "description": "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
			    },
			    {
			      "name": "Alberto Somayya",
			      "image": "images/alberto.png",
			      "designation": "Executive Chef",
			      "abbr": "EC",
			      "featured": "true",
			      "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
			    }
			  ],
			  "feedback": []
			}

let app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());


//Dishes
app.get('/dishes', (req, res) => {
	 routes.routesd.getDishes(req,res,store)
	})

	app.post('/dishes', (req, res) => {
	 routes.routesd.addDishes(req,res,store)
	})

	app.put('/dishes/:id/', (req, res) => {
	 routes.routesd.updateDishes(req,res,store)
	})

	app.delete('/dishes/:id/', (req, res) => {
	 routes.routesd.removeDishes(req,res,store)
	})
	
	//Dishes/Comments
	app.get('/dishes/:id/comments', (req, res) => {
 routes.routesc.getComments(req,res,store)
})

app.post('/dishes/:id/comments', (req, res) => {
 routes.routesc.addComment(req,res,store)
})

app.put('/dishes/:id/comments/:commentsId', (req, res) => {
 routes.routesc.updateComment(req,res,store)
})

app.delete('/dishes/:id/comments/:commentsId', (req, res) => {
 routes.routesc.removeComment(req,res,store)
})

//Promotions

app.get('/promotions', (req, res) => {
	 routes.routesp.getPromotions(req,res,store)
	})

	app.post('/promotions', (req, res) => {
	 routes.routesp.addPromotions(req,res,store)
	})

	app.put('/promotions/:id/', (req, res) => {
	 routes.routesp.updatePromotions(req,res,store)
	})

	app.delete('/promotions/:id/', (req, res) => {
	 routes.routesp.removePromotions(req,res,store)
	})
	
	
	//Leaders
	
	app.get('/leaders', (req, res) => {
	 routes.routesl.getLeaders(req,res,store)
	})

	app.post('/leaders', (req, res) => {
	 routes.routesl.addLeaders(req,res,store)
	})

	app.put('/leaders/:id/', (req, res) => {
	 routes.routesl.updateLeaders(req,res,store)
	})

	app.delete('/leaders/:id/', (req, res) => {
	 routes.routesl.removeLeaders(req,res,store)
	})
	
	



app.listen(3000);