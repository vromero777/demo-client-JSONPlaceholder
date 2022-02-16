Vue.createApp({
    data() {
        return {
            URLAPIPost: 'https://jsonplaceholder.typicode.com/posts',
            URLAPIUsers: 'https://jsonplaceholder.typicode.com/users/',
            loading: true,
            posts: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ],
            users: [],
            pag: 1,
            maxElementPag: 5,
            totalPages: 0
        }

    },
    methods: {
        getNameUser: function(id) {
            return this.users.filter(user => id === user.id)[0].name;
        },
        getUser: async function(){
            const fetchUser = await fetch(this.URLAPIUsers);
            const jsonUsers = await fetchUser.json();
            this.users = jsonUsers
        },
        nextPage: function () {
            this.pag += 1
        },
        prevPage: function () {
            this.pag -= 1
        },
        getPostPag: function () {
            const posInicio = ((this.pag - 1) * this.maxElementPag)
            const posFinal = posInicio + this.maxElementPag;
            return this.posts.slice(posInicio,posFinal)
        },
        getPosts: async function() {
            this.loading = true;
            const fetchPosts = await fetch(this.URLAPIPost);
            const jsonPosts = await fetchPosts.json();
            this.posts = jsonPosts;
            this.loading = false;
            this.totalPages = Math.ceil(this.posts.length / this.maxElementPag)
        }
    },
    mounted: function () {
        this.getPosts()
        this.getUser()
    }
}).mount('#app')