# Quizz_UI
Project is developed to create a quiz app of 10 statis questions stores in the backend server. Its built as per the instructions mentioned in the [assignment](https://click.instahyre.com/CL0/https:%2F%2Fdrive.google.com%2Ffile%2Fd%2F1TqunGLSYYWc6sIH7_C02RAggQzg910za%2Fview/1/0100018a8de2a708-b01a9993-b027-41bc-904c-c65ac40b9184-000000/HeU-dt1g8kYHb6u7Ug-Tq-tZwUE33r4dPl2Pb9lApv4=318)

### Prerequisites:
- NodeJs v18 installed
- Backend server up and running. For this please follow the instructions mentioned in [Backend Project](https://github.com/Diksha098-R/Quizz_Backend) `Readme file` 

### Setup process:
Please follow the instructions to start the webapp
```
git clone https://github.com/Diksha098-R/Quizz_UI.git
```
```
cd ./Quizz_UI
```
```
npm install
```
```
npm start
```

Great Job! The quiz app should now be running on port `3000`.

### Techstack:
- NodeJs
- React
- Css

### Some logic flow:
The app will land on start page. On Click of `Start` button, the quiz with 10 question set will start one by one. Every next step will store the response of the previous question to localstorage since the data layer was'nt added. Since our backend server should remain stateless, the test answers will be passed to the backend at the end of last question & then the live results will be calculated. This process also makes app compatible to multiple users using it at the same time. At last the score will be calculated by the backend & displayed on the webapp.   
