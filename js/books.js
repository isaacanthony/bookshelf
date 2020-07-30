const books = [
  ['Aziz Ansari', 'Modern Romance', 'https://images-na.ssl-images-amazon.com/images/I/81p047toiVL.jpg'],
  ['Benjamin Hoff', 'The Tao of Pooh', 'https://images-na.ssl-images-amazon.com/images/I/41TEuYvatlL._SX363_BO1,204,203,200_.jpg'],
  ['C.S. Lewis', 'The Lion, the Witch, and the Wardrobe', 'https://i.harperapps.com/hcanz/covers/9780006716778/x293.jpg'],
  ['Carol Kendall', 'The Gammage Cup', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179240859l/892113.jpg'],
  ['Dan Brown', 'Angels and Demons', 'https://images-na.ssl-images-amazon.com/images/I/51GHld4-CZL._SX349_BO1,204,203,200_.jpg'],
  ['Dan Brown', 'Deception Point', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551277487l/976._SY475_.jpg'],
  ['Dan Brown', 'Digital Fortress', 'https://danbrown.com/wp-content/themes/danbrown/images/db/covers/df.jpg'],
  ['Dan Brown', 'The Da Vinci Code', 'https://vignette.wikia.nocookie.net/davincicode/images/6/6b/DaVinciCode.jpg/revision/latest/scale-to-width-down/340?cb=20081230190335'],
  ['Dan Brown', 'The Lost Symbol', 'https://images-na.ssl-images-amazon.com/images/I/91twDBBv7LL.jpg'],
  ['Dickson J. Preston', 'Young Frederick Douglass', 'https://images-na.ssl-images-amazon.com/images/I/51DbFLgqClL._SX331_BO1,204,203,200_.jpg'],
  ['Douglas Adams', 'The Hitchhiker\'s Guide to the Galaxy', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/25/1435245979235/047c9878-9845-473c-9635-5f32545746b0-1355x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=606433bda33c8c27c5ebd7ba85900473'],
  ['Eoin Colfer', 'Artemis Fowl 1', 'https://upload.wikimedia.org/wikipedia/en/0/07/Artemis_Fowl_first_edition_cover.jpg'],
  ['Eoin Colfer', 'Artemis Fowl 2', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388294381l/114955.jpg'],
  ['Eoin Colfer', 'Artemis Fowl 3', 'https://www.risingshadow.net/libdb/images/books/4054.jpg'],
  ['F. Scott Fitzgerald', 'The Great Gatsby', 'https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg'],
  ['Frederick Douglass', 'Narrative of the Life of Frederick Douglass', 'https://images-na.ssl-images-amazon.com/images/I/41sRYV05b6L._SX332_BO1,204,203,200_.jpg'],
  ['Hermann Hesse', 'Siddhartha', 'https://images.penguinrandomhouse.com/cover/9780142437186'],
  ['Homer', 'The Iliad', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL2jahOoGTvAUAV1S5lYpAEF2VjftCqsPm5w&usqp=CAU'],
  ['Homer', 'The Odyssey', 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/8722/9780872204843.jpg'],
  ['J.D. Salinger', 'The Catcher in the Rye', 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg'],
  ['J.K. Rowling', 'Harry Potter 1', 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter 2', 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter 3', 'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg'],
  ['J.K. Rowling', 'Harry Potter 4', 'https://prodimage.images-bn.com/pimages/9780439139601_p0_v1_s550x406.jpg'],
  ['J.K. Rowling', 'Harry Potter 5', 'https://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s1200x630.jpg'],
  ['J.K. Rowling', 'Harry Potter 6', 'https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter 7', 'https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter and the Cursed Child', 'https://images-na.ssl-images-amazon.com/images/I/51NRPISnBuL._SX341_BO1,204,203,200_.jpg'],
  ['James Redfield', 'The Celestine Prophecy', 'https://books.images.hpb.com/9780446518628/product.jpg'],
  ['John Steinbeck', 'The Pearl', 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/pearl-book-image.jpg?itok=DYYEkeLX'],
  ['Jon Krakauer', 'Into Thin Air', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Into_Thin_Air.jpg/220px-Into_Thin_Air.jpg'],
  ['Joseph Conrad', 'Heart of Darkness', 'https://miro.medium.com/max/645/1*t9EGFixZjb05VqzTLsICTw.jpeg'],
  ['Kenneth Thomasma', 'Pathki Nana', 'https://m.media-amazon.com/images/I/51G+884uijL.jpg'],
  ['Kurt Vonnegut', 'Bluebeard', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387704700l/525912.jpg'],
  ['Kurt Vonnegut', 'Breakfast of Champions', 'https://prodimage.images-bn.com/pimages/9780385334204_p0_v1_s550x406.jpg'],
  ['Kurt Vonnegut', 'Cat\'s Cradle', 'https://images-na.ssl-images-amazon.com/images/I/81NIfUlv2DL.jpg'],
  ['Kurt Vonnegut', 'Galapagos', 'https://i412.photobucket.com/albums/pp206/Nymeth_2/Galapagos.jpg'],
  ['Kurt Vonnegut', 'God Bless You, Mr. Rosewater', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328311538l/6389247.jpg'],
  ['Kurt Vonnegut', 'Slaughterhouse Five', 'https://images-na.ssl-images-amazon.com/images/I/71QcX1DbklL.jpg'],
  ['Leigh Phillips and Michal Rozworski', 'People\'s Republic of Walmart', 'https://images-na.ssl-images-amazon.com/images/I/718sy5QgB6L.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 1', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/BadBeginning.jpg/220px-BadBeginning.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 2', 'https://images-na.ssl-images-amazon.com/images/I/51wznh+793L._SY344_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 3', 'https://images-na.ssl-images-amazon.com/images/I/513xp5T4S4L.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 4', 'https://images-na.ssl-images-amazon.com/images/I/51UFpApPGqL._SX351_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 5', 'https://m.media-amazon.com/images/I/51vCufFVHjL.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 6', 'https://images-na.ssl-images-amazon.com/images/I/51j8wJK9YLL.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 7', 'https://images-na.ssl-images-amazon.com/images/I/51zK5RRnLOL._SX351_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 8', 'https://images-na.ssl-images-amazon.com/images/I/51N2hXRTEpL._SX351_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 9', 'https://images-na.ssl-images-amazon.com/images/I/510c0eCezsL._SX351_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 10', 'https://images-na.ssl-images-amazon.com/images/I/51UYgtJOeVL._SX353_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 11', 'https://images-na.ssl-images-amazon.com/images/I/51II4VQ8X9L._SX351_BO1,204,203,200_.jpg'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 12', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/ThePenultimatePeril.JPG/220px-ThePenultimatePeril.JPG'],
  ['Lemony Snicket', 'A Series of Unfortunate Events 13', 'https://images-na.ssl-images-amazon.com/images/I/51gyNxkGIUL._SX350_BO1,204,203,200_.jpg'],
  ['Lois Lowry', 'Gathering Blue', 'https://upload.wikimedia.org/wikipedia/en/9/98/Lowry_gathering_blue_cover.jpg'],
  ['Lois Lowry', 'The Giver', 'https://images-na.ssl-images-amazon.com/images/I/51R8AA8QEVL.jpg'],
  ['Norton Juster', 'The Phantom Tollbooth', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Phantomtollbooth.PNG/220px-Phantomtollbooth.PNG'],
  ['Paulo Coehlo', 'The Alchemist', 'https://images-na.ssl-images-amazon.com/images/I/41ybG235TcL._SX329_BO1,204,203,200_.jpg'],
  ['Salman Rushdie', 'Haroun and the Sea of Stories', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1277683566l/471966.jpg'],
];

  // '9780192543721', // Frankenstein
  // '9780307481269', // Akhenaten
  // '9780140231861', // The Winter King
  // '9780374332655', // Holes
  // '9780786808779', // Summerland
  // '9780582151840', // A Wrinkle in Time
  // '9781551113050', // Time Machine
  // '9780312956769', // Die Hard with a Vengeance
  // '9780006174554', // Patriot Games
  // '9780312084462', // Ben Franklin Autobiography
  // '9780192126047', // The Republic
  // '9781930485143', // The Tao of Natural Breathing
  // '9780099468233', // Bringing Down the House
  // '9780060575120', // Busting Vegas
  // '9780061252723', // Rigged
  // '9780140437713', // Adventure of Sherlock Holmes
  // '9780060155476', // The Intelligent Investor
  // '9780026009102', // Fountainhead
  // '9780451191144', // Atlas Shrugged
  // '9780374275631', // Thinking Fast and Slow
  // '9780060589462', // Zen and the Art of Motorcycle Maintenance
  // '9780099282914', // Jurassic Park
  // '9780007181605', // State of Fear
  // '9780060541811', // The Andromeda Strain
  // '9780062073488', // And Then There Were None
  // '9780316017923', // Outliers
  // '9780316204361', // David and Goliath
  // '9780143117469', // Shop Class as Soulcraft
  // '9780140232929', // Snow Crash
  // '9780060512804', // Cryptonomicon
  // '9780743264730', // Einstein
  // '9780062301239', // Elon Musk
  // '9780140092332', // Sweetness and Power
  // No Country for Old Men
  // The Spy Who Came in from the Cold
  // Hunger Games 1
  // Little Brother - Cory Doctorow
  // The Girl with the Dragon Tattoo 1, 2, 3
  // The Information - James Gleck
  // The Appeal - John Grisham
  // A Brief History of Time
  // The Trouble with Physics
  // The Physics of Consciousness
  // The Tao of Physics
  // Codebreakers: The History of Codes and Ciphers
  // The Elegant Universe
  // The Fabric of the Cosmos
  // 2001: A Space Odyssey
  // Bourne Identity
  // Torchlight - Robert Louis Stevenson III
  // The Hobbit
  // Fellowship of the Ring
  // 15 Minutes
  // Dead Man's Poker
  // Dead Man's Bluff
  // The Hound's of Baskerville
  // Ten Little Indians
