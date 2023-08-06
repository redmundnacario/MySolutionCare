## My Solution by Redmund Nacario

[Visit the wiki](https://github.com/Carepatron/Carepatron-Test-Full/wiki)

Instruction to Run:

* In new terminal - Go to /mock-api/ (starts up the mock api)

```bash
npm install
npm run build
npm start
```

* In new terminal - Go to /ui/ (starts up the UI)

```bash
npm install
npm start
```

Extras

Quality and best practices

1. How close to the designs is your submission?

`- close enough :)`

* If you needed to change something in the future (size/color of buttons), how easy would it be?

`- Added validation in creation of client, this one needs a library. It should be easy`

`- Testing. Needs more time but it's also easy.`

2. How does this look on different devices?

`- Design is web responsive`

3. How can your submission allow for scalability?

* What if a customer has thousands of records?

`- Current acceptance criteria does not have this. If i am going to implement changes, pagination should be in the API first.`

* How is state managed as the codebase grows?

`- Two approaches can be used, One is redux and the other one is useContext.`

* How can we support multiple countries?

`- By adding language support that enables translation.`

4. How can you ensure the app behaves as you intend it to?
   
`- lots of testing based on acceptance criteria. Unit testing, integration testing, & regression testing.`

5. How intuitive is the behavior of the app?

`- from the perspective of a user, the apps is intuitive and can be used w/o further explanation of feature.`

6. If time wasn't a constraint what else would you have done?

`- same answer to question no. 1.`

7. How was this test overall? I.e too hard, too easy, how long it took, etc

`- just enough for a two-day exercise. BTW, i did it within a weekend. Thanks for letting me take this.`
