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
![Simulator Screenshot - iPhone 15 Pro Max - 2024-11-08 at 21 13 33](https://github.com/user-attachments/assets/a7243f9d-3cfe-4371-af69-2786bd14a8f6)

![Simulator Screenshot - iPhone 15 Pro Max - 2024-11-08 at 21 13 58](https://github.com/user-attachments/assets/23b1ac47-8645-474f-9df8-3aa9a6035381)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-11-08 at 21 14 09](https://github.com/user-attachments/assets/98e60cb2-272d-4f7c-b754-32ee0a81840a)
![Simulator Screenshot - iPhone 15 Pro Max - 2024-11-08 at 21 14 27](https://github.com/user-attachments/assets/68752e77-66f3-4d13-a4d1-80f90e076755)


https://github.com/user-attachments/assets/091d3a14-09d5-4081-9ca5-374ed6278898



</details>

# _Screenshots and video for Android are bellow:_

<details>
![2024-11-08 22 01 07](https://github.com/user-attachments/assets/726f773b-496c-410c-92fa-b39063bdd136)
![2024-11-08 22 01 15](https://github.com/user-attachments/assets/3d255da6-8cbb-4f6f-acf0-6ba86baba09c)
![2024-11-08 22 00 44](https://github.com/user-attachments/assets/a923b3b9-35e0-43ed-be5e-6d48e6b74a51)
![2024-11-08 22 00 57](https://github.com/user-attachments/assets/fc3a1dd9-8967-414f-8eee-3b4a3a2fbcb6)
https://github.com/user-attachments/assets/5488c1e5-b38b-44f4-8294-71456d5fbede
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
