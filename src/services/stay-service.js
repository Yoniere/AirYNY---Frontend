import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'



const stays = [{
        "name": "Westin Kaanapali KORVN 2BR",
        "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
        "interaction": "There are activities programs and concierge activities booking services at this resort.",
        "houseRules": "No smoking; No Pets; This resort's rules apply. Please call the resort directly to verify details.",
        "propertyType": "Serviced apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 8,
        "bedrooms": 2,
        "beds": 4,
        "numOfReviews": 9,
        "amenities": [
            "TV",
            "Cable TV",
            "Internet",
            "Wifi",
            "Air conditioning",
            "Wheelchair accessible",
            "Pool",
            "Kitchen",
            "Free parking on premises",
            "Doorman",
            "Gym",
            "Elevator",
            "Hot tub",
            "Heating",
            "Family/kid friendly",
            "Suitable for events",
            "Washer",
            "Dryer",
            "Smoke detector",
            "Carbon monoxide detector",
            "First aid kit",
            "Safety card",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "Self check-in",
            "Building staff",
            "Private entrance",
            "Room-darkening shades",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Ethernet connection",
            "Luggage dropoff allowed",
            "Long term stays allowed",
            "Ground floor access",
            "Wide hallway clearance",
            "Step-free access",
            "Wide doorway",
            "Flat path to front door",
            "Well-lit path to entrance",
            "Disabled parking spot",
            "Step-free access",
            "Wide doorway",
            "Wide clearance to bed",
            "Step-free access",
            "Wide doorway",
            "Step-free access",
            "Wide entryway",
            "Waterfront",
            "Beachfront"
        ],
        "host": {
            "_id": "622f3403e36c59e6164faf93",
            "fullname": "Patty And Beckett",
            "location": "Eureka, California, United-States",
            "about": "Adventurous couple loves to travel :)",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "36133410"
        },
        "address": {
            "street": "Lahaina, HI, United-States",
            "country": "United-States",
            "location": {
                "lat": -156.6917,
                "lan": 20.93792
            },
            "countryCode": "US",
            "city": "Maui"
        },
        "id": "12223067",
        "bathrooms": 2,
        "price": 595,
        "securityDeposit": 500,
        "cleaningFee": null,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 10,
            "value": 10,
            "rating": 98
        },
        "reviews": [{
                "at": "2016-06-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fc004",
                    "fullname": "Kiesha",
                    "imgUrl": "https://robohash.org/10711825?set=set1",
                    "id": "10711825"
                },
                "txt": "I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter."
            },
            {
                "at": "2016-07-28T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb204",
                    "fullname": "Chris",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072865"
                },
                "txt": "Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. "
            },
            {
                "at": "2016-09-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb703",
                    "fullname": "Kim",
                    "imgUrl": "https://robohash.org/71179725?set=set1",
                    "id": "71179725"
                },
                "txt": "We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves."
            },
            {
                "at": "2017-01-07T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb37f",
                    "fullname": "Tracy",
                    "imgUrl": "https://robohash.org/65593239?set=set1",
                    "id": "65593239"
                },
                "txt": "Beautiful location. Patty & Peter were super helpful and easy to work with!"
            },
            {
                "at": "2017-04-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb105",
                    "fullname": "Duyen",
                    "imgUrl": "https://robohash.org/26215688?set=set1",
                    "id": "26215688"
                },
                "txt": "Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back."
            },
            {
                "at": "2017-05-09T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fabbe",
                    "fullname": "Binh",
                    "imgUrl": "https://robohash.org/117390236?set=set1",
                    "id": "117390236"
                },
                "txt": "The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter. "
            },
            {
                "at": "2018-02-24T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb4af",
                    "fullname": "Samy",
                    "imgUrl": "https://robohash.org/15143517?set=set1",
                    "id": "15143517"
                },
                "txt": "We spent a great week at Patty and Peter's place. The place was exactly as shown in the pictures, very comfortable, nice view, with all amenities. The resort is great with several pools, a long beach, many restaurants, and of course a lot of great activities all around."
            },
            {
                "at": "2018-06-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb87b",
                    "fullname": "Breanne",
                    "imgUrl": "https://robohash.org/78173091?set=set1",
                    "id": "78173091"
                },
                "txt": "This place was perfect for my family. We had plenty of room to spread out and the service could not have been any better"
            },
            {
                "at": "2018-06-29T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb713",
                    "fullname": "Kimberly",
                    "imgUrl": "https://robohash.org/100535039?set=set1",
                    "id": "100535039"
                },
                "txt": "We love Westin Kaanapalli"
            }
        ],
        "_id": "622f337a75c7d36e498aaaf8",
        "imgUrls": [
            "090.jpeg",
            "010.jpeg",
            "153.jpeg",
            "093.jpeg",
            "094.jpeg"
        ]
    },
    {
        "name": "Belle chambre à côté Metro Papineau",
        "summary": "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
        "interaction": "J'adore recevoir mes invités personnellement mais il arrive que je ne puis être sur place lors de votre arrivée.",
        "houseRules": "",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 4,
        "amenities": [
            "TV",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Elevator",
            "Buzzer/wireless intercom",
            "Heating",
            "Family/kid friendly",
            "Washer",
            "Dryer",
            "Smoke detector",
            "Carbon monoxide detector",
            "Essentials",
            "Iron",
            "translation missing: en.hosting_amenity_50"
        ],
        "host": {
            "_id": "622f3401e36c59e6164fabab",
            "fullname": "Angel",
            "location": "Montreal, Québec, Canada",
            "about": "",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "80344827"
        },
        "address": {
            "street": "Montréal, QC, Canada",
            "country": "Canada",
            "location": {
                "lat": -73.54985,
                "lan": 45.52797
            },
            "countryCode": "CA",
            "city": "Montreal"
        },
        "id": "13732894",
        "bathrooms": 1,
        "price": 30,
        "securityDeposit": 150,
        "cleaningFee": 8,
        "extraPeople": 15,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 9,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 100
        },
        "reviews": [{
                "at": "2016-07-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fc058",
                    "fullname": "Rowan",
                    "imgUrl": "https://robohash.org/81703602?set=set1",
                    "id": "81703602"
                },
                "txt": "The place was great, as was the host! I would recommend staying here."
            },
            {
                "at": "2016-07-08T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb274",
                    "fullname": "Adriana",
                    "imgUrl": "https://robohash.org/64310987?set=set1",
                    "id": "64310987"
                },
                "txt": "J'ai adoré rester là. Très acceuillant."
            },
            {
                "at": "2016-07-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb87c",
                    "fullname": "Emma",
                    "imgUrl": "https://robohash.org/23709900?set=set1",
                    "id": "23709900"
                },
                "txt": "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !"
            },
            {
                "at": "2016-08-02T04:00:00.000Z",
                "by": {
                    "_id": "622f3408e36c59e6164fc082",
                    "fullname": "Jeffery",
                    "imgUrl": "https://robohash.org/44882622?set=set1",
                    "id": "44882622"
                },
                "txt": "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!"
            }
        ],
        "_id": "622f337a75c7d36e498aaaf9",
        "imgUrls": [
            "074.jpeg",
            "077.jpeg",
            "060.jpeg",
            "110.jpeg",
            "086.jpeg"
        ]
    },
    {
        "name": "M&M Space MM2  Apartamento no centro da cidade",
        "summary": "O apartamento fica perto de arte e cultura e dos mais belos monumentos da cidade. Belos jardins e paisagens da cidade e do rio Douro ficam perto e podem ser apreciadas.  Existem restaurantes típicos e de comida internacional ao redor do apartamento.   O espaço fica numa rua típica da cidade, cheia da sua magia e magnetismo e é muito pratico e confortável. O espaço é excelente para quem pretende visitar e conhecer a zona histórica e turística do Porto. Transportes públicos ficam próximos.",
        "interaction": "Será prestada ajuda aos hospedes, 24 horas por dia, desde que solicitada.",
        "houseRules": "- Devem respeitar o restantes hospedes a morar no prédio evitando barulhos excessivos. - Animais de estimação: Questionar o proprietário. Podem ser permitidos a um custo extra a acordar. e em casos excepcionais. Fumar: Podem fumar na varanda desde que cumpram as regras de segurança necessárias. - Ter cuidado com o manuseamento dos equipamentos existentes na casa. Dão-se informações se solicitado. - Levar o lixo utilizado para os contentores no exterior. São fornecidos sacos extra para o feito. - Ter uma boa estadia.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 4,
        "bedrooms": 2,
        "beds": 2,
        "numOfReviews": 18,
        "amenities": [
            "TV",
            "Cable TV",
            "Internet",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Paid parking off premises",
            "Free street parking",
            "Buzzer/wireless intercom",
            "Family/kid friendly",
            "Washer",
            "Smoke detector",
            "First aid kit",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "Private entrance",
            "Crib",
            "Room-darkening shades",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Microwave",
            "Coffee maker",
            "Refrigerator",
            "Dishwasher",
            "Dishes and silverware",
            "Cooking basics",
            "Oven",
            "Stove",
            "Patio or balcony",
            "Luggage dropoff allowed",
            "Long term stays allowed",
            "Wide doorway",
            "Well-lit path to entrance",
            "Step-free access",
            "Wide doorway",
            "Accessible-height bed",
            "Step-free access",
            "Wide doorway",
            "Accessible-height toilet",
            "Step-free access",
            "Wide entryway",
            "Host greets you",
            "Handheld shower head",
            "Paid parking on premises",
            "Fixed grab bars for shower"
        ],
        "host": {
            "_id": "622f3403e36c59e6164fb266",
            "fullname": "Maria",
            "location": "Porto, Porto District, Portugal",
            "about": "Simples, muito comunicativa, mas de elevado sentido de responsabilidade, de organização e de confiança.\r\nGosto muito de contacto humano, sem o qual não me sinto estável. Adoro conhecer pessoas de culturas diferentes.\r\nFaço várias viagens, mas de curta duração, pois tenho necessidade de sentir o lar e a família. Por ser assim, tento fazer tudo para que os meus hospedes se sintam confortáveis como em suas casas.",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "78704763"
        },
        "address": {
            "street": "Porto, Porto, Portugal",
            "country": "Portugal",
            "location": {
                "lat": -8.60154,
                "lan": 41.14834
            },
            "countryCode": "PT",
            "city": "Porto"
        },
        "id": "13605461",
        "bathrooms": 1,
        "price": 65,
        "securityDeposit": 0,
        "cleaningFee": 0,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 9,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 96
        },
        "reviews": [{
                "at": "2016-07-18T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb090",
                    "fullname": "Lina & Alexis",
                    "imgUrl": "https://robohash.org/19177194?set=set1",
                    "id": "19177194"
                },
                "txt": "Mes parents ont passé un excellent séjour à Porto dans l'appartement de Maria qui est bien équipé, confortable et très propre. Il est situé au coeur du centre ville et tout est accessible à pied. Si vous venez en voiture, prévoir de se garer dans le parking souterrain payant juste à côté. Mes parents remercient chaudement Maria et son mari qui ont été adorables, notamment par leur accueil chaleureux."
            },
            {
                "at": "2016-08-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb4e7",
                    "fullname": "Mario R.",
                    "imgUrl": "https://robohash.org/81211152?set=set1",
                    "id": "81211152"
                },
                "txt": "El apartamento es perfecto para una  estancia, esta perfectamente dotado para cubrir las necesidades de un viaje de recreo, situado perfectamente para acceder a pie a las zonas más interesantes de Oporto. María una perfecta anfitriona que te facilitará una inolvidable estancia en Oporto. Ha sido una gran experiencia."
            },
            {
                "at": "2016-08-14T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb110",
                    "fullname": "Patricia",
                    "imgUrl": "https://robohash.org/16580426?set=set1",
                    "id": "16580426"
                },
                "txt": "Thierry, Patricia, Anaïs et Manon,\r\nMaria et son mari nous attendaient avec gentillesse et sourires, Maria a toujours répondu à mes mails et SMS en cours de voyage.   Ils nous ont aidé à monter les valises, Il y avait une bouteille d'eau au frais, très appréciable ainsi que des petits gâteaux et une bouteille de vin dans le frigo...L'appartement était très propre rien ne manquait, conforme à la description, bien situé, nous avons tout fait à pieds ...Très à l'écoute de nos demandes Maria et son mari sont charmants, nous nous sommes sentis en famille, nous reviendrons et je recommande fortement ce logement ...Nous avons pu apprécier notre séjour sans tracas.  "
            },
            {
                "at": "2016-09-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fab5b",
                    "fullname": "Ingrid",
                    "imgUrl": "https://robohash.org/40501338?set=set1",
                    "id": "40501338"
                },
                "txt": "Thanks Maria for your warm welcome. The appartement was really clean. It has everything that we needed for our stay and is really well located. It was easy to park for free near the appartement. Thanks!"
            },
            {
                "at": "2017-05-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb27c",
                    "fullname": "Marie Odile",
                    "imgUrl": "https://robohash.org/110925120?set=set1",
                    "id": "110925120"
                },
                "txt": "L appartement de Maria est tres bien situe, propre et surtout tres calme. Il ne manque rien . Maria nous a tres bien recus . Je recommande cet appartement."
            },
            {
                "at": "2017-06-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbd3c",
                    "fullname": "Anne",
                    "imgUrl": "https://robohash.org/23040000?set=set1",
                    "id": "23040000"
                },
                "txt": "Maria is a great host and we loved this apartment! It was bright, clean, airy and well-equipped and Maria gave us a thorough introduction to how everything worked. The bed was comfortable (it is not made for tall people though) and nights were quiet as both living room and bedroom are facing the backyard, not the street. Only in the morning we could not sleep in as there was loud construction noise during the day. The metro station is only a few minutes walk away and the city center is at walking distance. We also got a sweet welcome with Portuguese wine."
            },
            {
                "at": "2017-06-30T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbd39",
                    "fullname": "Armelle",
                    "imgUrl": "https://robohash.org/113337848?set=set1",
                    "id": "113337848"
                },
                "txt": "Appartement très bien situé, tout le vieux porto se fait à pied. Très propre, indépendant et fonctionnel. Metro au pied en venant de l'aéroport, ligne directe 15 minutes environ.\nRestaurants et épiceries typiques au pied de l'immeuble. Climatisation et télé dans toutes les pièces, calme et quartier pittoresque. À recommander pour 3 ou 4. Accueil simple, gentil et efficace comme Maria la propriétaire.\n"
            },
            {
                "at": "2017-08-01T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbc52",
                    "fullname": "Domingo",
                    "imgUrl": "https://robohash.org/114367498?set=set1",
                    "id": "114367498"
                },
                "txt": "apartamento bien situado, agradable, bonito, muy limpio y con una anfitriona maravillosa dispuesta a resolver cualquier inconveniente que se pueda presentar. lo recomiendo sin lugar a dudas.\ngracias Mariapor su gentileza"
            },
            {
                "at": "2017-08-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbb3f",
                    "fullname": "Estelle",
                    "imgUrl": "https://robohash.org/123999116?set=set1",
                    "id": "123999116"
                },
                "txt": "Appartement très propre et très bien situé, bien agencé. Quartier très vivant mais appartement calme car ne donne pas sur la rue. Nous avons passé un très bon séjour chez Maria qui nous a très bien accueilli."
            },
            {
                "at": "2017-09-21T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb06f",
                    "fullname": "Alfredo Julio Leandro",
                    "imgUrl": "https://robohash.org/148979666?set=set1",
                    "id": "148979666"
                },
                "txt": "Apartamento agradable, muy limpio y muy bien equipado, en zona tranquila pero accesible para llegar a todos lados de a pie. Maria y Arturo nos recibieron con un rico vino del Douro y galletitas y muy buenas recomendaciones para pasear y comer."
            },
            {
                "at": "2017-10-17T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb78f",
                    "fullname": "Nataliia",
                    "imgUrl": "https://robohash.org/137603514?set=set1",
                    "id": "137603514"
                },
                "txt": "Нам очень понравилась квартира,светлая,уютная,на 3-м этаже,с большим балконом,в квартире есть все самое необходимое,стиральная машина,утюг,кровати очень удобные,красивое постельное белье,вся обстановка в квартире сделана с душой,все время прибывания чувствовали себя как дома.\nМария по приезду подарила нам бутылку вина из долины реки Дору,из красивых бокалов мы его с удовольствием выпили,спасибо за презент.\nВ этой маленькой уютной квартире -3 телевизора!!!!Смотреть было некогда,наслаждались красивым городом и окрестностями Порту."
            },
            {
                "at": "2017-12-09T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fad62",
                    "fullname": "Liz",
                    "imgUrl": "https://robohash.org/144054479?set=set1",
                    "id": "144054479"
                },
                "txt": "Muy contentos con todo. El piso estaba bastante cerca del centro, Maria y su marido estaban incluso antes de la hora de nuestra llegada. El piso esta muy bien equipado: cafetera, botiquín, lavadora etc. Super super limpio todo y las camas muy comodas y acogedores. Y al ser un piso interior, no se oia nada de ruido. Recomendable!"
            },
            {
                "at": "2018-01-09T05:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb1c3",
                    "fullname": "Ariadne",
                    "imgUrl": "https://robohash.org/151785573?set=set1",
                    "id": "151785573"
                },
                "txt": "Eu e minha amiga ficamos um mês no apartamento e foi uma otima experiencia!\nMuito bem localizado, perto de tudo! Não tivemos nenhuma dificuldade em encontrar o local, que fica a minutos da estação do metrô e é muito perto da região central.\nÓtima infraestrutura, limpeza e organização.\nFomos muito bem recebidas e bem auxiliadas pela Maria, que com certeza é uma ótima anfitriã!\nRecomendo muito a estadia, não poderia ter sido melhor!"
            },
            {
                "at": "2018-02-27T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb5f5",
                    "fullname": "Bruno",
                    "imgUrl": "https://robohash.org/169584809?set=set1",
                    "id": "169584809"
                },
                "txt": "Respostas sempre rápidas; excelente recepção ; sempre simpática e disponível."
            },
            {
                "at": "2018-06-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fad10",
                    "fullname": "João",
                    "imgUrl": "https://robohash.org/43281546?set=set1",
                    "id": "43281546"
                },
                "txt": "Clean, quiet and centrally located. Very welcoming host as well."
            },
            {
                "at": "2018-07-18T04:00:00.000Z",
                "by": {
                    "_id": "622f3408e36c59e6164fc075",
                    "fullname": "Alcides",
                    "imgUrl": "https://robohash.org/22956972?set=set1",
                    "id": "22956972"
                },
                "txt": "O Espaço de Maria é de extremo bom gosto. Tudo extremamente limpo, pratico e organizado nos mínimos detalhes.  Boa localização perto de tudo.  Sem falar na Simpatia e disponibilidade da Maria que com suas dicas tornou nossa estadia em Porto melhor do que esperávamos. Recomendadíssimo !"
            },
            {
                "at": "2018-12-09T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbad8",
                    "fullname": "Miguel Angel",
                    "imgUrl": "https://robohash.org/3708225?set=set1",
                    "id": "3708225"
                },
                "txt": "Alojamiento coqueto y acogedor, muy limpio y bien ubicado, tiene 2 habitaciones y todo lo necesario para poder pasar unos días en Oporto, buena ubicación cerca de Sta Catarina. Nos ha gustado mucho la estancia, la atención de María inmejorable. Muchas gracias por su atención y amabilidad"
            },
            {
                "at": "2018-12-29T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbede",
                    "fullname": "Alessandro",
                    "imgUrl": "https://robohash.org/38271990?set=set1",
                    "id": "38271990"
                },
                "txt": "buena ubicación, piso acogedor, reformado, excelente servicio y recomendaciones"
            }
        ],
        "_id": "622f337a75c7d36e498aaafa",
        "imgUrls": [
            "112.jpeg",
            "080.jpeg",
            "140.jpeg",
            "042.jpeg",
            "055.jpeg"
        ]
    },
    {
        "name": "Fresh and modern 1BR in Bed-Stuy",
        "summary": "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
        "interaction": ".  Guests stay in a separate,  private apartment and we make every effort to not disturb you unless absolutely necessary. We live above the apartment and will be happy to accommodate any reasonable requests",
        "houseRules": "A/C may be used only when you are at home.  Please respect our delicate old pipes (no grease down the drain, etc.).  No smoking on premises. Guests are expected to wash take out their trash and recycling as needed. Guests are expected to wash and put away dishes prior to check-out (apartment has a dishwasher, soap packets are under the sink) Longer term guests may wish to launder the sheets and towels during their stay. This service is not provided. (There are two sets of bed linens provided and two sets of towels for each adult guest.) Owners may occasionally need to go through the apartment to access the basement. We shall endeavor to give advance notice of this and find a mutually convenient time.  $50 fee if keys are lost or not returned.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 180,
        "amenities": [
            "Internet",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Heating",
            "Family/kid friendly",
            "Smoke detector",
            "Carbon monoxide detector",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "translation missing: en.hosting_amenity_49",
            "Self check-in",
            "Lockbox"
        ],
        "host": {
            "_id": "622f3402e36c59e6164fac46",
            "fullname": "Shaila & Alex",
            "location": "New York, New York, United-States",
            "about": "I'm a journalist from Texas and my husband is an artist from the Ukraine by way of Kansas City. We recently welcomed our son into the world. (Don't worry, he sleeps all night.)  We love exploring New York, especially Brooklyn, from the Brooklyn Flea to tiny taco joints to the Botanic Gardens to performance art in Bushwick storefronts (really). We've both spent a lot of time in the South, so hospitality is second nature to us. ",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "6334250"
        },
        "address": {
            "street": "Brooklyn, NY, United-States",
            "country": "United-States",
            "location": {
                "lat": -73.92922,
                "lan": 40.68683
            },
            "countryCode": "US",
            "city": "New York"
        },
        "id": "1155885",
        "bathrooms": 1,
        "price": 79,
        "securityDeposit": 250,
        "cleaningFee": 80,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 93
        },
        "reviews": [{
                "at": "2013-05-27T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbfd2",
                    "fullname": "Nicolas",
                    "imgUrl": "https://robohash.org/4523027?set=set1",
                    "id": "4523027"
                },
                "txt": "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n"
            },
            {
                "at": "2013-06-04T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb048",
                    "fullname": "Jeff",
                    "imgUrl": "https://robohash.org/6443424?set=set1",
                    "id": "6443424"
                },
                "txt": "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. "
            },
            {
                "at": "2013-06-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fba55",
                    "fullname": "Carla",
                    "imgUrl": "https://robohash.org/6121036?set=set1",
                    "id": "6121036"
                },
                "txt": "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - "
            },
            {
                "at": "2013-06-20T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbf76",
                    "fullname": "Dan",
                    "imgUrl": "https://robohash.org/6460525?set=set1",
                    "id": "6460525"
                },
                "txt": "Shaila and Alex were incredibly accommodating and me and my girlfriend enjoyed our stay thoroughly. Highly recommended. The place was very private and homely. I didn't really know anything about New York and was nervous about staying in bed stuy but it was safe and friendly everywhere I went. Very easy to get to the airport and manhattan by train."
            },
            {
                "at": "2013-06-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbe9d",
                    "fullname": "Ariane",
                    "imgUrl": "https://robohash.org/6825718?set=set1",
                    "id": "6825718"
                },
                "txt": "Great place to stay in Brooklyn! Alex gave us a really useful list of nice restaurants and coffee places near the place (We are very happy to have discovered, the restaurant \"Saraghina\", thanks to Alex's map!).  The apartment is vast, furnished with taste and very convenient. We highly recommend!"
            },
            {
                "at": "2013-07-03T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fad91",
                    "fullname": "Ilka",
                    "imgUrl": "https://robohash.org/5823882?set=set1",
                    "id": "5823882"
                },
                "txt": "I can recommend to everyone to come to this beautiful apartment, Shaila and Alex are great hosts and the neighbourhood is very friendly everywhere we go.\r\nIt really felt like home."
            },
            {
                "at": "2013-07-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fab81",
                    "fullname": "Kristy",
                    "imgUrl": "https://robohash.org/5729991?set=set1",
                    "id": "5729991"
                },
                "txt": "My sister and I loved staying here! The apartment is very spacious and recently renovated so it looks amazing. The kitchen has everything you need with Alex and Shalia stocking it with a few basics. The neighbourhood is a little shabby, especially compared to the home we stayed in. We were told by some people in Manhattan that the neighbour of Bed-Stuy used to be very dangerous and just to be careful walking around at night. Walking from the subway after dark was a little daunting but we remained safe. We did catch a cab a few times from Manhattan as it was very late. Overall, it was a positive experience with Alex and Shalia being very helpful, even going out of their way to let us store our luggage at Shalia's work the day we were to fly out. They were great hosts."
            },
            {
                "at": "2013-07-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb785",
                    "fullname": "Barbara",
                    "imgUrl": "https://robohash.org/6063814?set=set1",
                    "id": "6063814"
                },
                "txt": "We just met Alex when we checked in, but anyhow he had been a very friendly and helpful host. He was reachable anytime and answered my mails prompt.\r\nThe apartment was great! It was really beautiful and big. It has a perfectly equipped kitchen and there are also a few basics for breakfast and cooking. The bed is very comfortable. It is not that soundproofed as we are accustomed to (the steps from upstairs waked me every day - my son slept well, he did not hear it), but I think that is normal for american houses. But apart from this it is very quiet.\r\nThe neighbourhood is great! It is very authentic, people are friendly and helpful if required, no problems even late at night. We loved staying there!\r\nIn any case: apartment, host and neighbourhood are high recommended! If we are in New York again, we certainly return to this place!"
            },
            {
                "at": "2013-07-29T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb515",
                    "fullname": "Gloria",
                    "imgUrl": "https://robohash.org/97251?set=set1",
                    "id": "97251"
                },
                "txt": "Hello! \n\nWe just spent 5 days in the big apple and we drove in to this Brooklyn location.  The host where incredibly attentive and just wonderful, the apartment spotless, hip & modern and really comfortable. \n\nDo not be intimidated by the transitioning neighborhood as we encountered that many residents are very friendly and helpful (directions) and this particular street has a real interest in making a real change hence empowering their community.\n\nThe subway is a little ways (12 to 15 min.) walk. We would use our vehicle to drive to the subway station (there are two corresponding)  and park nearby to facilitate the to and from.  If you need quick access to the subway at all hours of the day and night this may not be the place for you.\n\nThe apt. is an excellent value  for the money (as per  many  manhattan locations offer around  the same nightly  $$ rate but have to share their apt ).\n\n\n\n"
            },
            {
                "at": "2013-09-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb079",
                    "fullname": "Javier",
                    "imgUrl": "https://robohash.org/7055720?set=set1",
                    "id": "7055720"
                },
                "txt": "We really had a wonderful time in NYC thanks to Alex’s house. It’s just as big, beautiful and clean as it seems in the pictures. Alex has an incredible apartment in the basement that makes you feel like home after being out all day knowing the big city. All the furniture and the kitchen appliances are new.\r\n\r\nThe location is perfect for visiting Brooklyn and Manhattan (only 15-20 to Brooklyn Bridge and South Manhattan or 25-30 min to Times Square in the underground).\r\n\r\nAlso, Alex gave us some good advices the first day for having all we needed in the neighbourhood. Don’t miss Saraghina’s brunch (10 minutes walking from the house)! He even let us to keep our luggage in the house until we left to the airport in the evening on our last day in the city."
            },
            {
                "at": "2013-10-09T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fabc4",
                    "fullname": "Ivan",
                    "imgUrl": "https://robohash.org/8866660?set=set1",
                    "id": "8866660"
                },
                "txt": "The appartment was really clean, pretty spacious and kitchen was very well equipped! Its totally in line with all the information posted. \r\n\r\nAlex was very nice host, even allowed us to keep the luggage  after check out as we had a flight in the evening. Thank you once again for that! \r\n\r\nThe neighboorhood itself was safe, we had no issues at all, however I`d prefer staying   in Brooklyn districts closer to Manhattan area next time as  we were travelling to Midtown up to 1h. Being a citizen of the huge city too (Moscow, Russia) , underground is not our favorite place to be  :) \r\n\r\nOverall , it was a great stay. \r\n\r\n\r\n\r\n"
            },
            {
                "at": "2013-11-01T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fada2",
                    "fullname": "India",
                    "imgUrl": "https://robohash.org/228580?set=set1",
                    "id": "228580"
                },
                "txt": "Communication with Alex was spot on.  He happily answered any questions and made it easy for me to arrive late at night and went above and beyond to help me have a good stay. \r\nThe apartment has been tastefully refurbished.  Extremely clean, and with all you could need for cooking.  The bed is so comfy.  The apartment is peaceful at night and I slept so well.   Some noise travels from Alex' apartment upstairs but it is only a little during the day.\r\nThe area is a bit out of the main hub of Williamsburg and Bushwick but everything is easily accessible with a short walk or the subway about 8 mins walk away.\r\nAlex left me a list of great stores, cafes and restaurants in the immediate area.  \r\nSome people may be concerned about the area at face value as it is a white minority but I felt safe at all times.  People seemed friendly.\r\n\r\n"
            },
            {
                "at": "2013-11-10T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fb9f9",
                    "fullname": "Pamela",
                    "imgUrl": "https://robohash.org/8145538?set=set1",
                    "id": "8145538"
                },
                "txt": "Was an amazing stay, we charm your apartment and were very friendly. Thank you for all your attentions."
            },
            {
                "at": "2013-11-14T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae8c",
                    "fullname": "Lindsay",
                    "imgUrl": "https://robohash.org/979464?set=set1",
                    "id": "979464"
                },
                "txt": "Shaila and Alex are wonderful hosts - very accommodating, friendly, and easy to communicate with. We found it fairly easy to get around the city from Bed-Stuy, even with the weekend subway schedule. The apartment is lovely, bright, and very clean, and overall it was a pleasure to stay for a few nights. It's been recently renovated and thoughtfully decorated - we felt quite comfortable during our stay and appreciated the art and other nice touches throughout. I'd highly recommend staying with Shaila and Alex."
            },
            {
                "at": "2013-12-01T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbf31",
                    "fullname": "Nadia",
                    "imgUrl": "https://robohash.org/1133198?set=set1",
                    "id": "1133198"
                },
                "txt": "Great apartment, really spacious & has a lovely homely feel to it. Alex & Shaila were very helpful & welcoming, bed was really comfortable, good transport links, only a 20 min subway ride into manhattan, the area is really nice & quiet, unlike manhattan.\r\n\r\nThanks Alex & Shaila for having us ! Enjoy the Gin !! "
            },
            {
                "at": "2014-01-04T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbdab",
                    "fullname": "Barbara",
                    "imgUrl": "https://robohash.org/8310069?set=set1",
                    "id": "8310069"
                },
                "txt": "The apartment is spacious and well furnished, the kitchen very well equipped and the bed very confortable. Sheila and alex were friendly and the comunication with them was easy.the neighborhood is very nice with typical town house, and very quite. Also the people Who lives there was very kind and helped us on many occasion. \nDefinitely raccommend you to spend your holidays in NY in the lovely apartment of sheila&alex! "
            },
            {
                "at": "2014-03-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb2c1",
                    "fullname": "Chris",
                    "imgUrl": "https://robohash.org/9935301?set=set1",
                    "id": "9935301"
                },
                "txt": "We had a great time staying with Alex & Shaila. The apartment is just as depicted in the photos. Lots of space and very comfortable.  The house is located really close to buses and subway which was very convenient. The neighbourhood is fine with a couple of nice places to eat nearby.\r\n\r\nShaila and alex were really friendly and easy to communicate with if needed.  \r\n\r\nWe stayed for 2 months and would recommend it to others who are looking for a place in Brooklyn."
            },
            {
                "at": "2014-03-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb8fc",
                    "fullname": "Melody",
                    "imgUrl": "https://robohash.org/11278447?set=set1",
                    "id": "11278447"
                },
                "txt": "Upon arriving, Alex was very helpful giving directions to the location. , he gave us a brief overview of everything, and let us settle in. It was a very cozy place to come back to after long days out exploring New York. The subways are very close. We preferred heading up to broadway to catch our trains (Depending where we were going) only because it was much more pleasant on sunny days to be above grounds if we could. It was great to have all amenities available, and at such a reasonable price.The only thing I will mention is that if you do plan on sleeping in- it might not happen as they do have a newborn who you can sometimes hear in the morning if you are a light sleeper.\r\nOverall,  I would recommend you stay at Alex & Shailas airbnb! It was a great and pleasant environment."
            },
            {
                "at": "2014-04-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb41e",
                    "fullname": "Carlos",
                    "imgUrl": "https://robohash.org/13281573?set=set1",
                    "id": "13281573"
                },
                "txt": "We felt very happy those days at the home of Alex and Shaila. It is a very warm and comfortable place, it was like being at home."
            },
            {
                "at": "2014-04-21T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb087",
                    "fullname": "Sergei",
                    "imgUrl": "https://robohash.org/13487808?set=set1",
                    "id": "13487808"
                },
                "txt": "Great host. Very clean, nice place and friendly people. Thanks again!"
            }
        ],
        "_id": "622f337a75c7d36e498aaafb",
        "imgUrls": [
            "101.jpeg",
            "037.jpeg",
            "038.jpeg",
            "043.jpeg",
            "113.jpeg"
        ]
    },
    {
        "name": "Habitación centro de Barcelona",
        "summary": "Mi piso está en el centro de Barcelona. Cerca del metro, las ramblas, los museos, el Portal del Ángel, Plaza Cataluña. Mi alojamiento es bueno para turistas, aventureros, y viajeros de negocios....y tiene ascensor.",
        "interaction": "Estaré disponible para cualquier duda o problema que se os presente. Conozco muy bien la ciudad y os puedo recomendar sitios.",
        "houseRules": "No hacer fiestas, no traer invitados a la habitación. Respetar el descanso de los vecinos. Mantener el orden y la limpieza de la casa. Recordar que alquilas una habitación, no un piso. Please: No smoking, no loud noise after 11pm, be courteous to neighbors and clean up after yourself when you use the kitchen and the bathroom. No guests.",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "flexible",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 2,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Doorman",
            "Elevator",
            "Buzzer/wireless intercom",
            "Heating",
            "Essentials",
            "Hangers",
            "Hair dryer",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50"
        ],
        "host": {
            "_id": "622f3407e36c59e6164fbdae",
            "fullname": "Marián",
            "location": "Barcelona, Catalonia, Spain",
            "about": "",
            "thumbnailUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "31635864"
        },
        "address": {
            "street": "Barcelona, Catalunya, Spain",
            "country": "Spain",
            "location": {
                "lat": 2.16685,
                "lan": 41.38371
            },
            "countryCode": "ES",
            "city": "Barcelona"
        },
        "id": "13669275",
        "bathrooms": 1,
        "price": 40,
        "securityDeposit": null,
        "cleaningFee": null,
        "extraPeople": 20,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 9,
            "location": 10,
            "value": 9,
            "rating": 90
        },
        "reviews": [{
                "at": "2016-07-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbebb",
                    "fullname": "Rafaela",
                    "imgUrl": "https://robohash.org/65117711?set=set1",
                    "id": "65117711"
                },
                "txt": "Host: Marian gave us a warm welcome and treated us kindly from the very beginning. She offered us help, told us what to visit and even put water, milk and orange juice in the fridge! We could have breakfast at her place which was perfect because she has a little sweet balcony! \r\nLocation: calmly situated in a side street, very near to the Placa Catalunya, the Rambla and the gothic area of Barcelona (very beautiful:)) so you have the old cultural center as well as all the restaurants and bars just nearby.\r\nHouse/Room: the appartment is not a huge, but I think you have everything you need (beautiful sitting room, balcony, kitchen) in it. You have to share the appartment with Marian so pay attention and don't be too loud in the evening!!\r\ndisadvantage: the heat is terrible in summer and there is no air-condition..\r\n\r\nI would overall recommend it to everybody!! But if you want to party and stay up late, take a hostel or another appartment."
            },
            {
                "at": "2016-08-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164faf56",
                    "fullname": "Pauline",
                    "imgUrl": "https://robohash.org/50303773?set=set1",
                    "id": "50303773"
                },
                "txt": "Nous avons passé un bon séjour, l'appartement est très bien situé. La chambre est agréable et plus grande que sur la photo. Seul point négatif pas de volets dans la chambre. "
            }
        ],
        "_id": "622f337a75c7d36e498aaafc",
        "imgUrls": [
            "088.jpeg",
            "027.jpeg",
            "008.jpeg",
            "023.jpeg",
            "136.jpeg"
        ]
    },
    {
        "name": "DOUBLE ROOM IN THE HEART OF BCN",
        "summary": "Lit room with balcony. The apartment is in the center, just meters from the Palau de la Musica Catalana. Well connected, a few minutes from Las Ramblas and the Born. Very close to the beach and Ciutadella Park",
        "interaction": "Te proporcionaré sábanas y toallas, para que no te preocupes de traerlas tú.",
        "houseRules": "-Mantener el espacio limpio y recogido. -No está permitido invitar a gente al apartamento. -Respetar el descanso de los vecinos. -No hacer ruido en la escalera. Apelo al sentido común de los inquilinos para una convivencia relajada y fluída. No hay normas en la casa más allá de las que dicte el sentido común.",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 108,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Paid parking off premises",
            "Smoking allowed",
            "Heating",
            "Washer",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "Hangers",
            "Hair dryer",
            "Iron",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50",
            "Hot water",
            "Bed linens",
            "Host greets you"
        ],
        "host": {
            "_id": "622f3404e36c59e6164fb63a",
            "fullname": "Isabel",
            "location": "Barcelona, Catalonia, Spain",
            "about": "Mi nombre es Isabel, pero me llamo Isa. Nací en Vigo (Galicia). Con 20 años me fuí a vivir a Madrid con intención de ser actriz; ahora resido en Barcelona desde los 28. Soy una joven de 43 años, cantante de Jazz. Me gusta salir, pero también quedarme en casa a leer o ver alguna buena película.\r\nHe compartido piso muchos años, pero estas serán mis primeras experiencias como anfitriona.\r\n\r\n¡Sed bienvenidos!\r\n",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "35858044"
        },
        "address": {
            "street": "Barcelona, Catalonia, Spain",
            "country": "Spain",
            "location": {
                "lat": 2.17561,
                "lan": 41.38701
            },
            "countryCode": "ES",
            "city": "Barcelona"
        },
        "id": "11115528",
        "bathrooms": 1,
        "price": 25,
        "securityDeposit": null,
        "cleaningFee": 25,
        "extraPeople": 20,
        "reviewScores": {
            "accuracy": 9,
            "cleanliness": 9,
            "checkin": 9,
            "communication": 10,
            "location": 10,
            "value": 9,
            "rating": 90
        },
        "reviews": [{
                "at": "2016-02-24T05:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb95e",
                    "fullname": "Pierre",
                    "imgUrl": "https://robohash.org/58999873?set=set1",
                    "id": "58999873"
                },
                "txt": "Una instancia muy céntrica en uno de estos edificios antiguos del Barri Gotic. No es poco haber conseguido estar en el centro de Barcelona en la misma semana del Mobile World Congress. Isabel es un encanto de anfitrión."
            },
            {
                "at": "2016-03-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fafa6",
                    "fullname": "Isabelle",
                    "imgUrl": "https://robohash.org/26247027?set=set1",
                    "id": "26247027"
                },
                "txt": "The host canceled this reservation 2 days before arrival. This is an automated posting."
            },
            {
                "at": "2016-04-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbaf2",
                    "fullname": "Hélène",
                    "imgUrl": "https://robohash.org/46103953?set=set1",
                    "id": "46103953"
                },
                "txt": "Chambre très bien située et hôtesse très sympathique. Merci encore Isabel pour l'accueil !"
            },
            {
                "at": "2016-04-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbdc3",
                    "fullname": "Daniel",
                    "imgUrl": "https://robohash.org/25801559?set=set1",
                    "id": "25801559"
                },
                "txt": "Sheets weren't clean... Shower has very low water pressure. Room is only good for sleeping. It's in a good location but that's about it. Isabel could've provided more information about what's around the house during check in... Overall just decent enough to sleep"
            },
            {
                "at": "2016-04-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fabad",
                    "fullname": "Maria Isabel",
                    "imgUrl": "https://robohash.org/60712702?set=set1",
                    "id": "60712702"
                },
                "txt": "Isabel est accueillante. L'appartement est charmant, correspond aux images. Très bien situé, à côté de Palau de la musica, dans un vieil immeuble plein de charme un peu désuet. Amateurs de confort et décor \"tendance\" s'abstenir. Chez Isabel on se trouve dans une authentique ambiance d'artiste. Merci beaucoup, je garderai le souvenir de cet accueil lié aux souvenirs de Barcelone."
            },
            {
                "at": "2016-05-04T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb967",
                    "fullname": "Aitana",
                    "imgUrl": "https://robohash.org/53206905?set=set1",
                    "id": "53206905"
                },
                "txt": "Es un piso con mucho encanto, muy tranquilo y en un lugar inmejorable. La anfitriona, Isabel, es amable y facilitadora. El piso es una construcción antigua, lo que le da un ambiente genial pero también hace que el agua de la ducha salga con poquísima presión y sea un poco incómodo a veces. A parte de esto, si tuviese que poner alguna queja sería la hora del chekout, ya que las diez de la mañana me parece un poco pronto. \r\nEn conjunto tuvimos una muy buena experiencia y repetiríamos sin duda."
            },
            {
                "at": "2016-05-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbb88",
                    "fullname": "Valentina",
                    "imgUrl": "https://robohash.org/69740054?set=set1",
                    "id": "69740054"
                },
                "txt": "Isabel was a wonderful host even if she was not there. She was in touch with me by mobile constantly. Thank you so much!\r\nThe house it's nice and was very clean and quite in the night.Perfect location. All you need for few days in Barcelona!"
            },
            {
                "at": "2016-05-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb715",
                    "fullname": "Jeremy",
                    "imgUrl": "https://robohash.org/53581405?set=set1",
                    "id": "53581405"
                },
                "txt": "Isabel's place was perfect. It was cozy, clean and quiet. She was a very gracious host and was always there to answer my questions about getting around Barcelona. "
            },
            {
                "at": "2016-05-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb0b2",
                    "fullname": "Mei-Lin",
                    "imgUrl": "https://robohash.org/40994614?set=set1",
                    "id": "40994614"
                },
                "txt": "Great room with lots of sunlight in a charming apartment. Fantastic location."
            },
            {
                "at": "2016-06-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb1f7",
                    "fullname": "Taneli",
                    "imgUrl": "https://robohash.org/8010736?set=set1",
                    "id": "8010736"
                },
                "txt": "Isa was a kind and gracious host with a lovely appartment in a centric and vibrant area. We loved our stay and surely will visit again."
            },
            {
                "at": "2016-06-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb623",
                    "fullname": "Natasha",
                    "imgUrl": "https://robohash.org/25592253?set=set1",
                    "id": "25592253"
                },
                "txt": "SUPER cute place with lots of charm!! Perfect for my first trip to Barcelona:) Amazing location! Gracias Isabel for helping me find last minute accommodations! \r\n"
            },
            {
                "at": "2016-06-23T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fc013",
                    "fullname": "Elizabeth",
                    "imgUrl": "https://robohash.org/78467282?set=set1",
                    "id": "78467282"
                },
                "txt": "Isabel was a great host. She met me at the local bar where she worked and took me to her home a street away. The flight of stairs up to here place was a bit daunting but I can see why she lives up there.. It was beautiful! The room and whole place was clean, tidy and very welcoming. I saw Isabel twice, when I arrived and when I left, but it was perfect. \n\nThe facilities were great. The pressure in the shower was weak but it didn't bother me one bit. It is a bit noisy being in the heart of the city, but I can imagine it would be anywhere in this area. It was lovely to have a balcony, and the location was very convenient. Thanks.x"
            },
            {
                "at": "2016-06-28T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb0af",
                    "fullname": "Monika",
                    "imgUrl": "https://robohash.org/11966400?set=set1",
                    "id": "11966400"
                },
                "txt": "Isabel was good host. Location is perfect."
            },
            {
                "at": "2016-07-03T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb23a",
                    "fullname": "Margaux",
                    "imgUrl": "https://robohash.org/78589438?set=set1",
                    "id": "78589438"
                },
                "txt": "Super piso, super barrio! \r\nThe guest welcomed us well."
            },
            {
                "at": "2016-07-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb21c",
                    "fullname": "Elisabeth",
                    "imgUrl": "https://robohash.org/4965921?set=set1",
                    "id": "4965921"
                },
                "txt": "It was really nice to stay at Isabels place. She is very uncomplicated and nice and the flat is super located for exploring bcn. For me it was perfect!:)"
            },
            {
                "at": "2016-07-23T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbd7f",
                    "fullname": "Ingrid",
                    "imgUrl": "https://robohash.org/6058273?set=set1",
                    "id": "6058273"
                },
                "txt": "IT was the perfect stay to Discover the city-a super location with sometimes noisy tourists (even we we're tourists but hopefully not so noisy) but that's part of the location i guess :-). We loved the colourful house and we Will Be go back for a next stay. thank you!"
            },
            {
                "at": "2016-07-30T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb1ac",
                    "fullname": "Liliane",
                    "imgUrl": "https://robohash.org/27060110?set=set1",
                    "id": "27060110"
                },
                "txt": "Isa is a very lovely, sensitive, artistic and gorgeous person. She is respectful of one's privacy but always ready to give support when asked upon. Be it in spoken or written form I always got my answers from her within no times. She also proofed to be very flexible in terms of arrival and departure times which I appreciated a great deal. If you are a fan of jazz music (like I am), make sure to double check ahead of time about her current concert dates so as not to miss your hostess on stage like I did (grumble ;-)).\n\nThe room I occupied was the smaller one of two that Isabel rents out. So if her flat is fully rented out there can be a maximum of 4 guests plus your hostess in the flat, which can cause some bathroom jam, especially during the hot and humid summer times, when the need for a cool shower is inherent to everyone's desire. \nMy room was as depicted. If you plan on using it for double occupancy, I recommend taking Isa's larger room (unless the two of you are very much in love and want to cuddle up close ;-)). Also, if you need a table for writing, ask for the larger room as well, which comes along with one.\nThe flat itself is absolutely enchanting and furnished with love and an artistic eye to details. It's location is a dream for touristic explorations with anything within walking distance. \nTherefore, I can easily recommend both Isabel and her flat to anyone wishing to immerge himself into the local customs and get a good doze of what it is like \"to live like a true Barcelonian\".  \n\nQuerida Isa, muchas gracias por tu hospedalid génial! Volveré a ciencia cierta!\nSaludos y besos\nLiliana"
            },
            {
                "at": "2016-08-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb8e1",
                    "fullname": "Murat",
                    "imgUrl": "https://robohash.org/35246459?set=set1",
                    "id": "35246459"
                },
                "txt": "The apartment is very centrally located, in the heart of the gothic part of the city and a couple of blocks from the Placa de Catalunya which makes transportation and sightseeing very easy. It's a 20 minute walk from the beach which is a plus. It's located in a very old building on the top floor, so it is rather stuffy and warm in the apartment. The room overlooks a very narrow street/alley so it's rather dark and it's easy to hear the noise coming from the street and the neighboring apartments. There are a few other rooms in the house that are being rented out, so other people will be staying in the house which makes it a necessity to lock the room when you leave the apartment. \n\nIt's important to note that this place has a very strict check out time. On our last day, we had an evening flight but had to check out in the morning. When we asked if we could check out late, Isa told us to take our stuff to the train station and use the lockers there, but the train station does not have lockers. We ended up renting a locker  at a place called \"Barcelona lockers\". That, I would say changed all the plans for the last day. \n\n"
            },
            {
                "at": "2016-08-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbcb4",
                    "fullname": "Mina",
                    "imgUrl": "https://robohash.org/121053?set=set1",
                    "id": "121053"
                },
                "txt": "I was happy to experience Isabels home as described here. It was spacious, bright and original, with lovely colours and beautiful artwork surrounding me in every room. Isabel is a creative, sensitive and respectful person, with an open mind- yet she has the necessary boundaries that are required to organize an environment where so many different people are going to stay and hopefully enjoy. \nThe street itself is very lively, but the noises didn't bother me at all as i could easily block them out with earplugs. The location could not have been more sentral, still it's on \"the right side\" of the Rambla, where you can find more independent shops, restaurants, cafes and bars compared to the same leveled streets towards Raval. It is an old and very charming building, so if you want an minimalistic experience with cold, stainless steel and elevators this is not the place for you! And perhaps you are not the right person for this place either ;) I had to leave earlier due to illness, and was so sorry i couldn't stay throughout the whole month as planned. Hope to be seeing Isabel and her welcoming surroundings again one day "
            },
            {
                "at": "2016-09-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb85f",
                    "fullname": "Jessy",
                    "imgUrl": "https://robohash.org/2935800?set=set1",
                    "id": "2935800"
                },
                "txt": "Isabel was an amazing host. She is incredible and super considerate. The apartment was by no means the best location in Barcelona, I walked everywhere and never needed a map or a taxi. Arriving late at night was always fine and there was never any disturbing street noise. The block is super cute with awesome little shops that are open during the day. Best neighborhood to be in and incredible city ! Muchísima gracias Isabel, estas invitada a visitar Los Ángeles, todo fue increíble !❤️"
            }
        ],
        "_id": "622f337a75c7d36e498aaafd",
        "imgUrls": [
            "127.jpeg",
            "004.jpeg",
            "096.jpeg",
            "141.jpeg",
            "114.jpeg"
        ]
    },
    {
        "name": "Home, Sweet, Harlem. Welcome!",
        "summary": "Welcome! Upgrades Added as of January 2018 This listing is located in the Spanish Harlem Section of Manhattan. I offer a cozy apartment that has great transportation in and out the city! The area has a lot of ethnic restaurants and a lot of local, active residents. This residence is great for a quick, inexpensive stay in New York whether its for business, travel, or personal purposes. I am glad to welcome all guests!",
        "interaction": "I am great with communicating with my guest and making sure everyone is comfortable as possible. The apartment is yours to use but I am only a phone call away!",
        "houseRules": "I take time and effort to maintain the household with the utmost cleanliness and hospitality. It is filled with the essentials needed to enjoy your stay.  I do ask to kindly respect the household as if it was yours. Please be courteous.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 3,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 199,
        "amenities": [
            "TV",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Free street parking",
            "Heating",
            "Smoke detector",
            "Carbon monoxide detector",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "Hangers",
            "Iron",
            "Laptop friendly workspace",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50",
            "Private living room",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Refrigerator",
            "Dishes and silverware",
            "Cooking basics",
            "Oven",
            "Stove",
            "Host greets you"
        ],
        "host": {
            "_id": "622f3405e36c59e6164fb914",
            "fullname": "Kevin",
            "location": "New York, New York, United-States",
            "about": "Welcome Everyone! Thank you for stopping by. \r\n\r\nI was born and raised in Manhattan and I am here to help  share the New York City Experience with others through Airbnb!  I am easy to connect with and very reachable and always willing to interact with people. \r\n\r\nI am big on cleanliness and hospitality. I strive on making Guests feel as comfortable as possible. \r\n\r\nI hope you would like to get a chance to visit my location and enjoy the hosting I provide. If you have any questions/ comments, feel free to contact me. \r\n",
            "responseTime": "within a few hours",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/61b62b90-e38b-4609-a3c4-ff5ff06b5c08.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/61b62b90-e38b-4609-a3c4-ff5ff06b5c08.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "24800102"
        },
        "address": {
            "street": "New York, NY, United-States",
            "country": "United-States",
            "location": {
                "lat": -73.93955,
                "lan": 40.79733
            },
            "countryCode": "US",
            "city": "New York"
        },
        "id": "11097962",
        "bathrooms": 1,
        "price": 110,
        "securityDeposit": 0,
        "cleaningFee": 10,
        "extraPeople": 25,
        "reviewScores": {
            "accuracy": 9,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 9,
            "rating": 90
        },
        "reviews": [{
                "at": "2016-03-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb8b4",
                    "fullname": "Christine",
                    "imgUrl": "https://robohash.org/47877926?set=set1",
                    "id": "47877926"
                },
                "txt": "Kevin was very welcoming and thorough with all information. The description of the property was accurate. It's also near the MTA if you want to get to another part of the city. Kevin got in touch before I arrived, and his brother was there to meet me and show me where everything was, which was great. Last but not least, he had provided a great information on the local area with recommendations for places to eat, etc., which I found really useful.\r\n"
            },
            {
                "at": "2016-04-17T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbdb9",
                    "fullname": "Hector",
                    "imgUrl": "https://robohash.org/36832696?set=set1",
                    "id": "36832696"
                },
                "txt": "Kevin was nice. And he was very responsive via text, which I appreciate. The listing is in East Harlem, which isn't for everyone. The area is not very posh, but, for me, it feels like home, so I tend to stay there whenever I go to New York. The listing description was accurate enough, with respect to the way the apartment looks. If you can't deal with noise at night, however, this might not be the place for you. The neighbors were surprisingly noisy in the wee hours of the night and virtually silent during the day. This apartment is close to the subway, which was very useful."
            },
            {
                "at": "2016-04-23T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbdca",
                    "fullname": "Jaime",
                    "imgUrl": "https://robohash.org/37244180?set=set1",
                    "id": "37244180"
                },
                "txt": "Kevin was very helpful and communicative during the whole time. The apartment is very nice, and within walking distance to the subway. Would definitely stay there again."
            },
            {
                "at": "2016-04-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae69",
                    "fullname": "Anan",
                    "imgUrl": "https://robohash.org/30380132?set=set1",
                    "id": "30380132"
                },
                "txt": "I had a wonderful stay at Kevin's apartment. The apartment is very close to the six train line. Everything in the apartment was spotless clean. I definitely recommend this apartment to others. Thank you Kevin for hosting me!"
            },
            {
                "at": "2016-05-04T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbf23",
                    "fullname": "Yamilis",
                    "imgUrl": "https://robohash.org/5684819?set=set1",
                    "id": "5684819"
                },
                "txt": "Kevin fue excelente anfitrión. Se mantuvo en contacto con nosotros y fue muy comprensivo aún cuando llegamos más tarde de la hora acordada para el check in porque nos perdimos en el subway. También fue muy comprensivo para acordar el check out de acuerdo a la hora que fue más conveniente para nosotros, aún cuando también se nos hizo tarde. Nos proveyó de un matress de aire para nuestra amiga que vino de M.A. y se quedó una noche con nosotros. El barrio nos pareció bien, no tuvimos ningún incidente. Muchos puertoriqueños y Dominicanos, así que nos sentimos como en casa. Todo fue muy cómodo y limpio. Los vecinos hicieron mucho ruido en las noches, pero no fue problema para nosotros. Una sugerencia sería poner un espejo de cuerpo completo en alguna parte del apartento. En resumen, el apartamento fue perfecto para nosotros, nos volveríamos a quedar y claro que lo recomendaría! Muchas Gracias Kevin por tu ayuda!"
            },
            {
                "at": "2016-05-08T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb6a4",
                    "fullname": "Leonam",
                    "imgUrl": "https://robohash.org/44604680?set=set1",
                    "id": "44604680"
                },
                "txt": "Kevin was really thoughtful about everything. He gave me all information needed while staying on his house. The house was very clean."
            },
            {
                "at": "2016-05-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fc063",
                    "fullname": "Amy",
                    "imgUrl": "https://robohash.org/4923470?set=set1",
                    "id": "4923470"
                },
                "txt": "Kevin is a really nice host, flexible and very responsive. The apartment is a 4th-floor walk up, well-maintained and exactly as advertised in the listing. The apartment has all the basic things--it's especially nice to have a kitchen and comfy sofa. There's no TV and wifi, but you probably don't need it anyway since you are here to see New York city! It is just a short 5-min walk from the subway station, so very convenient. Street noise is not a problem although you can hear the neighbors at times (the kids next door can be noisy). East Harlem is a bustling Latino neighborhood with many local eateries and shops. The food selection is supposed to be great (too bad we didn't get to try any). There is a grocery store right outside the building. There're always locals hanging out in front but we were never bothered. All and all, a good choice if you are looking to stay in this part of the city."
            },
            {
                "at": "2016-05-17T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fab7d",
                    "fullname": "Vlad",
                    "imgUrl": "https://robohash.org/61270769?set=set1",
                    "id": "61270769"
                },
                "txt": "Kevin was an excellent host. Everything was absolutely as described. The apartment is lovely and very clean. There are numerous windows in every room and there is plenty of light! Would definitely stay again!"
            },
            {
                "at": "2016-05-19T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbe7b",
                    "fullname": "Derick",
                    "imgUrl": "https://robohash.org/63351088?set=set1",
                    "id": "63351088"
                },
                "txt": "Great experience, we enjoyed ourselves for the night we stayed, only issue really were the neighbors being loud all night made it hard to sleep."
            },
            {
                "at": "2016-05-21T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbefb",
                    "fullname": "Derek",
                    "imgUrl": "https://robohash.org/794527?set=set1",
                    "id": "794527"
                },
                "txt": "Kevin's place is exactly as other reviewers describe it:  nice and clean, spacious and very convenient as a base to explore and enjoy NYC. \r\n\r\nThe Neighborhood is definitely classic East Harlem.  Very real NYC vibe. Not a tourist area.  \r\n\r\nThe neighbors are noisy sometimes, so if you are a light sleeper, that could be a problem. But I didn't have any trouble. \r\n\r\nIt would have been nice to have wireless, but I didn't come to NYC to play online, so I didn't mind that too much.  \r\n\r\nKevin was a very nice, responsive host! "
            },
            {
                "at": "2016-05-22T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb484",
                    "fullname": "Shiann",
                    "imgUrl": "https://robohash.org/26290842?set=set1",
                    "id": "26290842"
                },
                "txt": "Kevin made my friend and I feel really welcomed. The apartment was very clean!"
            },
            {
                "at": "2016-05-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb208",
                    "fullname": "Stephanie",
                    "imgUrl": "https://robohash.org/73751485?set=set1",
                    "id": "73751485"
                },
                "txt": "Me and my husband stayed in the apartment this was our first time using this site and Kevin made us feel like we are regulars. We stayed one night and it was wonderful. Kevin contacted us right away and was really good with getting us whatever we need to stay there. The area is the only bad thing but when we went in the apartment you really forget about the outside."
            },
            {
                "at": "2016-05-29T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb52c",
                    "fullname": "Virginie",
                    "imgUrl": "https://robohash.org/8842288?set=set1",
                    "id": "8842288"
                },
                "txt": "Kevin is easy to get in touch with and waited for us to arrive Even if it was already late in the evening. He even asked if everything was fine during our stay.\nThe appartment is perfectly situated to visit Manhattan island. Just note the neighbours are noisy if it is important to you."
            },
            {
                "at": "2016-06-06T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb803",
                    "fullname": "Ada",
                    "imgUrl": "https://robohash.org/65358522?set=set1",
                    "id": "65358522"
                },
                "txt": "Kevin was absolutely wonderful. He was very responsive and communicative and I could tell he takes great pride in being an exceptional host. His place was exactly as described, as shown in the pictures and also very clean. The neighborhood is great and the room is a great price for someone looking to stay in the city and explore. It's right next to the trains, neighborhood gems but also commonly known stores for anyone who isn't familiar with the area. "
            },
            {
                "at": "2016-06-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbc21",
                    "fullname": "Fernando",
                    "imgUrl": "https://robohash.org/75294316?set=set1",
                    "id": "75294316"
                },
                "txt": "everything was correct , very good condition to this price"
            },
            {
                "at": "2016-06-14T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbdfe",
                    "fullname": "Francesca",
                    "imgUrl": "https://robohash.org/56355386?set=set1",
                    "id": "56355386"
                },
                "txt": "This is my first time using Airbnb. Kevin responded quickly to my inquiry about booking his apartment. Once booked he was very easy to reach via phone or text if I needed to. His one bedroom apartment was very clean and nicely furnished. It is central to a lot of restaurants and neighborhood shopping should you need something and a couple blocks from the subway and buses. Kevin was a great host. He was there to greet me, show me around the apartment and tell me a bit about the area. He also has maps and booklets about what to visit while in New York City. There is wifi in the apartment which is great. Kevin checked in with me just to make sure everything was ok during my trip. I had a wonderful stay at his apartment and would book it again! "
            },
            {
                "at": "2016-06-20T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb4de",
                    "fullname": "Alex",
                    "imgUrl": "https://robohash.org/45975680?set=set1",
                    "id": "45975680"
                },
                "txt": "Kevin was a phenomenal host, he was very accommodating about arrival and check out times and provided me with a ton of useful information to navigate the area and make my stay as pleasant as possible. The apartment is two blocks from the subway and easy to navigate from. I would definitely recommend staying at Kevin's for all those considering a trip to New York."
            },
            {
                "at": "2016-06-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbd08",
                    "fullname": "Johanna",
                    "imgUrl": "https://robohash.org/75777207?set=set1",
                    "id": "75777207"
                },
                "txt": "The apartment is as described. Kevin is very pleasant and was kind to helped me bring my belongings to the apartment. The apartment is cozy in a great location. I will definitely be using this apartment again"
            },
            {
                "at": "2016-07-03T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb7a6",
                    "fullname": "Bandele",
                    "imgUrl": "https://robohash.org/5357325?set=set1",
                    "id": "5357325"
                },
                "txt": "Kevin's a great guy, but if you're looking for a hotel-like experience, this is NOT it... This however, IS a genuine NYC experience. Noisy & inconsiderate neighbors, dirty streets, dangerous vibes... All in all your safe, and anyone you actually talk to will be cool... Kevin was also very considerate and did everything he could to add comfort to my stay, he even warned me of the noisy neighbors in advance... This place is good for people who already know NYC, and need an affordable, SHORT-TERM (like 1-2days), place to crash uptown..."
            },
            {
                "at": "2016-07-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb80a",
                    "fullname": "Bryan",
                    "imgUrl": "https://robohash.org/73430217?set=set1",
                    "id": "73430217"
                },
                "txt": "This place was cozy, comfortable and very clean. The AC was very helpful during the heat waves. Good shower and great WiFi connection as well."
            }
        ],
        "_id": "622f337a75c7d36e498aaafe",
        "imgUrls": [
            "026.jpeg",
            "119.jpeg",
            "017.jpeg",
            "023.jpeg",
            "096.jpeg"
        ]
    },
    {
        "name": "Spacious 2 Bedroom: Soho/Escalator",
        "summary": "Bright and spacious two bedroom apartment located in Soho along the famous HK escalator.  Numerous restaurants, cafes and bars (including the Lan Kwai Fong district) are only minutes away on foot. All comforts are provided including clean sheets, towels, shampoo, conditioner, body wash, hair dryer, laundry, hand soap, full kitchen amenities and wifi.",
        "interaction": "Key-less key pad entry makes this place super easy to enter.  A binder with detailed instructions on wifi, TV and other important information is provided.  I am always available by message on Airbnb.",
        "houseRules": "We're sure you will have a wonderful stay in this very exciting neighbourhood.  Although our walls are pretty thick, please respect our neighbours and be quiet, particularly when you are in the hallway coming and going. Please do not use linens and towels other than what are provided for you. This may incur an additional charge for laundry services. Please also keep the place clean and tidy. There is a large garbage/rubbish bin in the stairwell. Extra garbage bags are under the sink. If you would like to recycle, you can take recyclables down one escalator to the seperation bins.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 5,
        "bedrooms": 2,
        "beds": 3,
        "numOfReviews": 86,
        "amenities": [
            "TV",
            "Cable TV",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Pets allowed",
            "Elevator",
            "Heating",
            "Family/kid friendly",
            "Washer",
            "Dryer",
            "Smoke detector",
            "Essentials",
            "Shampoo",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "Self check-in",
            "Keypad",
            "High chair",
            "Pack ’n Play/travel crib",
            "Hot water",
            "Bed linens",
            "Coffee maker",
            "Refrigerator",
            "Dishes and silverware",
            "Cooking basics",
            "Oven",
            "Stove",
            "Long term stays allowed"
        ],
        "host": {
            "_id": "622f3403e36c59e6164fb247",
            "fullname": "Tara",
            "location": "Hong Kong",
            "about": "Living in Hong Kong for the past 10 years my husband and I love to travel in Asia any chance we get. When not travelling, we relax in our village house outside the city, garden and go to the beach. We love staying active, eating healthy and exploring all corners of Hong Kong.",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/59adef7b-33ba-4088-a3bc-82319813c1a6.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/user/59adef7b-33ba-4088-a3bc-82319813c1a6.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "56006867"
        },
        "address": {
            "street": "Hong Kong, Hong Kong Island, Hong Kong",
            "country": "Hong Kong",
            "location": {
                "lat": 114.15315,
                "lan": 22.28028
            },
            "countryCode": "HK",
            "city": "Hong Kong"
        },
        "id": "10816768",
        "bathrooms": 1,
        "price": 1703,
        "securityDeposit": 0,
        "cleaningFee": 400,
        "extraPeople": 100,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 10,
            "value": 10,
            "rating": 99
        },
        "reviews": [{
                "at": "2017-09-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fadb5",
                    "fullname": "Fergus",
                    "imgUrl": "https://robohash.org/2121403?set=set1",
                    "id": "2121403"
                },
                "txt": "This place is a gem!  It's in the heart of everything from western restaurants to shopping to the nightlife district.  It was still very quiet though in the building.  The place looks exactly as the photos and was recently renovated completely. The concierge was helpful when we needed help. Tara was fantastic as well. She waited for us for over a 1.5 hours when we were late, gave us a thorough run down of the apartment and neighbourhood, and made some very good recommendations for places to eat around there in her welcome guide package. Would highly recommend this place and going with her suggestions."
            },
            {
                "at": "2017-09-17T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae64",
                    "fullname": "HoJoong",
                    "imgUrl": "https://robohash.org/135316857?set=set1",
                    "id": "135316857"
                },
                "txt": "It's good. Tara is very kind person. This bnb is located soho street. It was fantastic!!!!!!"
            },
            {
                "at": "2017-10-06T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb622",
                    "fullname": "Pearl",
                    "imgUrl": "https://robohash.org/37569995?set=set1",
                    "id": "37569995"
                },
                "txt": "Die Wohnung war super! Sie ist sehr zentral gelegen. Von dort aus kann man in nur 20 Minuten bis zum Hafen laufen. In der Nähe gibt es sehr viele Restaurants und Bars. Die Wohnung selbst ist sehr gut ausgestattet (es fehlte nichts) und war für 4 Personen ideal. Auch die Gastgeberin war super freundlich und war für Fragen immer da. Ich würde diese Wohnung immer wieder buchen!"
            },
            {
                "at": "2017-10-08T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb216",
                    "fullname": "Maria",
                    "imgUrl": "https://robohash.org/26847704?set=set1",
                    "id": "26847704"
                },
                "txt": "Tara's Apartment ist der perfekte Ausgangspunkt um Hongkong zu entdecken. Auch für eine unkomplizierte An- und Abreise vom / zum Flughafen ist die Lage super.\nDer Bezirk Soho bietet viele tolle Cafés, Bars und Restaurants die man fußläufig erreichen kann.\nDie Ausstattung des Appartement lässt keine Wünsche offen. \nAlles hat prima geklappt. Wenn ich noch mal in Hongkong bin, bin ich auf jeden Fall wieder bei Tara."
            },
            {
                "at": "2017-10-17T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164faf0c",
                    "fullname": "Ping",
                    "imgUrl": "https://robohash.org/30464819?set=set1",
                    "id": "30464819"
                },
                "txt": "stayed at Tara's place for 6 nights as 3 adults and 2 children. quiet apartment with 24hr friendly doorman, located right next to the mid-level escalators, about 15 minutes up from IFC (easy access with a stroller with only a half-flight of stairs between Hang Seng Bank and the Central Market building). two grocery stores just down the street. 2 bedrooms with good cabinet space. plenty of sheets and towels. large open-design kitchen/dining/living room with good counter space. well stocked kitchen with coffee/tea/sugar. welcomed with bottle of red wine and fresh fruit. provided with baby cot, baby tub and high chair for the the little ones. umbrellas came in handy for the 2 days of rain. overall a very nice place to stay with family in Hong Kong."
            },
            {
                "at": "2017-10-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fba7a",
                    "fullname": "Aurelien",
                    "imgUrl": "https://robohash.org/91667573?set=set1",
                    "id": "91667573"
                },
                "txt": "No doubt, this is THE apartment for enjoying a stay in Hong Kong:\n- Prime location\n- Full equipped apartment \n- All facilities around (organic shops, mini-supermarket, good restaurants, ...)\n- Excellent tips from Tara on good adresses around her place\n- What else? Everything was perfect and thanks to Tara who has been friendly, reactive and flexible (late check-out due to personal reason)"
            },
            {
                "at": "2017-11-04T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbb4f",
                    "fullname": "Joëlle",
                    "imgUrl": "https://robohash.org/68530366?set=set1",
                    "id": "68530366"
                },
                "txt": "L’appartement est très bien situé près de l’escalator. Quartier branché plein de bars et restos mais situation très calme malgré tout car l’appartement donne sur l’arrière de l’immeuble. Entièrement refait, il est propre et moderne, très bien équipé. Une belle pièce de vie et des rangements. Je recommande fortement. Tara est très rapide à répondre également à toute question. Et en plus, nous avions une belle corbeille de fruits et une bouteille de vin qui nous attendaient à notre arrivée. Séjour parfait."
            },
            {
                "at": "2017-11-07T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbf74",
                    "fullname": "Thorsten",
                    "imgUrl": "https://robohash.org/53604980?set=set1",
                    "id": "53604980"
                },
                "txt": "Die Wohnung ist super gelegen und Tara eine super Gastgeberin. Auch wenn wir sie nicht persönlich kennen gelernt haben, war die Organisation und Kommunikation spitze!"
            },
            {
                "at": "2017-11-13T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb3ad",
                    "fullname": "Franca",
                    "imgUrl": "https://robohash.org/85419608?set=set1",
                    "id": "85419608"
                },
                "txt": "My brother, a friend of mine and I stayed at Tara's place for just under a week. The location of the place is spectacular, the view is amazing (nestled inbetween so many skyscrapers) and getting in and out of the place is really easy! We had a bit of trouble checking-in, since we didn't have the apartment number in the information provided to us. That was not Tara's fault though.. When you come here, just make sure you get all of the neccessary info in advance from airbnb. The aparment was clean and well-kept and communication with Tara was easy and quick. She let us check out pretty late (3pm), which we really really appreciated! The only thing we didn't love about the place was that there sometimes was a bit of an odor coming out of the bathroom.. I'm pretty sure that isn't Tara's fault either though, it must be a problem with old plumbing. But there is a window in the shower, so it's very easy to just air-out the bathroom with the door closed!\nOver all we are very very happy with our stay at Tara's place and would definitely come again:)"
            },
            {
                "at": "2017-11-19T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbe8d",
                    "fullname": "Soowon",
                    "imgUrl": "https://robohash.org/72782310?set=set1",
                    "id": "72782310"
                },
                "txt": "good and valuable place with nice location"
            },
            {
                "at": "2017-11-23T05:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb6ef",
                    "fullname": "James",
                    "imgUrl": "https://robohash.org/7771827?set=set1",
                    "id": "7771827"
                },
                "txt": "Tara’s place is absolutely fabulous. \nShe also made it very easy foe us in terms of communicating super fast for any requests. \nLocation is great. It’s nicely decorated with good lighting and art. \nThe bathroom is modern and well kitted out. \nWe cooked meals at home on the great stove. \nThe apartment has everything you need, and is in one of the best locations in town. \nWe highly recommend staying there (if it’s free!)"
            },
            {
                "at": "2017-11-26T05:00:00.000Z",
                "by": {
                    "_id": "622f3408e36c59e6164fc089",
                    "fullname": "Oscar",
                    "imgUrl": "https://robohash.org/7061677?set=set1",
                    "id": "7061677"
                },
                "txt": "This apartment provided me the perfect balance needed for a memorable holiday weekend. It was lose enough to access the vibrant nightlife, but far enough to enjoy a quiet morning respite. The space was cozy enough to lounge amongst friends in the salon, but large enough to provide two private bedrooms for a restful slumber.  And Tara’s communiques we’re friendly and informative, but never intrusive or inflexible. I highly recommend this Cameo Court apartment as the place to stay as you enjoy all that the Midlevels has to offer."
            },
            {
                "at": "2017-12-01T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb308",
                    "fullname": "Laurie",
                    "imgUrl": "https://robohash.org/77241923?set=set1",
                    "id": "77241923"
                },
                "txt": "Perfect location for discovering the city’s local hotspots and a close enough walk to the MTR. Great living space when plenty of amenities for us, couldn’t have picked a better spot in Soho!"
            },
            {
                "at": "2017-12-04T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb3b0",
                    "fullname": "Jensen",
                    "imgUrl": "https://robohash.org/11457863?set=set1",
                    "id": "11457863"
                },
                "txt": "Very convenient location.  Good size.  Quiet apartment.  Reasonable price.   All very much appreciated."
            },
            {
                "at": "2017-12-10T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae53",
                    "fullname": "Ella",
                    "imgUrl": "https://robohash.org/2441978?set=set1",
                    "id": "2441978"
                },
                "txt": "Loved the place and definitely would stay again! Great location (right in the middle of SoHo), stylish + clean place and very friendly host. It's up on the 4th floor which means it's pretty quiet from the street noise. Would highly recommend it when visiting HK!"
            },
            {
                "at": "2017-12-19T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae85",
                    "fullname": "Allison",
                    "imgUrl": "https://robohash.org/30922733?set=set1",
                    "id": "30922733"
                },
                "txt": "Location right next to the escalators was perfect! And the building security guards were so nice and helpful. Tara always answered my messages right away and was very helpful!"
            },
            {
                "at": "2017-12-23T05:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb125",
                    "fullname": "Julia",
                    "imgUrl": "https://robohash.org/86327561?set=set1",
                    "id": "86327561"
                },
                "txt": "This apartment was exactly what we were looking for in HK: a central location away from the super-touristy hubbub, and with space for those stay-at-home moments you crave when you’re travel-logged. The place has a modern feel and included all the amenities one would need for cooking and relaxing, including filtered drinking water. We felt safe and cozy, and the building was quiet at night for restful sleep. Tara was very easy to get in touch with and provided responses quickly. I loved the location—super walkable to great restaurants, the zoo, Victoria Peak, and lots of public transit—but beware, if it is your first time to HK island and you want to walk from the subway/ferry, (Hidden by Airbnb) Maps won’t show you the amazing escalators and walkways that will make getting there a breeze, and you might get stuck carting luggage up many flights of stairs (as we did). I highly recommend staying here if you want to experience HK island like a local. Just remember to research the walking path, or take an alternate form of transportation if you’ve got heavy luggage!"
            },
            {
                "at": "2017-12-28T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb562",
                    "fullname": "Bonnie",
                    "imgUrl": "https://robohash.org/35878991?set=set1",
                    "id": "35878991"
                },
                "txt": "Tara’s place is a real gem - it is centrally located, right next to the Central Travelator, with the convenience of acesss to pretty much everything (restaurants, grocery stores and public transit etc. BTW we simply walked with our luggage to the place directly from HK Station which took <15 minutes).  It is one street up from the hustle and bustle of the Soho district, in an area that is more upscale, largely quiet and family oriented.   The place itself is very spacious and sparkly clean - we even had closet space!  It is a place that we would like to stay again next time in HK and I would highly recommend to anyone, especially families with children.  Tara is also a wonderful host who was very responsive to all of our communications.  Thanks Tara!"
            },
            {
                "at": "2018-01-02T05:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fafab",
                    "fullname": "Jennie",
                    "imgUrl": "https://robohash.org/177983?set=set1",
                    "id": "177983"
                },
                "txt": "Tara's place is really awesome. Neighbourhood is safe and full of restaurants, coffee shops, etc. You're right in the mid levels and it's easy to walk anywhere. Tara is a great host and was there to meet us. Super great our new home away from home in HK."
            },
            {
                "at": "2018-01-07T05:00:00.000Z",
                "by": {
                    "_id": "622f3408e36c59e6164fc08a",
                    "fullname": "Muriel",
                    "imgUrl": "https://robohash.org/12360956?set=set1",
                    "id": "12360956"
                },
                "txt": "Great location next to the mid-levels elevator and in front of a great French bakery. all amenities nearby. very nicely decorated. we had a great stay with our kids thank you !"
            }
        ],
        "_id": "622f337d75c7d36e498aac56",
        "imgUrls": [
            "031.jpeg",
            "077.jpeg",
            "075.jpeg",
            "035.jpeg",
            "005.jpeg"
        ]
    },
    {
        "name": "Surry Hills Studio - Your Perfect Base in Sydney",
        "summary": "This spacious, light filled studio has everything you need to enjoy Sydney and is the perfect base for exploring. The harbour is an easy walk, Bondi a short bus trip away.",
        "interaction": "You have complete privacy during your stay.",
        "houseRules": "No smoking:  No smoking any substance, including e-cigarettes. Lost Keys / Locked out of Apartment:   If you lose the key to the apartment building itself (i.e., the yellow security key) the cost of replacing it is $250. It will be deducted from your security deposit.  If you lock yourself out of the apartment, it is solely your responsibility to contact a locksmith to open the apartment door for you. You are also solely responsible for the cost of the locksmith, including the cost of replacing the lock mechanism if necessary. If the lock mechanism needs to be replaced by the locksmith,  you must provide 2 copies of the new key.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 0,
        "beds": 1,
        "numOfReviews": 64,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Elevator",
            "Heating",
            "Washer",
            "Dryer",
            "Smoke detector",
            "Essentials",
            "Shampoo",
            "Iron",
            "Laptop friendly workspace",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50",
            "Hot water",
            "Bed linens",
            "Ethernet connection",
            "Other"
        ],
        "host": {
            "_id": "622f3402e36c59e6164fad9d",
            "fullname": "Ben",
            "location": "New South Wales, Australia",
            "about": "Software developer from Sydney, Australia. ",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/03c4d82b-7e4a-4457-976d-c4e9dfdb13fa.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/03c4d82b-7e4a-4457-976d-c4e9dfdb13fa.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "13764143"
        },
        "address": {
            "street": "Surry Hills, NSW, Australia",
            "country": "Australia",
            "location": {
                "lat": 151.21554,
                "lan": -33.88029
            },
            "countryCode": "AU",
            "city": "Sydney"
        },
        "id": "10091713",
        "bathrooms": 1,
        "price": 181,
        "securityDeposit": 300,
        "cleaningFee": 50,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 9,
            "checkin": 10,
            "communication": 10,
            "location": 10,
            "value": 9,
            "rating": 95
        },
        "reviews": [{
                "at": "2016-12-29T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbb4a",
                    "fullname": "Charles",
                    "imgUrl": "https://robohash.org/68937428?set=set1",
                    "id": "68937428"
                },
                "txt": "Ben's place is in the perfect location. Had a lot of fun staying there."
            },
            {
                "at": "2017-01-05T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbfcb",
                    "fullname": "Lucy",
                    "imgUrl": "https://robohash.org/24217924?set=set1",
                    "id": "24217924"
                },
                "txt": "Ben's apartment was perfect for a few days in Sydney - well located, clean, bright and spacious. \nIt is quite big for a studio, and the floorplan gives the feel of a separate kitchen, bedroom and living area. \nA great view, well ventilated and bright. \nBen was a great host, with really good communication. He was very accommodating with check-in and check out times. \nOnly downside is that the apartment doesn't have wifi, so perhaps not ideal for business travellers or longer stays. "
            },
            {
                "at": "2017-01-28T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae4f",
                    "fullname": "Ed",
                    "imgUrl": "https://robohash.org/97332617?set=set1",
                    "id": "97332617"
                },
                "txt": "I enjoyed my stay at Ben's place. Perfect location for public transport either to city (5 mins) or Bondi or Coogee beaches.\nSmall but has everything you need to explore Sydney with and best of all, great city views!"
            },
            {
                "at": "2017-02-05T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbfa7",
                    "fullname": "Angel",
                    "imgUrl": "https://robohash.org/29294131?set=set1",
                    "id": "29294131"
                },
                "txt": "The apartment is in a nice building with some cool Art Deco details. Location is good - we pretty much walked to all major sights in city (opera house, darling harbour etc.) and there are some great shops and places to eat nearby (thanks to Ben's suggestions). Apartment has all the stuff you need for a comfortable stay, and Ben is super helpful and excellent in communication. We had such a nice time and would recommend Ben's apartment! "
            },
            {
                "at": "2017-02-07T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbea8",
                    "fullname": "Melanie",
                    "imgUrl": "https://robohash.org/10700009?set=set1",
                    "id": "10700009"
                },
                "txt": "Ben was an excellent host; he met me on time and showed me around the apartment ensuring that I was comfortable and had everything I needed. \nThe apartment itself is a small but comfortable studio with beautiful views of the city. It's located close to Oxford St with access to public transport if needed. Only a short walk to Darlinghurst and the city. Also, a Woolworths Metro within 200m. \nLoved the place and would stay again. \n"
            },
            {
                "at": "2017-02-10T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164faf10",
                    "fullname": "James",
                    "imgUrl": "https://robohash.org/29768974?set=set1",
                    "id": "29768974"
                },
                "txt": "Bens apartment is in a great location in Sydney close to great restaurants, museums, bars and shopping - Everything you need. Ben was also very friendly,  helpful and communicative. We would highly recommend ! "
            },
            {
                "at": "2017-02-26T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbe75",
                    "fullname": "Tyler",
                    "imgUrl": "https://robohash.org/24911197?set=set1",
                    "id": "24911197"
                },
                "txt": "Great central studio!"
            },
            {
                "at": "2017-02-28T05:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fafbc",
                    "fullname": "Roger",
                    "imgUrl": "https://robohash.org/52492105?set=set1",
                    "id": "52492105"
                },
                "txt": "Great location for work or holiday, clean, lots to explore in the neighborhood, a stress free stay, thanks Ben"
            },
            {
                "at": "2017-03-05T05:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb8fb",
                    "fullname": "Brad",
                    "imgUrl": "https://robohash.org/9494566?set=set1",
                    "id": "9494566"
                },
                "txt": "Bens apartment was perfect. Great location and everything in Surry Hills, Oxford St and Taylor Sq are walkable. Perfect for Mardi Gra weekend as we watched the parade from the lounge room windows. Would definitely stay here again when in Sydney "
            },
            {
                "at": "2017-03-10T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbc08",
                    "fullname": "Soohyun",
                    "imgUrl": "https://robohash.org/116232851?set=set1",
                    "id": "116232851"
                },
                "txt": "에어비앤비숙소중에  가장 좋았다"
            },
            {
                "at": "2017-03-12T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbbe3",
                    "fullname": "Emma",
                    "imgUrl": "https://robohash.org/745600?set=set1",
                    "id": "745600"
                },
                "txt": "Ben's place is centrally located with a great view of the Sydney skyline. The place looked exactly as it did in the pictures and was the perfect size for the two of us. Ben was a great host -- always quick to respond to my messages and happy to answer any questions. I would highly recommend this place."
            },
            {
                "at": "2017-03-14T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb6b9",
                    "fullname": "Susan",
                    "imgUrl": "https://robohash.org/17128500?set=set1",
                    "id": "17128500"
                },
                "txt": "Ben's place was in a great location and close to transit.  We enjoyed the coffee shop downstairs, the shops and theater."
            },
            {
                "at": "2017-03-18T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb655",
                    "fullname": "Cheryl",
                    "imgUrl": "https://robohash.org/8364853?set=set1",
                    "id": "8364853"
                },
                "txt": "The charming apartment is conveniently located with beautiful view of Sydney Tower and Habour Bridge."
            },
            {
                "at": "2017-03-21T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fac2d",
                    "fullname": "Nadine",
                    "imgUrl": "https://robohash.org/82412922?set=set1",
                    "id": "82412922"
                },
                "txt": "Great location. Apartment exactly like pictures. Perfect for two people and nice and clean. Great communication."
            },
            {
                "at": "2017-03-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb910",
                    "fullname": "Luther",
                    "imgUrl": "https://robohash.org/5233230?set=set1",
                    "id": "5233230"
                },
                "txt": "Great location, perfectly positioned for getting into the city or to Bondi. (It's very close to the Darlinghurst nightlife so it can be a bit noisy on weekends, but you can't be in a central location without a little activity!) The apartment is clean and tidy and great for two, with very good shower water pressure. And that gorgeous view across Sydney! "
            },
            {
                "at": "2017-03-27T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb40b",
                    "fullname": "Talia",
                    "imgUrl": "https://robohash.org/5781178?set=set1",
                    "id": "5781178"
                },
                "txt": "Great apartment in a fantastic central location! All the ammenities you could possible need and an added bonus of harbour bridge views!"
            },
            {
                "at": "2017-04-03T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fad7f",
                    "fullname": "Pedro",
                    "imgUrl": "https://robohash.org/114690044?set=set1",
                    "id": "114690044"
                },
                "txt": "It was really nice."
            },
            {
                "at": "2017-04-08T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb665",
                    "fullname": "Angela",
                    "imgUrl": "https://robohash.org/120865671?set=set1",
                    "id": "120865671"
                },
                "txt": "很小巧精致的房间,独立的厨房卫生间,各项设备齐全,居住十分方便｡位置也十分便利,能观望到悉尼大桥和海湾景色｡美中不足的是入住第一晚隔壁房子在举办彻夜的party及高声唱歌,相当打扰睡眠"
            },
            {
                "at": "2017-04-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb687",
                    "fullname": "Allison",
                    "imgUrl": "https://robohash.org/57143266?set=set1",
                    "id": "57143266"
                },
                "txt": "Amazing view, great area and a great studio "
            },
            {
                "at": "2017-04-28T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb73c",
                    "fullname": "Simon",
                    "imgUrl": "https://robohash.org/49683194?set=set1",
                    "id": "49683194"
                },
                "txt": "Great pad!"
            }
        ],
        "_id": "622f337d75c7d36e498aac53",
        "imgUrls": [
            "047.jpeg",
            "008.jpeg",
            "001.jpeg",
            "040.jpeg",
            "080.jpeg"
        ]
    },


    {
        "name": "Canadian Rockies at moriane Lake",
        "summary": "Whilst the world is on standstill, and any dreams we have of visiting some of the most glorious parts of this planet remain just that, now is a great time to really invest in some holiday planning. The future may not be exactly as it was, but the dense forests, snowy mountains, and other beautiful places in Canada aren’t going anywhere in a hurry.",
        "interaction": ".  Guests stay in a separate,  private apartment and we make every effort to not disturb you unless absolutely necessary. We live above the apartment and will be happy to accommodate any reasonable requests",
        "houseRules": "A/C may be used only when you are at home.  Please respect our delicate old pipes (no grease down the drain, etc.).  No smoking on premises. Guests are expected to wash take out their trash and recycling as needed. Guests are expected to wash and put away dishes prior to check-out (apartment has a dishwasher, soap packets are under the sink) Longer term guests may wish to launder the sheets and towels during their stay. This service is not provided. (There are two sets of bed linens provided and two sets of towels for each adult guest.) Owners may occasionally need to go through the apartment to access the basement. We shall endeavor to give advance notice of this and find a mutually convenient time.  $50 fee if keys are lost or not returned.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 180,
        "amenities": [
            "Air conditioning",
            "Kitchen",
            "Heating",
            "Family/kid friendly",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "translation missing: en.hosting_amenity_49",
            "Self check-in",
            "Lockbox"
        ],
        "host": {
            "_id": "622f3402e36c59e6164fac46",
            "fullname": "Shaila & Alex",
            "location": "New York, New York, United-States",
            "about": "I'm a journalist from Texas and my husband is an artist from the Ukraine by way of Kansas City. We recently welcomed our son into the world. (Don't worry, he sleeps all night.)  We love exploring New York, especially Brooklyn, from the Brooklyn Flea to tiny taco joints to the Botanic Gardens to performance art in Bushwick storefronts (really). We've both spent a lot of time in the South, so hospitality is second nature to us. ",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "6334250"
        },
        "address": {
            "street": " Alberta,Canada",
            "country": " Canada",
            "location": {
                "lat": -73.92922,
                "lan": 40.68683
            },
            "countryCode": "CA",
            "city": "Alberta"
        },
        "id": "1155001",
        "bathrooms": 1,
        "price": 79,
        "securityDeposit": 250,
        "cleaningFee": 80,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 93
        },
        "reviews": [{
                "at": "2013-06-04T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb048",
                    "fullname": "Jeff",
                    "imgUrl": "https://robohash.org/6443424?set=set1",
                    "id": "6443424"
                },
                "txt": "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. "
            },
            {
                "at": "2013-06-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fba55",
                    "fullname": "Carla",
                    "imgUrl": "https://robohash.org/6121036?set=set1",
                    "id": "6121036"
                },
                "txt": "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - "
            },
            {
                "at": "2013-06-20T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbf76",
                    "fullname": "Dan",
                    "imgUrl": "https://robohash.org/6460525?set=set1",
                    "id": "6460525"
                },
                "txt": "Shaila and Alex were incredibly accommodating and me and my girlfriend enjoyed our stay thoroughly. Highly recommended. The place was very private and homely. I didn't really know anything about New York and was nervous about staying in bed stuy but it was safe and friendly everywhere I went. Very easy to get to the airport and manhattan by train."
            },

            {
                "at": "2013-11-10T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fb9f9",
                    "fullname": "Pamela",
                    "imgUrl": "https://robohash.org/8145538?set=set1",
                    "id": "8145538"
                },
                "txt": "Was an amazing stay, we charm your apartment and were very friendly. Thank you for all your attentions."
            },
            {
                "at": "2013-11-14T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fae8c",
                    "fullname": "Lindsay",
                    "imgUrl": "https://robohash.org/979464?set=set1",
                    "id": "979464"
                },
                "txt": "Shaila and Alex are wonderful hosts - very accommodating, friendly, and easy to communicate with. We found it fairly easy to get around the city from Bed-Stuy, even with the weekend subway schedule. The apartment is lovely, bright, and very clean, and overall it was a pleasure to stay for a few nights. It's been recently renovated and thoughtfully decorated - we felt quite comfortable during our stay and appreciated the art and other nice touches throughout. I'd highly recommend staying with Shaila and Alex."
            },
            {
                "at": "2013-12-01T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbf31",
                    "fullname": "Nadia",
                    "imgUrl": "https://robohash.org/1133198?set=set1",
                    "id": "1133198"
                },
                "txt": "Great apartment, really spacious & has a lovely homely feel to it. Alex & Shaila were very helpful & welcoming, bed was really comfortable, good transport links, only a 20 min subway ride into manhattan, the area is really nice & quiet, unlike manhattan.\r\n\r\nThanks Alex & Shaila for having us ! Enjoy the Gin !! "
            },
            {
                "at": "2014-01-04T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbdab",
                    "fullname": "Barbara",
                    "imgUrl": "https://robohash.org/8310069?set=set1",
                    "id": "8310069"
                },
                "txt": "The apartment is spacious and well furnished, the kitchen very well equipped and the bed very confortable. Sheila and alex were friendly and the comunication with them was easy.the neighborhood is very nice with typical town house, and very quite. Also the people Who lives there was very kind and helped us on many occasion. \nDefinitely raccommend you to spend your holidays in NY in the lovely apartment of sheila&alex! "
            },
            {
                "at": "2014-03-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb2c1",
                    "fullname": "Chris",
                    "imgUrl": "https://robohash.org/9935301?set=set1",
                    "id": "9935301"
                },
                "txt": "We had a great time staying with Alex & Shaila. The apartment is just as depicted in the photos. Lots of space and very comfortable.  The house is located really close to buses and subway which was very convenient. The neighbourhood is fine with a couple of nice places to eat nearby.\r\n\r\nShaila and alex were really friendly and easy to communicate with if needed.  \r\n\r\nWe stayed for 2 months and would recommend it to others who are looking for a place in Brooklyn."
            },
            {
                "at": "2014-03-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb8fc",
                    "fullname": "Melody",
                    "imgUrl": "https://robohash.org/11278447?set=set1",
                    "id": "11278447"
                },
                "txt": "Upon arriving, Alex was very helpful giving directions to the location. , he gave us a brief overview of everything, and let us settle in. It was a very cozy place to come back to after long days out exploring New York. The subways are very close. We preferred heading up to broadway to catch our trains (Depending where we were going) only because it was much more pleasant on sunny days to be above grounds if we could. It was great to have all amenities available, and at such a reasonable price.The only thing I will mention is that if you do plan on sleeping in- it might not happen as they do have a newborn who you can sometimes hear in the morning if you are a light sleeper.\r\nOverall,  I would recommend you stay at Alex & Shailas airbnb! It was a great and pleasant environment."
            },
            {
                "at": "2014-04-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb41e",
                    "fullname": "Carlos",
                    "imgUrl": "https://robohash.org/13281573?set=set1",
                    "id": "13281573"
                },
                "txt": "We felt very happy those days at the home of Alex and Shaila. It is a very warm and comfortable place, it was like being at home."
            },
            {
                "at": "2014-04-21T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb087",
                    "fullname": "Sergei",
                    "imgUrl": "https://robohash.org/13487808?set=set1",
                    "id": "13487808"
                },
                "txt": "Great host. Very clean, nice place and friendly people. Thanks again!"
            }
        ],
        "_id": "622f337a75c7d36e498aaafb",
        "imgUrls": [
            "canada1.jpeg",
            "canada2.jpeg",
            "canada3.jpeg",
            "canada4.jpeg",
            "canada5.jpeg"
        ]
    },


    {
        "name": " Studio apartment in central Sarpsborg",
        "summary": "Entire rental unit hosted by Trine-Lise",
        "interaction": "Private studio apartment located in the central residential area of Sarpsborg. Only 300 meters from the town centre. Bus and train station in walking distance. Close to Kulåsparken (public park), Tunevannet (lake), Glomma (river), shopping malls, etc. The coast is a 10 minute drive away.",
        "houseRules": "A/C may be used only when you are at home.  Please respect our delicate old pipes (no grease down the drain, etc.).  No smoking on premises. Guests are expected to wash take out their trash and recycling as needed. Guests are expected to wash and put away dishes prior to check-out (apartment has a dishwasher, soap packets are under the sink) Longer term guests may wish to launder the sheets and towels during their stay. This service is not provided. (There are two sets of bed linens provided and two sets of towels for each adult guest.) Owners may occasionally need to go through the apartment to access the basement. We shall endeavor to give advance notice of this and find a mutually convenient time.  $50 fee if keys are lost or not returned.",
        "propertyType": "Apartment",
        "roomType": "Entire home/apt",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 4,
        "beds": 3,
        "numOfReviews": 100,
        "amenities": [
            "wifi",
            "Air conditioning",
            "Kitchen",
            "Heating",
            "Family/kid friendly",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "translation missing: en.hosting_amenity_49",
            "Self check-in",
            "Lockbox"
        ],
        "host": {
            "_id": "622f3402e36c59e6164fac46",
            "fullname": "Shaila & Alex",
            "location": "New York, New York, United-States",
            "about": "I'm a journalist from Texas and my husband is an artist from the Ukraine by way of Kansas City. We recently welcomed our son into the world. (Don't worry, he sleeps all night.)  We love exploring New York, especially Brooklyn, from the Brooklyn Flea to tiny taco joints to the Botanic Gardens to performance art in Bushwick storefronts (really). We've both spent a lot of time in the South, so hospitality is second nature to us. ",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "6334250"
        },
        "address": {
            "street": "  730-0022 Hiroshima, Hiroshima, Naka-ku Kanayamacho 2-16,japan",
            "country": " Japan",
            "location": {
                "lat": 35.652832,
                "lan": 139.839478
            },
            "countryCode": "JAP",
            "city": "Hiroshima"
        },
        "id": "1155002",
        "bathrooms": 1,
        "price": 1,
        "securityDeposit": 250,
        "cleaningFee": 80,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 93
        },
        "reviews": [{
                "at": "2013-06-04T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb048",
                    "fullname": "Jeff",
                    "imgUrl": "https://robohash.org/6443424?set=set1",
                    "id": "6443424"
                },
                "txt": "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. "
            },

            {
                "at": "2014-04-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb41e",
                    "fullname": "Carlos",
                    "imgUrl": "https://robohash.org/13281573?set=set1",
                    "id": "13281573"
                },
                "txt": "We felt very happy those days at the home of Alex and Shaila. It is a very warm and comfortable place, it was like being at home."
            },

        ],
        "_id": "622f337a75c7d36e498aaafb",
        "imgUrls": [
            "japan2.jpeg",
            "japan3.jpeg",
            "japan4.jpeg",

        ]
    },

    {
        "name": "DOUBLE ROOM IN THE HEART OF BCN",
        "summary": "Lit room with balcony. The apartment is in the center, just meters from the Palau de la Musica Catalana. Well connected, a few minutes from Las Ramblas and the Born. Very close to the beach and Ciutadella Park",
        "interaction": "Te proporcionaré sábanas y toallas, para que no te preocupes de traerlas tú.",
        "houseRules": "-Mantener el espacio limpio y recogido. -No está permitido invitar a gente al apartamento. -Respetar el descanso de los vecinos. -No hacer ruido en la escalera. Apelo al sentido común de los inquilinos para una convivencia relajada y fluída. No hay normas en la casa más allá de las que dicte el sentido común.",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 108,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Paid parking off premises",
            "Smoking allowed",
            "Heating",
            "Washer",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "Hangers",
            "Hair dryer",
            "Iron",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50",
            "Hot water",
            "Bed linens",
            "Host greets you"
        ],
        "host": {
            "_id": "622f3404e36c59e6164fb63a",
            "fullname": "Isabel",
            "location": "Barcelona, Catalonia, Spain",
            "about": "Mi nombre es Isabel, pero me llamo Isa. Nací en Vigo (Galicia). Con 20 años me fuí a vivir a Madrid con intención de ser actriz; ahora resido en Barcelona desde los 28. Soy una joven de 43 años, cantante de Jazz. Me gusta salir, pero también quedarme en casa a leer o ver alguna buena película.\r\nHe compartido piso muchos años, pero estas serán mis primeras experiencias como anfitriona.\r\n\r\n¡Sed bienvenidos!\r\n",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "35858044"
        },
        "address": {
            "street": "Sarpsborg, Østfold, Norway ",
            "country": "Norway",
            "location": {
                "lan": 2.17561,
                "lay": 41.38701

            },
            "countryCode": "NOR",
            "city": "Sarpsborg"
        },
        "id": "11115033",
        "bathrooms": 1,
        "price": 200,
        "securityDeposit": null,
        "cleaningFee": 25,
        "extraPeople": 20,
        "reviewScores": {
            "accuracy": 9,
            "cleanliness": 9,
            "checkin": 9,
            "communication": 10,
            "location": 10,
            "value": 9,
            "rating": 90
        },
        "reviews": [{
                "at": "2016-02-24T05:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb95e",
                    "fullname": "Pierre",
                    "imgUrl": "https://robohash.org/58999873?set=set1",
                    "id": "58999873"
                },
                "txt": "Una instancia muy céntrica en uno de estos edificios antiguos del Barri Gotic. No es poco haber conseguido estar en el centro de Barcelona en la misma semana del Mobile World Congress. Isabel es un encanto de anfitrión."
            },
            {
                "at": "2016-03-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fafa6",
                    "fullname": "Isabelle",
                    "imgUrl": "https://robohash.org/26247027?set=set1",
                    "id": "26247027"
                },
                "txt": "The host canceled this reservation 2 days before arrival. This is an automated posting."
            },

            {
                "at": "2016-04-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fabad",
                    "fullname": "Maria Isabel",
                    "imgUrl": "https://robohash.org/60712702?set=set1",
                    "id": "60712702"
                },
                "txt": "Isabel est accueillante. L'appartement est charmant, correspond aux images. Très bien situé, à côté de Palau de la musica, dans un vieil immeuble plein de charme un peu désuet. Amateurs de confort et décor \"tendance\" s'abstenir. Chez Isabel on se trouve dans une authentique ambiance d'artiste. Merci beaucoup, je garderai le souvenir de cet accueil lié aux souvenirs de Barcelone."
            },

            {
                "at": "2016-05-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb715",
                    "fullname": "Jeremy",
                    "imgUrl": "https://robohash.org/53581405?set=set1",
                    "id": "53581405"
                },
                "txt": "Isabel's place was perfect. It was cozy, clean and quiet. She was a very gracious host and was always there to answer my questions about getting around Barcelona. "
            },
            {
                "at": "2016-05-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb0b2",
                    "fullname": "Mei-Lin",
                    "imgUrl": "https://robohash.org/40994614?set=set1",
                    "id": "40994614"
                },
                "txt": "Great room with lots of sunlight in a charming apartment. Fantastic location."
            },

            {
                "at": "2016-06-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb623",
                    "fullname": "Natasha",
                    "imgUrl": "https://robohash.org/25592253?set=set1",
                    "id": "25592253"
                },
                "txt": "SUPER cute place with lots of charm!! Perfect for my first trip to Barcelona:) Amazing location! Gracias Isabel for helping me find last minute accommodations! \r\n"
            },

            {
                "at": "2016-06-28T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb0af",
                    "fullname": "Monika",
                    "imgUrl": "https://robohash.org/11966400?set=set1",
                    "id": "11966400"
                },
                "txt": "Isabel was good host. Location is perfect."
            },
            {
                "at": "2016-07-03T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb23a",
                    "fullname": "Margaux",
                    "imgUrl": "https://robohash.org/78589438?set=set1",
                    "id": "78589438"
                },
                "txt": "Super piso, super barrio! \r\nThe guest welcomed us well."
            },
            {
                "at": "2016-07-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb21c",
                    "fullname": "Elisabeth",
                    "imgUrl": "https://robohash.org/4965921?set=set1",
                    "id": "4965921"
                },
                "txt": "It was really nice to stay at Isabels place. She is very uncomplicated and nice and the flat is super located for exploring bcn. For me it was perfect!:)"
            },

            {
                "at": "2016-07-30T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb1ac",
                    "fullname": "Liliane",
                    "imgUrl": "https://robohash.org/27060110?set=set1",
                    "id": "27060110"
                },
                "txt": "Isa is a very lovely, sensitive, artistic and gorgeous person. She is respectful of one's privacy but always ready to give support when asked upon. Be it in spoken or written form I always got my answers from her within no times. She also proofed to be very flexible in terms of arrival and departure times which I appreciated a great deal. If you are a fan of jazz music (like I am), make sure to double check ahead of time about her current concert dates so as not to miss your hostess on stage like I did (grumble ;-)).\n\nThe room I occupied was the smaller one of two that Isabel rents out. So if her flat is fully rented out there can be a maximum of 4 guests plus your hostess in the flat, which can cause some bathroom jam, especially during the hot and humid summer times, when the need for a cool shower is inherent to everyone's desire. \nMy room was as depicted. If you plan on using it for double occupancy, I recommend taking Isa's larger room (unless the two of you are very much in love and want to cuddle up close ;-)). Also, if you need a table for writing, ask for the larger room as well, which comes along with one.\nThe flat itself is absolutely enchanting and furnished with love and an artistic eye to details. It's location is a dream for touristic explorations with anything within walking distance. \nTherefore, I can easily recommend both Isabel and her flat to anyone wishing to immerge himself into the local customs and get a good doze of what it is like \"to live like a true Barcelonian\".  \n\nQuerida Isa, muchas gracias por tu hospedalid génial! Volveré a ciencia cierta!\nSaludos y besos\nLiliana"
            },

            {
                "at": "2016-08-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbcb4",
                    "fullname": "Mina",
                    "imgUrl": "https://robohash.org/121053?set=set1",
                    "id": "121053"
                },
                "txt": "I was happy to experience Isabels home as described here. It was spacious, bright and original, with lovely colours and beautiful artwork surrounding me in every room. Isabel is a creative, sensitive and respectful person, with an open mind- yet she has the necessary boundaries that are required to organize an environment where so many different people are going to stay and hopefully enjoy. \nThe street itself is very lively, but the noises didn't bother me at all as i could easily block them out with earplugs. The location could not have been more sentral, still it's on \"the right side\" of the Rambla, where you can find more independent shops, restaurants, cafes and bars compared to the same leveled streets towards Raval. It is an old and very charming building, so if you want an minimalistic experience with cold, stainless steel and elevators this is not the place for you! And perhaps you are not the right person for this place either ;) I had to leave earlier due to illness, and was so sorry i couldn't stay throughout the whole month as planned. Hope to be seeing Isabel and her welcoming surroundings again one day "
            },
            {
                "at": "2016-09-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb85f",
                    "fullname": "Jessy",
                    "imgUrl": "https://robohash.org/2935800?set=set1",
                    "id": "2935800"
                },
                "txt": "Isabel was an amazing host. She is incredible and super considerate. The apartment was by no means the best location in Barcelona, I walked everywhere and never needed a map or a taxi. Arriving late at night was always fine and there was never any disturbing street noise. The block is super cute with awesome little shops that are open during the day. Best neighborhood to be in and incredible city ! Muchísima gracias Isabel, estas invitada a visitar Los Ángeles, todo fue increíble !❤️"
            }
        ],
        "_id": "622f337a75c7d36e498aaafd",
        "imgUrls": [
            "norway1.jpeg",
            "norway2.jpeg",
            "norway3.jpeg",
            "norway4.jpeg",

        ]
    },

    {
        "name": "A Traveler's Pad in Romantic McKinley Hill Taguig",
        "summary": "Entire condominium (condo) hosted by Clarisse",
        "interaction": "Dive into the studio's premium mattress and hotel-grade sheets and get absorbed by its comfort. Stay lazy at bed all day, read a book, be inspired to travel, watch Netflix and just chill and relax.",
        "houseRules": "-Mantener el espacio limpio y recogido. -No está permitido invitar a gente al apartamento. -Respetar el descanso de los vecinos. -No hacer ruido en la escalera. Apelo al sentido común de los inquilinos para una convivencia relajada y fluída. No hay normas en la casa más allá de las que dicte el sentido común.",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 108,
        "amenities": [
            "Wifi",
            "Kitchen",
            "Paid parking off premises",
            "Smoking allowed",
            "Heating",
            "Washer",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "Hangers",
            "Hair dryer",
            "Iron",
            "translation missing: en.hosting_amenity_49",
            "translation missing: en.hosting_amenity_50",
            "Hot water",
            "Bed linens",
            "Host greets you"
        ],
        "host": {
            "_id": "622f3404e36c59e6164fb63a",
            "fullname": "Isabel",
            "location": "Barcelona, Catalonia, Spain",
            "about": "Mi nombre es Isabel, pero me llamo Isa. Nací en Vigo (Galicia). Con 20 años me fuí a vivir a Madrid con intención de ser actriz; ahora resido en Barcelona desde los 28. Soy una joven de 43 años, cantante de Jazz. Me gusta salir, pero también quedarme en casa a leer o ver alguna buena película.\r\nHe compartido piso muchos años, pero estas serán mis primeras experiencias como anfitriona.\r\n\r\n¡Sed bienvenidos!\r\n",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "35858044"
        },
        "address": {
            "street": "Taguig, Kalakhang Maynila, Philippines",
            "country": "Philippines",
            "location": {
                "lat": 6.83756,
                "lan": 125.41301

            },
            "countryCode": "NOR",
            "city": "Sarpsborg"
        },
        "id": "11115999",
        "bathrooms": 1,
        "price": 200,
        "securityDeposit": null,
        "cleaningFee": 25,
        "extraPeople": 20,
        "reviewScores": {
            "accuracy": 9,
            "cleanliness": 9,
            "checkin": 9,
            "communication": 10,
            "location": 10,
            "value": 9,
            "rating": 90
        },
        "reviews": [{
                "at": "2016-02-24T05:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb95e",
                    "fullname": "Pierre",
                    "imgUrl": "https://robohash.org/58999873?set=set1",
                    "id": "58999873"
                },
                "txt": "Una instancia muy céntrica en uno de estos edificios antiguos del Barri Gotic. No es poco haber conseguido estar en el centro de Barcelona en la misma semana del Mobile World Congress. Isabel es un encanto de anfitrión."
            },
            {
                "at": "2016-03-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fafa6",
                    "fullname": "Isabelle",
                    "imgUrl": "https://robohash.org/26247027?set=set1",
                    "id": "26247027"
                },
                "txt": "The host canceled this reservation 2 days before arrival. This is an automated posting."
            },

            {
                "at": "2016-04-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fabad",
                    "fullname": "Maria Isabel",
                    "imgUrl": "https://robohash.org/60712702?set=set1",
                    "id": "60712702"
                },
                "txt": "Isabel est accueillante. L'appartement est charmant, correspond aux images. Très bien situé, à côté de Palau de la musica, dans un vieil immeuble plein de charme un peu désuet. Amateurs de confort et décor \"tendance\" s'abstenir. Chez Isabel on se trouve dans une authentique ambiance d'artiste. Merci beaucoup, je garderai le souvenir de cet accueil lié aux souvenirs de Barcelone."
            },

            {
                "at": "2016-05-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb715",
                    "fullname": "Jeremy",
                    "imgUrl": "https://robohash.org/53581405?set=set1",
                    "id": "53581405"
                },
                "txt": "Isabel's place was perfect. It was cozy, clean and quiet. She was a very gracious host and was always there to answer my questions about getting around Barcelona. "
            },
            {
                "at": "2016-05-25T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb0b2",
                    "fullname": "Mei-Lin",
                    "imgUrl": "https://robohash.org/40994614?set=set1",
                    "id": "40994614"
                },
                "txt": "Great room with lots of sunlight in a charming apartment. Fantastic location."
            },

            {
                "at": "2016-06-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb623",
                    "fullname": "Natasha",
                    "imgUrl": "https://robohash.org/25592253?set=set1",
                    "id": "25592253"
                },
                "txt": "SUPER cute place with lots of charm!! Perfect for my first trip to Barcelona:) Amazing location! Gracias Isabel for helping me find last minute accommodations! \r\n"
            },

            {
                "at": "2016-06-28T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb0af",
                    "fullname": "Monika",
                    "imgUrl": "https://robohash.org/11966400?set=set1",
                    "id": "11966400"
                },
                "txt": "Isabel was good host. Location is perfect."
            },
            {
                "at": "2016-07-03T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb23a",
                    "fullname": "Margaux",
                    "imgUrl": "https://robohash.org/78589438?set=set1",
                    "id": "78589438"
                },
                "txt": "Super piso, super barrio! \r\nThe guest welcomed us well."
            },
            {
                "at": "2016-07-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb21c",
                    "fullname": "Elisabeth",
                    "imgUrl": "https://robohash.org/4965921?set=set1",
                    "id": "4965921"
                },
                "txt": "It was really nice to stay at Isabels place. She is very uncomplicated and nice and the flat is super located for exploring bcn. For me it was perfect!:)"
            },

            {
                "at": "2016-07-30T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb1ac",
                    "fullname": "Liliane",
                    "imgUrl": "https://robohash.org/27060110?set=set1",
                    "id": "27060110"
                },
                "txt": "Isa is a very lovely, sensitive, artistic and gorgeous person. She is respectful of one's privacy but always ready to give support when asked upon. Be it in spoken or written form I always got my answers from her within no times. She also proofed to be very flexible in terms of arrival and departure times which I appreciated a great deal. If you are a fan of jazz music (like I am), make sure to double check ahead of time about her current concert dates so as not to miss your hostess on stage like I did (grumble ;-)).\n\nThe room I occupied was the smaller one of two that Isabel rents out. So if her flat is fully rented out there can be a maximum of 4 guests plus your hostess in the flat, which can cause some bathroom jam, especially during the hot and humid summer times, when the need for a cool shower is inherent to everyone's desire. \nMy room was as depicted. If you plan on using it for double occupancy, I recommend taking Isa's larger room (unless the two of you are very much in love and want to cuddle up close ;-)). Also, if you need a table for writing, ask for the larger room as well, which comes along with one.\nThe flat itself is absolutely enchanting and furnished with love and an artistic eye to details. It's location is a dream for touristic explorations with anything within walking distance. \nTherefore, I can easily recommend both Isabel and her flat to anyone wishing to immerge himself into the local customs and get a good doze of what it is like \"to live like a true Barcelonian\".  \n\nQuerida Isa, muchas gracias por tu hospedalid génial! Volveré a ciencia cierta!\nSaludos y besos\nLiliana"
            },

            {
                "at": "2016-08-26T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbcb4",
                    "fullname": "Mina",
                    "imgUrl": "https://robohash.org/121053?set=set1",
                    "id": "121053"
                },
                "txt": "I was happy to experience Isabels home as described here. It was spacious, bright and original, with lovely colours and beautiful artwork surrounding me in every room. Isabel is a creative, sensitive and respectful person, with an open mind- yet she has the necessary boundaries that are required to organize an environment where so many different people are going to stay and hopefully enjoy. \nThe street itself is very lively, but the noises didn't bother me at all as i could easily block them out with earplugs. The location could not have been more sentral, still it's on \"the right side\" of the Rambla, where you can find more independent shops, restaurants, cafes and bars compared to the same leveled streets towards Raval. It is an old and very charming building, so if you want an minimalistic experience with cold, stainless steel and elevators this is not the place for you! And perhaps you are not the right person for this place either ;) I had to leave earlier due to illness, and was so sorry i couldn't stay throughout the whole month as planned. Hope to be seeing Isabel and her welcoming surroundings again one day "
            },
            {
                "at": "2016-09-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb85f",
                    "fullname": "Jessy",
                    "imgUrl": "https://robohash.org/2935800?set=set1",
                    "id": "2935800"
                },
                "txt": "Isabel was an amazing host. She is incredible and super considerate. The apartment was by no means the best location in Barcelona, I walked everywhere and never needed a map or a taxi. Arriving late at night was always fine and there was never any disturbing street noise. The block is super cute with awesome little shops that are open during the day. Best neighborhood to be in and incredible city ! Muchísima gracias Isabel, estas invitada a visitar Los Ángeles, todo fue increíble !❤️"
            }
        ],
        "_id": "622f337a75c7d36e498aaafd",
        "imgUrls": [

            "philippines2.jpeg",
            "philippines3.jpeg",
            "philippines4.jpeg",

        ]
    },
]


const STAYS_KEY = 'staysDB'
    // _createStay()


export const stayService = {
    add,
    query,
    remove,
    getById
}


async function query(filterBy) {
    const stays = await storageService.query(STAYS_KEY)
        // console.log(stays)
        // if (filterBy.country) {
        //     const filteredStays = _filterStays(stays, JSON.parse(JSON.stringify(filterBy)))
        //     console.log(filteredStays)
        //     return Promise.resolve(filteredStays)
        // }
    return Promise.resolve(stays)
}

function _filterStays(stays, filterBy) {
    let filteredStays = []
    const regex = new RegExp(filterBy.country, 'i')
    filteredStays = stays.filter(stay => regex.test(stay.address.country || stay.address.city))
    if (filterBy.type.length) {
        filteredStays = filteredStays.filter((stay) => {
            return stay.propertyType.some((label) => filterBy.type.includes(label))
        })
    }

    return filteredStays
}

function getById(entityId) {
    return query().then((entities) =>
        entities.find((entity) => entity.id === entityId)
    )
}

function remove(stayId) {

    return storageService.delete('stay', stayId)

}
async function add(stay) {

    if (stay._id) {
        await storageService.put('stay', stay)
        return stay

    } else {
        const addedStay = await storageService.post('stay', stay)

        return addedStay
    }

}

function _createStay() {
    // let stays = utilService.loadFromStorage(STAYS_KEY);
    // if (!stays || !stays.length) {
    //     stays = [];
    //     stays.map((stay) => {
    //         stays.push(stay);
    //     });
    utilService.saveToStorage(STAYS_KEY, stays);
    // } 
    return stays;
}