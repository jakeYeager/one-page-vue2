class Post {
	constructor(title,link,author,img,body){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.body = body;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'Kyle Marr Insane Highlights vs Virginia - 6 Goals, 1 Ast',
				'https://youtu.be/x7jF2zgWjhE',
				'Lacrosse Nation',
				'http://files.leagueathletics.com/Images/Club/6777/LAX%20PLAYER%20-%20NEW%2001_1a.jpg',
				 'lacrosse'
				),

			new Post(
				'Virginia vs Johns Hopkins Lacrosse 2017 Highlights',
				'https://youtu.be/vtSEAq11Kjo',
				'Lacrosse Nation',
				'http://files.leagueathletics.com/Images/Club/6777/LAX%20PLAYER%20-%20NEW%2001_1a.jpg',
				'lacrosse'
				),

			new Post(
				'Denver vs Ohio State Lacrosse 2017 Full Highlights',
				'https://youtu.be/hGdo1xu8MIY',
				'Lacrosse Nation',
				'http://files.leagueathletics.com/Images/Club/6777/LAX%20PLAYER%20-%20NEW%2001_1a.jpg',
				'lacrosse'
				),

			new Post(
				'Lacrosse Ankle Breakers Vol.1',
				'https://youtu.be/VamG0UA8D0o',
				'Dead End Lacrosse',
				'http://files.leagueathletics.com/Images/Club/6777/LAX%20PLAYER%20-%20NEW%2001_1a.jpg',
				'lacrosse'
				),

			new Post(
				'Notre Dame vs Ohio State Lacrosse 2017 Highlights',
				'https://youtu.be/SZEAQVWKIoo',
				'Lacrosse Nation',
				'http://files.leagueathletics.com/Images/Club/6777/LAX%20PLAYER%20-%20NEW%2001_1a.jpg',
				'lacrosse'
				)
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
