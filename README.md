# This Is Not A Newspaper | TOHacks 2021

A way for you to read news in real time in a manner that is unchaotic, in comparison to the landing pages of most traditional news sources.

## Inspiration
While thousands of news articles are released every single day by numerous news sources around the world, it can become extremely difficult to filter those articles according to your own preferences or interests. As well, many news websites are plagued by ads, designed very chaotically, and only offer one perspective on a story, making it hard for users to enjoy the articles that are reading. As such, we wanted to create a web application that would help people to find news articles, from a variety of perspectives and featuring topics they enjoy, and have a better experience reading them.

## What it does
On the home page, we allow the user to select through several options related to types of news content (e.g., finance, business, sports, etc) that they want to see. Afterwards, the application gives the user a list of potential articles for them to read, and displays articles that the user wishes to read in a custom page. The user can also search for articles with specific keywords if they decide to view other types of articles.

## How we built it
We started by building a back-end server with Express.js and Node.js that defined specific API endpoints. The backend server also makes use of python. We used the Google News API from RapidApi in python to aggregate news articles, and we used the Newspaper library to download article text and information for articles the user clicks on (which users would then get to see). We brainstormed a front-end and started building the it with React.js. Components were created and styled with Semantic UI and native CSS. Finally, we made good use of localStorage and sessionStorage in order to save user information and make the user experience as simple and streamlined as possible. 

## Challenges we ran into
First of all, we ran into challenges with version control, as many of our branches were several commits behind the main branch, forcing us to spend quite some time on ensuring that our branches matched up properly. Solid, coordinated teamwork where we carefully merged our branches in order, and tested rigorously to make sure everything worked, allowed us to overcome these issues. As well, we spent a lot of time trying to connect the front-end to the back-end locally, as we encountered lots of odd errors where identical setups would work on one of our computers but not others. We solved these errors by testing each other's code. We also ran into issues with our news API, which could only take 3 requests per hour. To circumvent this, we used another news API with a higher request threshold for testing (though it returned much worse search results).

## Accomplishments that we're proud of
Given that this was our first hackathon ever, we were very proud of the finished product and all the work that we put into this throughout the 24 hour period. Building a full-stack app with React.js, Express.js and Node.js was never easy, but we were able to quickly learn on the spot about the different frameworks needed. There were several accomplishments that we are very proud of: first of all, we were able to dynamically route to news articles that we requested from an API as the user clicked on the link to the article; we encountered lots of issues in doing this that thankfully, we were able to resolve.  In addition to this, we learned a lot about how browsers and clients interact with data, and also about the many ways to keep track of data without a database, in particular localStorage and sessionStorage. 

## What we learned
Always appreciate the design process - never jump straight into development because you'll run into problems that would've been discussed during the design process.
Another thing we learned - think about hosting before starting the development process, as it'll save you from a massive headache for when you're ready to deploy the product.

## What's next for This Is Not a Newspaper
Possibly turn it into a chrome extension? _Who knows what the future holds._
One thing one of us has in mind is to restructure the backend to use only npm libraries to make data transfer between front-end components a little bit less tedious. 
We would also like to be able to save even more user preferences, such as specific search queries that they entered, to create an even more personalized experience.
We would also like to monitor the quality of the articles, making sure they are from reputable sources and they are relevant, to ensure a pleasant user experience.
Finally, we would like to sort the articles by date, for relevance purposes.
