# FINDFUD API

## What is "FINDFUD"?
"FINDFUD" is a Noje.js REST API that provides food recommendation based on weather condition. This app is using OpenWeatherAPI to know the weather and using AbstractAPI for geolocation. Machine Learning 
will processing restaurant data and food in each restaurant. After that, will recommend you top 5 restaurant with a good rating, good serve, and tasty food.


## Installation

To use this API, you need to set up the required dependencies and run the
backend server.

### Prerequisites

- Node.js 18 or higher
- Google Cloud Storage
- Express
- MySQL
- Schedule

You can install the required packages using pip:

```
npm install express @google-cloud/storage mysql schedule
```

### Setting Up

1. Download the file using Download ZIP.
3. Run the backend server using the following command:

```terminal
npm run start
```

or

```terminal
npm run dev
```

By default, the server will listen on `http://localhost:4000`.

## Conclusion

This concludes the documentation for FINDFUD-API. You can integrate it into your
applications to perform food recommendation based on weather condition. 
