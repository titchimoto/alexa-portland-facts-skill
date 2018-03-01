/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Portland Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a Portland fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
//=========================================================================================================================================
const data = [
    'Portland is the most-populous city in Oregon.',
    'As of 2016, the population of Portland is six hundred and thirty nine thousand.',
    'The city of Portland covers one hundred and forty five square miles, that\'s three hundred and eighty square kilometers.',
    'It is the 26th most-populous city in the United States.',
    'It is the second most-populous city in the Pacific Northwest, after Seattle.',
    'Approximately two point five million people live in the Portland metropolitan area.',
    'It was originally named after Portland, Maine.',
    'There are over ten thousand acres of public parks in Portland.',
    'The city has been called the City of Roses for over a hundred years.',
    'Keep Portland Weird is the official slogan of the city.',
    'PDX, Portland International Airport, is rated the number one airport in the world.. must be that carpet.',
    'The median age of Portland residents of thirty six point five years old.',
    'Portland has more breweries than any other major city.',
    'Portland is one of only two cities to have a dormant volcan within it\'s city limits.',
    'It is famous for the annual World Naked Bike Ride.',
    'The name Portland was decided on a coin toss.',
    'Portland averages 42 inches of rain per year.',
    'It has the worlds smallest park, only two feet across.',
    'Portland has more strip clubs per capita than any other city.',
    'There is an underground tunnel found in Downtown Portland.',
    'Portland has the largest number of vegetarian and vegan restaurants in the country.',
    'A Portland favorite, Powell\'s Books, is the largest independently owned book store in the world.',
    'It is famous for the International Rose Test Garden.',
    'Before the name Portland, it was known as The Clearing.',
    'It has the most movie theatres per capita than any other city.',
    'It has the most restaurants per capity than any other city.',
    'It is illegal to pump your own gas.',
    'Portland has more cyclists per capita than any other U.S city.',
    'Portland is sometimes referred to as Bridgetown or Bridge City.',
    'Portland has 12 bridges.',
    'In Portland, it is illegal to own a rooster for private use.',
    'Portland is home to the NBA team the Portland Trailblazers.',
    'Portland is sometimes referred to as Rip City due to the Portland Trailblazers.',
    'It is sometimes referred to as Stumptown.',
    'Portland was named Little Beirut by George H W Bush due to protesters he encountered during his vists.',
    'Portland\'s Forest Park is the largest natural urban wilderness in the country.',
    'The city\'s streets and sidewalks still feature horse rings to tether your horse to.',
    'The first wiki site was created in Portland in the early nineties.',
    'Portland\'s first professional hockey team were called The Rosebuds.',
    'Benson Bubblers are water fountains placed outside of pubs to prevent drinking during working hours.',
    'Portland is one of the few places where it is okay to bring your dog inside a pub.',
    'There are over 700 food carts throughout the city.',
    'Portland has the most literate people than any other city in the country.',
    'The Portland area is home to Nike.',
    'The Porltand are is home to Intel.',
    'Fiction Novelist, Chuck Palahniuk calls Portland his home.',
    'Portland is home to the Major League Soccer team, the Portland Timbers.',
    'Portland also has a women\'s soccer team, the Portland Thorns FC.',
    'The Portland ice hockey team are known as the Portland Winterhawks.',
    'Portland is often awarded the Greenest City in America.',
    'The coin used to help name Portland, known as the Portland Penny, is on display at the Oregon Historical Society.',
    'At the turn of the twentieth century, Portland was considered one of the most dangerous port cities in the world.',
    'The Great Blue Heron is the official bird of the City of Portland.',
    'Two major rivers encompass the city of Portland, the Willamette and the Columbia River.',
    'The creator of The Simpsons, Matt Groening is from Portland and named many places and characters after streets in Portland.',
    'Portland is home to Pittock Mansion.',
    'Mount Saint Helens and Mount Hood are visible throughout many parts of the city.',
    'The city of Portland is split into five distinct sections.',
    'During two thousand and fifteen, the most ninety degree days in a year were recorded, with twenty nine days.',
    'The hottest temperature ever recorded within Portland was one hundred and seven degrees fahrenheit.',
    'The coldest temperature ever recorded in Portland was minus three degrees fahrenheit.',
    'Tonya Harding was born and raised in Portland.',
    'Doroty McCullough was Portland\'s first ever female mayor in ninteen forty nine.',
    'Doroty McCullogh, Portland\'s first female mayor immediately banned pinball machines upon being elected.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
