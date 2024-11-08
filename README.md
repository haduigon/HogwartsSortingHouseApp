**Hogwasrt Sorting House App**

# _Description:_

Hogwarts game. How have to guess to which house belogs a hero.

Here is the main flow: 

- The app consists of 3 screens: Home, List and Details.

- Display randomly selected personage on the Home screen (photo and full name of character).

- Load different personage by pull-to-refresh gesture on the Home screen.

- Allow to click the House buttons to guess the affiliation of this character.

- On every choice, recalculate total/success/failed affiliations and display numbers in the boxes at the top of the Home and List screens.

- The “Reset” button should flush all previously guessed personages and make all total values equal to zero.

- On the List screen display previously guessed affiliations (successful and failed) and the amount of attempts for every character (until successfully guessed).

- By clicking on the Reload button against the particular character, load this character on the Home screen with the House buttons again.

- By clicking on the character item row on the List screen, open the Details screen. Display personage information only in case this personage has been guessed right.

What did I add:

- If you guessed the hero it auto renews if not you can repeat till the wholy victory.

- For tests simplyfing house is written under the hero name.

- Linter is done.

Design:

# [mockup](https://camo.githubusercontent.com/d05c30dcfabf04f992c955d5d2e855f4903ea4b09629f4de39c9a0ecc739e571/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646777366d6c6976672f696d6167652f75706c6f61642f76313730353031363636352f53757065725f46696e616c5f666e6b336e7a2e706e67)

# _Status:_

Done.

[![GitHub license](https://img.shields.io/github/license/haduigon/HogwartsSortingHouseApp)](https://github.com/haduigon/HogwartsSortingHouseApp/blob/master/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/haduigon/HogwartsSortingHouseApp)](https://github.com/haduigon/HogwartsSortingHouseApp/stargazers)

[![GitHub issues](https://img.shields.io/github/issues/haduigon/HogwartsSortingHouseApp)](https://github.com/haduigon/HogwartsSortingHouseApp/issues)

[![GitHub forks](https://img.shields.io/github/forks/haduigon/HogwartsSortingHouseApp)](https://github.com/haduigon/HogwartsSortingHouseApp/network)

# _Screenshots and video for IOS are bellow:_

<details>

</details>

# _Screenshots and video for Android are bellow:_

<details>

</details>

# Technologies list:

[![React](https://img.shields.io/badge/React-18.2.0-green)](https://react.dev/)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-green)](https://www.typescriptlang.org/)

[![React-Native](https://img.shields.io/badge/React%20Native-0.74.5-yellow)](https://reactnative.dev/)

[![Expo](https://img.shields.io/badge/Expo-51.0.28-grey)](https://expo.dev/)

[![Expo-router](https://img.shields.io/badge/Expo%20router-3.5.23-orange)](https://expo.dev/)

[![React-query](https://img.shields.io/badge/React%20query-5.59.20-lightgreen)](https://tanstack.com/query/v3)


# Howgwarts features:

FEATURES

What I did and what I could not:

- I did it with Expo but it also could be a React Natice CLI

- Instead of Expo-router it is possible to use React Navigation or React-router 
  
- I used React-query but it could be React-Context or Redux

- I did not use React.memo, useMemo & useCallback not to overload this shy app, but React-query providers state isolation by setting up every property separetely.

- I made a custom hook to simplify access to state via React-query and reduce amount of code. Seems it looks better

- For some icons I used react-native-vector-icons lib

- I did not manage to do smooth animation between screens, it created problems.

- I did not manage to reproduce design completely, especially styled borders.

# _Usage:_

npm install

npx react-native start

# Reflection

It seems working as expected. It was an extremely interesting and developing journey through the mobile Hogwarts adventures with React-query.
