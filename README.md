# W3-Partyps

## The Team 
- @Albadylic 
- @mkatenolan
- @victormasson21 
- @LaLeonie

## Installation manual 
To start the project on your computer, you need to:

Clone the repository :
```
git clone https://github.com/fac-17/W3-Partyps.git
```
Install NPM :
```
npm install
```

Use NPM to install TAPE on your computer and work through the test file: npm i -D tape and npm i -D tap-spec
Then, to run the test :
```
npm test
```

## User Journey 
**Happy Scenario** 
- User types a party theme into search bar (example: "Mexican") and clicks "Let's go" button 
- App suggests a playlist and a recipe corresponding to the search term 
- User can access playlist and recipe by clicking on the respective titles
- User can clear search by clicking "Clear" buttoon 
- User can enter new search term and receives new playlist & recipe suggestions

**Edge Cases** 
- If no search term provided, alert message pops up and
- If user provides invalid search term, alert message pops up and input field is clear 
(bug to fix: app will still suggest a playlist based on invalid search term) 


## Goals
### MVP Goals
- [x] Draw up software architecture
- [x] Research & understand API documents
- [x] Create at least two APIs using the XMLHttpRequest method
- [x] Refactor JS file and put pure functions into separate file 
- [x] Wrte end execute test for pure functions 
- [x] Use grid & flexbox for app layout 
- [x] Make app responsive/mobile friendly
- [ ] Add a drop down menu of predefined themes
- [ ] Improve accessibilty 
- [ ] Add button to expand recipe/playlist sections and display more content 


### Stretch Goals
- [ ] Improve playlist API request so that search term must be included in the playlist title 
- [ ] Ensure that no playlist is returned if search term is invalid
- [ ] Add Easter Egg classes i.e. change CSS in response to certain search terms 

## Technologies & Tools 
- methods: TDD (Tape & tap-spec), API calls, CSS grid
- Languages: vanilla JavaScript, HTML, CSS
- other: Pair programming, Git and GitHub, npm, command line

## Approach/Worklfow 
1.) Defined the user journey


2.) Drew up software architecture 


!(Picture of software architecture)["https://github.com/fac-17/W3-Partyps/blob/master/Images/IMG_0250.JPG?raw=true"]



## What we struggled with
**Accessing the APIs** 
The CORS specification requires all CORS requests to include an Origin header in every request.  In order to overcome this we needed to add a CORS proxy to the start of our URL. A CORS proxy is a service that allows developers (probably you) to access resources from other websites, without having to own that website.

**Second API call within the first call**
Accessing the playlist tracklist requires a second API call, using a URL parsed from the initial API call. Waterfall…?

**Initiliasing Test File**
- How do we export the whole file so that we can test the pure functions?
- Event Listeners don’t work

## What we learned
