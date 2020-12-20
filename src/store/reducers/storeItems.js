import { GET_ITEMS } from '../actionTypes';

const storeItems = (state = ITEMS, action) => {
    switch(action.type) {
        case GET_ITEMS: return state;
        default: return state;
    }
}

const ITEMS = {
    books: [
        {
            id: 1,
            name: "Bhagavad-Gita As It Is Original 1972",
            author: "A.C. Bhaktivedanta Swami Prabhupada",
            info: "Bhagavad Gita is the battlefield conversation between Krishna and His friend Arjuna. The Bhagavad Gita is the primary spiritual text from India. It is an introduction to the Vedas.",
            image: "https://krishna.org/wp-content/uploads/2012/10/BGC.jpg",
            price: 10
        },
        {
            id: 2,
            name: "Bhagavad-Gita As It Is Original",
            author: "A.C. Bhaktivedanta Swami Prabhupada",
            info: "Srimad-Bhagavatam begins with the definition of the ultimate source. It is a bona fide commentary on the Vedanta-sutra by the same author, Srila Vyasadeva, and gradually it develops into nine cantos up to the highest state of God realization.",
            image: "https://images-na.ssl-images-amazon.com/images/I/8107kx7HAAL.jpg",
            price: 20
        },
        {
            id: 3,
            name: "KRSNA, The Supreme Personality of Godhead",
            author: "A.C. Bhaktivedanta Swami Prabhupada",
            info: "KRSNA, the Supreme Personality of Godhead is the story of Krishna’s life. It starts with His birth in the prison house of King Kamsa and follows the adventures of Krishna throughout His life including His escape from being killed by cruel King Kamsa, His childhood in Vrindavan and His loving pastimes with all the residents of Vrindavan including His parents, His cowherd boyfriends, His gopi girlfriends and all the other residents of Vrindavan including even the animals.",
            image: "https://images-na.ssl-images-amazon.com/images/I/510K81A5YPL._SX310_BO1,204,203,200_.jpg",
            price: 10
        },
        {
            id: 4,
            name: "Sri Isopanisad 1969 Editon",
            author: "A.C. Bhaktivedanta Swami Prabhupada",
            info: "Sri lsopanisad is the foremost of the 108 Upanisads. Contained within is the essence of all Vedic knowledge. Presented with the original Sanskrit text, transliterations, English synonyms and purports, by a self-realized Teacher (Acharya), this book is recommended for the novices and neophytes as well as the most highly elevated souls. Its contents are transcendentally pleasing to the non-deceptive and sincere aspirants of spiritual advancement in life.",
            image: "https://krishna.org/wp-content/uploads/2012/12/Sri-Isopanisad-scans-of-original-1969-edition-1-199x300.jpg",
            price: 10
        },
        {
            id: 5,
            name: "The King of Knowledge — Raja Vidya",
            author: "A.C. Bhaktivedanta Swami Prabhupada",
            info: "This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting, and it is joyfully performed.",
            image: "https://krishna.org/wp-content/uploads/2013/01/Raja-Vidya_The_King_of_Knowledge-Original_1973_book_SCAN-1-179x300.jpg",
            price: 10
        },
        {
            id: 6,
            name: "Beyond Birth and Death",
            author: "A.C. Bhaktivedanta Swami Prabhupada",
            info: "The very first step in self-realization is realizing one’s identity as separate from the body. “I am not this body but am spirit soul” is an essential realization for anyone who wants to transcend death and enter into the spiritual world beyond. It is not simply a matter of saying “I am not this body,” but of actually realizing it. This is not as simple as it may seem at first. Although we are not these bodies but are pure consciousness, somehow or other we have become encased with the bodily dress. If we actually want the happiness and independence that transcend death we have to establish ourselves and remain in our constitutional position as pure consciousness.",
            image: "https://krishna.org/wp-content/uploads/2013/01/Beyond_Birth_and_Death-Original_1974_edition_scan-1-181x300.jpg",
            price: 10
        },
        {
            id: 7,
            name: "Bhagavad Gita Bhashyam by Sri Shankaracharya",
            author: "Sri Shankaracharya(Translation: Swami Gambhirananda)",
            info: "Presented here is the Bhagavad Gita with the commentary of Sri Adi Sankaracharya translated by Swami Gambhirananda. This is one of the most important and revered works of Sri Sankaracharya along with his commentaries on Brahma-Sutras and Upanishads. Together called as Prastana Traya bhashya, these commentaries by Sankaracharya forms the central basis for the Advaita philosophy that he propounded.",
            image: "https://pictures.abebooks.com/isbn/9788175050419-us-300.jpg",
            price: 15
        },
        {
            id: 8,
            name: "Brahma Sutra Bhashya by Sri Shankaracharya",
            author: "Sri Shankaracharya(Translation: Swami Gambhirananda)",
            info: "The Brahma Sutra is the third of the canonical texts and is regarded as the Nyaya-prasthana, because it sets forth the teachings of Vedanta in a logical order.The work is known by other names including Vedanta-sutra, Sariraka-sutra, and Bhiksu-sutra. The Brahma Sutra Bhasya is an important but difficult Vedanta scripture. This is our most popular translation, and is regarded by some as indispensable for all students of Vedanta. Includes word for word meaning of each aphorism under its Sanskrit text, followed by a running translation, with additional words in brackets for clarification. Translation based primarily on the Ratnaprabha.",
            image: "https://images-na.ssl-images-amazon.com/images/I/61bceaOh6bL._SX329_BO1,204,203,200_.jpg",
            price: 25
        },
        {
            id: 9,
            name: "Eight Upanishads",
            author: "Sri Shankaracharya(Translation: Swami Gambhirananda)",
            info: "The essence of the knowledge of the Vedas is called Vedanta, which comprises the Upanishads. Freedom, physical, mental, and spiritual - these are the watchwords of the Upanishads.",
            image: "https://images-na.ssl-images-amazon.com/images/I/41eWIApmcVL._SX313_BO1,204,203,200_.jpg",
            price: 25
        },
        {
            id: 10,
            name: "Immortal Talks",
            author: "Shunya",
            info: "The book starts with two monks secretly observing a group of tribal people in a forested mountain. It appeared that the jungle dwellers were talking to something that was visible for them but invisible for everyone else. Any rational mind would reject their activities as hallucination, but the monks studied them and discovered the talks between an immortal and His secret disciples; the talks that revealed the mysteries of life and secrets of godly powers; the talks that examined the nature of Reality, Karma, Desire, Soul, Destiny, Death, Time, and Space; the talks that described the indescribable; the Immortal Talks.Contents: Prologue, The Alternate Mother, The Mermaid, Describing the Indescribable, The Strings of Time, Defeating Death, The Cursed Souls",
            image: "https://images-na.ssl-images-amazon.com/images/I/417nHRNXq4L._SX311_BO1,204,203,200_.jpg",
            price: 10
        }
    ]
};

export default storeItems;