(() => {
    // init the vue stuff
    const vm = new Vue({
        el: "#app",

        data : {
            welcomemessage : "howdy",
            videodata : [],
            singledata : [],

            videotitle : "",
            videodescription : "",
            videosource : "",
            showDetails : false 
        },
        created : function() {
            // get all movie data on page load
            this.fetchMovieData(null);
        },

        methods : {
            login() {
                //stub
                console.log('login functionality goes here');
            },
            fetchSingle(e){
                //debugger;
                //click button and get data set id
                this.fetchMovieData(e.currentTarget.dataset.movie);
            },
            loadMovie(e){
                //debugger;
                e.preventDefault(); // block a page reload (anchor tag default behaviour)

                dataKey = e.currentTarget.getAttribute('href');

                currentData = this.videodata.filter(video => video.vid_path === dataKey);

                this.videotitle = currentData[0].vid_name;
                this.videodescription = currentData[0].vid_desc;
                this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function(){window.scrollTo(0,1200)}, 500)
            },
            fetchMovieData(movie){
                //ternary statement, its a shorthand if else, left of the : is true, right is false
                let url = movie ? `./includes/index.php?=${movie}` : './includes/index.php';

                //go and fetch data
                fetch(url)
                // brings back data and turns into plain JS object
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (movie){
                        // store data in the single result above
                        this.singledata = data;
                    } else {
                        // initial data grab, store in the videodata array
                        this.videodata = data;
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
            }
        }
    });

})();

// look into python, php , javascript tuts codacedemy, udemy?