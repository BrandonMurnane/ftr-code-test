1. You have a new requirement to implement for your application: its logic should stay
exactly the same but it will need to have a different user interface (e.g. if you wrote a
web app, a different UI may be a REPL).
Please describe how you would go about implementing this new UI in your application?
Would you need to restructure your solution in any way?

I designed this application with the idea to keep it very modular and simple.This means most of the code can easily be ported into any other solution. If it were more complex and needed functionality like leaderboards etc id turn this into a backend to communicate with a front end. Currently the easiest and most efficient solution would be to lift all the functions and place into the new application while removing the parts that are bespoke to a console application.

The main changes that would need to happen :
Replacing of the readline logic with the new input logic.
Tying the new inputs into the current process inputs function to take in the commands from the new ui. This should be simple enough regardless of which ui is implemented.
Changing the console logs to be something that makes more sense in the new ui e.g react components controlled by some state.

The timer would continue to work as would all the fibonacci logic and tracking the frequency so its just the basic input/ output view.


2. You now need to make your application “production ready”, and deploy it so that it can
be used by customers.
Please describe the steps you’d need to take for this to happen.

If the aim for this application was to be served to customers id start by changing the ui to a webapp. Once ive done this id use github to hold a repository of the code and heroku to host it.

heroku setup id make  3 pipelines one for dev, one for staging and one for production. Id setup so the master branch of heroku is automatically pulled into staging for testing before a push to production can set this up to be a one click then. This would allow for speedy but reliable deployments with heroku doing the legwork of load balancing and some basic metrics on health. We could also set this up to auto scale but i doubt this site would need very much processing given the small nature of the app. Usually id set these up so that the dev/staging has ip restrictions to the office.

Github setup id setup a basic testing suite my preferred is usually jenkins and have something like snyk running for package vulnerabilities. Setup the repo so it requires jenkins , snyk and 2 code reviews for it to merge and this allows for confidence in the quality of what we are allowing to hit the staging environment.

Once all this is setup id start the dynos on the heroku app and set it to build so we pull the code the first time and get it running. Heroku also allows for one click rollbacks if any bugs get missed in the staging applicaiton its quick and easy to rollback. It also provides a ui for doing the env variables and allows for changing them without needing a "deploy".


3. What did you think about this coding test - is there anything you’d suggest in order to
improve it?

I thought it was interesting with some gotya type problems that i enjoyed. I do think that the wording of the test left me a bit stumped on what exactly was being looked for in the application. That could just be me but would be my main feedback.

Overall i enjoyed it these sort of open ended ones are a bit more difficult on the did i do enough / too much . I liked the spin on something thats usually very basic . In salesforce it was a common issue of over engineering to make things have more buzzwords.