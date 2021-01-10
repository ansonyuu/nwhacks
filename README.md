## Inspiration 💡

Unprecedented times, unpresidented times, it's no secret that there's a lot going on right now.

Devastating stories about the declining mental health of seniors in long-term care ring all too familiar to us (ref. [this](https://www.cbc.ca/news/canada/british-columbia/covid-bc-care-homes-seniors-isolation-1.5865061), [this](https://www.nationalobserver.com/2020/12/28/news/isolation-and-fear-dying-alone), and [this](https://www.burnabynow.com/local-news/loneliness-and-loss-burnaby-seniors-not-alone-in-covids-isolation-crisis-3141316)).

Social isolation and the lack of external stimulation are fuels for cognitive decline and depression, which in turn increase the risk of dementia, high blood pressure, and stroke. Although attempts have been made to connect seniors through platforms such as Zoom, they have been burdensome to staff resources, as 75% of residents require assistance in their use.

On the other side of the age spectrum, thousands of youth volunteers have been displaced from their regular in-person activities, many of which are now scrambling to find alternative ways to give back, to gain exposure to the "real world", or even just to fulfill their required volunteer hours for school.

In the struggle also lies the opportunity to promote something the world desperately needs more of: intergenerational connection. **How can we bring together these two very different groups of people in a way that is accessible, entertaining, and educational?**

## Introducing Dialogue!! 🤙

Imagine Omegle and Duolingo had a better, safer child that was made specifically for the elderly! Dialogue is a web application that connects seniors and youth volunteers with alike interests and spoken languages. 

Users are smoothly onboarded with a few questions about themselves: whether they are a senior/volunteer, name, interests, and preferred language. Our matching algorithm will then pair each senior with a youth volunteer, where they will then enter a private video chat room to meet each other and talk! The UI/UX of this app also has a major focus on ease of use and accessibility for seniors, something traditional video-chatting platforms lack.

For seniors, practicing to converse in a foreign language and talking about their favourite interests and stories can promote mental stimulation and greater well-being. For youth volunteers, this can be a valuable opportunity to learn, absorb wisdom, and foster empathy.

Research shows that intergenerational programs increase self-esteem and feelings of well-being for both older and younger participants. Dialogue is our way of contributing to building stronger communities with members that can come together to support and respect one another.

## How we built it
The back-end of the application was created using Express.js and MongoDB. For the live video chatting feature, we used the socket.io library with WebRTC and PeerJS.

The front-end was implemented using React Native (give or take 12821739 dependencies). We deployed using Expo, used Redux to manage global state and implemented Axios to connect the back-end.

To deploy, we used Heroku. All design features were created from scratch using Figma and Adobe AfterEffects!

## Challenges we ran into
Designing for seniors  🤔how do you design an app for people that don't usually use apps? 🤔 While scoping out our project, we always came back to the question of whether a certain feature was too "complex" or difficult to understand. We had to recognize that a vast majority of seniors suffered from impairments such as memory loss, slowed reaction speed, and vision/auditory deficits. We also had to make sure that this type of technology can be used in the circumstance that care workers aren't able to assist seniors in its operation (due to staffing shortages).

On the development side of things, we faced a few challenges with connecting back-end and front-end components, as well as deployment and video rendering.

## What we learned
Anson: I learned how to code a functional React front-end app and connect it to endpoints! Wrestled with expo, tested with postman, speed ran a Redux course, used Axios, and napped on the floor. 💤

Jennifer: This was my first time developing back-end, so I learned a lot about different JavaScript functions, libraries and frameworks. I also learned how to implement live video-calling with [socket.io](http://socket.io) !

Kelly: It's not every day that I get to design an experience specifically for seniors, which posed an entirely new design challenge for me! Learned about various accessibility guidelines and guides in general for elderly web design, as well as working with Lottie animations.

Lucy: This was my first time deploying an API during a hackathon! It was also my first time connecting a React app and a Express server together. 

## What's next 
Our next steps definitely include making our app more accessible for seniors of all abilities. This could include auditory instructions for the visually impaired, adding ASL into a 'language' option, and customizable privacy settings. We would also like to create easier authentication in our sign-in process and to refine our matching algorithm. Making the app scalable to larger quantities of care homes and volunteers is also on our radar!
