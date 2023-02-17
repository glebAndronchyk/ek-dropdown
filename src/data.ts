import DataInterface from "./interfaces/data.interface";

export const countries: DataInterface[] = [
    { name: "Norway", id: 1 },
    { name: "Finland", id: 2 },
    { name: "Estonia", id: 3 },
    { name: "Denmark", id: 4 }
];

export const users: DataInterface[] = [
    {
        name: "Alex",
        surname: "Thurner",
        id: 1,
        image: "https://xsgames.co/randomusers/assets/avatars/male/51.jpg"
    },
    {
        name: "Elvis",
        surname: "Dolsen",
        id: 2,
        image: "https://xsgames.co/randomusers/assets/avatars/male/42.jpg"
    },
    {
        name: "Susann",
        surname: "Hark",
        id: 3,
        image: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg"
    },
    {
        name: "Veronica",
        surname: "Briar",
        id: 4,
        image: "https://xsgames.co/randomusers/assets/avatars/female/62.jpg"
    }
];
