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
		// constructed Post item
		new Post(
			'jalsdfljkasdf', // This is a comment
			'https://google.com',
			'An Author',
			'Screenshot_2014-08-18-19-44-55.png',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi. '
			),
		new Post(
			'Second Post',
			'https://vuejs.org',
			'Sammie Author',
			'https://vuejs.org/images/logo.png',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi. '
			),
		new Post('This Post','https://google.com','Bob Author','https://vuejs.org/images/logo.png',''),
		new Post('Another Post','https://vuejs.org','Jane Author','https://vuejs.org/images/logo.png',''),
		new Post('Last Post','https://google.com','Anptoght Author','#','')
		]
	},
	computed: {
		filterlist(){
			// filterlist object
			//returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{
				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
