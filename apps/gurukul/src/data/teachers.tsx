import person1 from "@/public/person1.jpg";
import person2 from "@/public/person2.jpg";
import person3 from "@/public/person3.jpg";
import person4 from "@/public/person4.jpeg";

export const teachersArray = [
    {
        image: person4.src,
        name: 'Anoop Verma',
        role: 'CS Professor',
        qualification: 'Masters'
    },
    {
        image: person1.src,
        name: 'Kartik Kumar',
        role: 'Math Professor',
        qualification: 'Ph.D'
    },
    {
        image: person3.src,
        name: 'Lakshman Kumar',
        role: 'Physics Professor',
        qualification: 'Ph.D'
    },
    {
        image: person4.src,
        name: 'Anoop Verma',
        role: 'CS Professor',
        qualification: 'Masters'
    },
    {
        image: person1.src,
        name: 'Kartik Kumar',
        role: 'Math Professor',
        qualification: 'Ph.D'
    },
    {
        image: person3.src,
        name: 'Lakshman Kumar',
        role: 'Physics Professor',
        qualification: 'Ph.D'
    },
];

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

export const teachers = shuffle(teachersArray);