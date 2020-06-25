# review items

## how do we fork a repo? 

- Click on link to repo, click fork, and it should fork into your repo

## how do we clone a repo to be available on our local?

- CD into folder we want to clone into and do git clone (add in url)

## how do we move changes from working folder to staging?

- git add . or git add -u (add -u for only changed files)

## how do we move changes from staging folder to the local repo?

- git commit -m "adding whatever header"

## how do we confirm what is in the local repo

- after a git commit -m from staging area, do a git log

## how do we confirm what is in the remote repo

- go on github and check, or a git pull/git log

## how do we confirm the url of our git remotes?

- git remote.origin.url. To get more info about a particular remote- git remote show (remote-name)
git remote show origin
## how many and what sections are in an html document

There are 3 sections, the HTML line, head and body
EX: !DOCTYPE html, head, body

## there are two ways to reference css in the header - show examples of two tags that are used for styling

creating a file in VS code and attaching the file to your document via link, or copying the link from the CSS source and posting it in the style.
ex: 1. file - styles.css, "link rel="stylesheet" href="styles.css">
ex: 2. link from source, link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"

## 3 - how many ways can you declare a variable
## hint - 1 old school way - the new ways
## provide a few samples
there are 3 ways to declare a variable - var, let, const
var hello;
let k; k='kentucky';
const fish loves me; 