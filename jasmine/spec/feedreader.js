/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a url', function(){
         	for(let feed of allFeeds){
         		expect(feed.url).toBeDefined();
         		expect(feed.url.length).not.toBe(0);
         	}//for
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name', function(){
         	for(let feed of allFeeds){
         		expect(feed.name).toBeDefined();
         		expect(feed.name.length).not.toBe(0);
         	}//for
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
    	/* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('hidden by default',function(){
         	expect($('body').hasClass('menu-hidden')).toBe(true);
         });// menu is hidden

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('icon clicked', function(){
          	let menu=$('.menu-icon-link');
          	menu.click();
          	expect($('body').hasClass('menu-hidden')).toBe(false);
          	menu.click();
          	expect($('body').hasClass('menu-hidden')).toBe(true);

          });

    });//describe menu
        



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */  
         //when it finishes running, the spec will start
         beforeEach(function(done){
         	loadFeed(1,done);
         });

         it('has entries in container', function(){
         	expect($('.feed .entry').length).toBeGreaterThan(0);
         });

    });//describe initial


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */    	
         let feed1;
         beforeEach(function(done){
         	$('.feed').empty();
         	loadFeed(0,function(){
         		let feed1=$('.feed').html();
         		loadFeed(1,done);
         	});
         });

         it('load feed',function(){
         	let feed2=$('.feed').html();
         	expect(feed1).not.toBe(feed2);
         });

    });

    

}());
