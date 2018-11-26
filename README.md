# redux_middleware_pattern

- Run "npm i" to install dependencies.
- Run "npm start" to launch the dev server.

# motivation
The idea is to separate concerns between React components and Redux. All BI and side effects are handled by the middleware, keeping the action creators and reducers very simple. React components are completely separated from the business logic.

In this example, the middleware handles a mock API, however this pattern is applicable to any case which creates side effects.


