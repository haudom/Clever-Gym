//Array mit allen Exercises die wir anbieten. Temp to test. 

import { months } from "moment";



export const exercises = [

    {
        id: "Mon",
        week: 1,
        trainingsPlan: [
            {
                id: "Liegestütz",
                description: "Mach sie",
                imgUrl: "/src/assets/liegestutz.png",
                weight: 25,
                repeats: 10
            },
            {
                id: "Bankdrücken",
                description: "Mach sie richtig!",
                imgUrl: "/src/assets/liegestutz",
                weight: 5,
                repeats: 12
            }
        ]
    },
    {
        id: "Di",
        week: 1,
        trainingsPlan: [
            {
                id: "Yoga",
                description: "Dehn dich",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
                weight: 25,
                repeats: 10
            },
            {
                id: "Käseweitwurf",
                description: "Hoch hinaus",
                imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
                weight: 5,
                repeats: 12
            }
        ]
    }

];

export var totalTrainingDays = 4; //Erhöt sich mit jedem Training
export function increaseTotalTraininDays(){
    totalTrainingDays++;
}


export const Statistics = [

    {
        statsColor: '#04D79F',
        id: "Liegestütz",
        dataSet: [
            {
                trainingsDay: 1,
                week: 1,
                day: "Mon",
                weight: 5,
                repeats: 10,
                sentence: 3
            },
            {
                trainingsDay: 2,
                week: 1,
                day: "Do",
                weight: 5,
                repeats: 11,
                sentence: 3
            },
            {
                trainingsDay: 3,
                week: 2,
                day: "Di",
                weight: 5,
                repeats: 12,
                sentence: 3
            }, {
                trainingsDay: 4,
                week: 2,
                day: "Fr",
                weight: 10,
                repeats: 8,
                sentence: 3
            },
        ]
    },
    {
        statsColor: '#55A080',
        id: "Situps",
        dataSet: [
            {
                trainingsDay: 1,
                week: 1,
                day: "Mon",
                weight: 0,
                repeats: 8,
                sentence: 2
            },
            {
                trainingsDay: 2,
                week: 1,
                day: "Do",
                weight: 0,
                repeats: 8,
                sentence: 3
            },
            {
                trainingsDay: 3,
                week: 2,
                day: "Di",
                weight: 0,
                repeats: 10,
                sentence: 3
            }, {
                trainingsDay: 4,
                week: 2,
                day: "Fr",
                weight: 5,
                repeats: 8,
                sentence: 3
            },
        ]
    }


]