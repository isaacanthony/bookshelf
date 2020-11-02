const books = [
  ['Agatha Christie', 'And Then There Were None', 'https://m.media-amazon.com/images/I/41l02vDN4pL.jpg'],
  ['Albert Camus', 'The Stranger', 'https://covers.openlibrary.org/b/id/8296476-L.jpg'],
  ['Alan Moore', 'Watchmen', 'https://images-na.ssl-images-amazon.com/images/I/41chVzBhJiL._SX317_BO1,204,203,200_.jpg'],
  ['Aldous Huxley', 'Brave New World', 'https://images-na.ssl-images-amazon.com/images/I/41le8ej-fiL.jpg'],
  ['Amy Poehler', 'Yes Please', 'https://images-na.ssl-images-amazon.com/images/I/51JeCzV8CoL.jpg'],
  ['Amy Schumer', 'The Girl with the Lower Back Tattoo', 'https://images-na.ssl-images-amazon.com/images/I/51dbNiWeS2L._SX332_BO1,204,203,200_.jpg'],
  ['Andry Greenberg', 'Sandworm', 'https://images-na.ssl-images-amazon.com/images/I/91IOkEUnpfL.jpg'],
  ['Anne Frank', 'The Diary of Anne Frank', 'https://images-na.ssl-images-amazon.com/images/I/51Eyjz65gyL._SX284_BO1,204,203,200_.jpg'],
  ['Antoine de Saint-Exupery', 'Le Petit Prince', 'https://images-na.ssl-images-amazon.com/images/I/51WZzUKfHnL._SX330_BO1,204,203,200_.jpg'],
  ['Art Spiegelman', 'Maus I', 'https://images-na.ssl-images-amazon.com/images/I/51R45cOV8UL._SX348_BO1,204,203,200_.jpg'],
  ['Arthur C. Clarke', '2001: A Space Odyssey', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432468943l/70535._SY475_.jpg'],
  ['Arthur Conan Doyle', 'The Adventures of Sherlock Holmes', 'https://m.media-amazon.com/images/I/51wjunNRrgL.jpg'],
  ['Arthur Conan Doyle', 'The Hounds of the Baskervilles', 'https://images1.penguinrandomhouse.com/cover/9781101098394'],
  ['Arthur Miller', 'The Crucible', 'https://g.christianbook.com/dg/product/cbd/f450/437339.jpg'],
  ['Ashlee Vance', 'Elon Musk', 'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg'],
  ['Ayn Rand', 'The Fountainhead', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388197152l/225221.jpg'],
  ['Ayn Rand', 'Atlas Shrugged', 'https://images-na.ssl-images-amazon.com/images/I/612URtxh-qL.jpg'],
  ['Aziz Ansari', 'Modern Romance', 'https://images-na.ssl-images-amazon.com/images/I/81p047toiVL.jpg'],
  ['Ben Mezrich', 'Bringing Down the House', 'https://m.media-amazon.com/images/I/51KvCgfEy4L.jpg'],
  ['Ben Mezrich', 'Busting Vegas', 'https://images-na.ssl-images-amazon.com/images/I/51AiEKIJZ2L._SX331_BO1,204,203,200_.jpg'],
  ['Ben Mezrich', 'Rigged', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Rigged_%28book%29_by_Ben_Mezrich.jpg/220px-Rigged_%28book%29_by_Ben_Mezrich.jpg'],
  ['Benjamin Franklin', 'The Autobiography of Benjamin Franklin', 'https://images-na.ssl-images-amazon.com/images/I/51qI-RdE-8L._SX384_BO1,204,203,200_.jpg'],
  ['Benjamin Graham', 'The Intelligent Investor', 'https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg'],
  ['Benjamin Hoff', 'The Tao of Pooh', 'https://images-na.ssl-images-amazon.com/images/I/41TEuYvatlL._SX363_BO1,204,203,200_.jpg'],
  ['Bernard Cornwell', 'The Winter King', 'https://i.pinimg.com/originals/42/1f/c4/421fc436bd8960b4ce036eed6f0dd7e2.jpg'],
  ['Bill Bradley', 'Values of the Game', 'https://images-na.ssl-images-amazon.com/images/I/41fFS678AcL._SX368_BO1,204,203,200_.jpg'],
  ['Bill Walsh', 'The Score Takes Care of Itself', 'https://images-na.ssl-images-amazon.com/images/I/51ms1t%2B21UL._AC_SY400_.jpg'],
  ['Brian Greene', 'The Elegant Universe', 'https://images-na.ssl-images-amazon.com/images/I/51g2zhYLXCL._SX325_BO1,204,203,200_.jpg'],
  ['Brian Greene', 'The Fabric of the Cosmos', 'https://images-na.ssl-images-amazon.com/images/I/81eOaTPxsYL.jpg'],
  ['Burton G. Malkiel', 'A Random Walk Down Wall Street', 'https://prodimage.images-bn.com/pimages/9780393358384_p0_v3_s1200x630.jpg'],
  ['C.S. Lewis', 'The Lion, the Witch, and the Wardrobe', 'https://i.harperapps.com/hcanz/covers/9780006716778/x293.jpg'],
  ['Carol Kendall', 'The Gammage Cup', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1179240859l/892113.jpg'],
  ['Cary Elwes', 'As You Wish', 'https://images-na.ssl-images-amazon.com/images/I/71grODXMVEL.jpg'],
  ['Clive Barker', 'Abarat', 'https://images-na.ssl-images-amazon.com/images/I/61gTQB3hbmL._SX330_BO1,204,203,200_.jpg'],
  ['Colson Whitehead', 'The Noble Hustle', 'https://images.penguinrandomhouse.com/cover/9780345804334'],
  ['Cory Doctorow', 'Little Brother', 'https://images-na.ssl-images-amazon.com/images/I/41Yz41DiHvL._SX324_BO1,204,203,200_.jpg'],
  ['Dale Carnegie', 'How to Win Friends and Influence People', 'https://prodimage.images-bn.com/pimages/9780671027032_p0_v2_s1200x630.jpg'],
  ['Dan Brown', 'Angels and Demons', 'https://images-na.ssl-images-amazon.com/images/I/51GHld4-CZL._SX349_BO1,204,203,200_.jpg'],
  ['Dan Brown', 'Deception Point', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551277487l/976._SY475_.jpg'],
  ['Dan Brown', 'Digital Fortress', 'https://danbrown.com/wp-content/themes/danbrown/images/db/covers/df.jpg'],
  ['Dan Brown', 'The Da Vinci Code', 'https://vignette.wikia.nocookie.net/davincicode/images/6/6b/DaVinciCode.jpg/revision/latest/scale-to-width-down/340?cb=20081230190335'],
  ['Dan Brown', 'The Lost Symbol', 'https://images-na.ssl-images-amazon.com/images/I/91twDBBv7LL.jpg'],
  ['Dan Harris', '10% Happier', 'https://images-na.ssl-images-amazon.com/images/I/41BVobaX1-L._SX330_BO1,204,203,200_.jpg'],
  ['Daniel Kahneman', 'Thinking Fast and Slow', 'https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg'],
  ['David Halberstam', 'The Fifties', 'https://images-na.ssl-images-amazon.com/images/I/51isNeJ1mHL._SX331_BO1,204,203,200_.jpg'],
  ['David Lubar', 'Hidden Talents', 'https://images-na.ssl-images-amazon.com/images/I/51Imh0WG7HL._AC_SY400_.jpg'],
  ['Dennis Lewis', 'The Tao of Natural Breathing', 'https://images-na.ssl-images-amazon.com/images/I/816ppi8Vd-L.jpg'],
  ['Derek Walcott', 'Omeros', 'https://upload.wikimedia.org/wikipedia/en/2/2a/Omerosbook.jpg'],
  ['Dickson J. Preston', 'Young Frederick Douglass', 'https://images-na.ssl-images-amazon.com/images/I/51DbFLgqClL._SX331_BO1,204,203,200_.jpg'],
  ['Douglas Adams', 'The Hitchhiker\'s Guide to the Galaxy', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/25/1435245979235/047c9878-9845-473c-9635-5f32545746b0-1355x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=606433bda33c8c27c5ebd7ba85900473'],
  ['Edward Bloor', 'Tangerine', 'https://static.tvtropes.org/pmwiki/pub/images/a6e0d6180d8458537b696458cbe68766.png'],
  ['Elie Wiesel', 'Night', 'https://i.ebayimg.com/images/g/YMkAAOSwIjJZO~rP/s-l600.jpg'],
  ['Ellen Raskin', 'The Westing Game', 'http://www.michellemach.com/blog/htmlarea/images/content/WestingGame-cover-250.jpg'],
  ['Eoin Colfer', 'Artemis Fowl 1', 'https://upload.wikimedia.org/wikipedia/en/0/07/Artemis_Fowl_first_edition_cover.jpg'],
  ['Eoin Colfer', 'Artemis Fowl 2', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388294381l/114955.jpg'],
  ['Eoin Colfer', 'Artemis Fowl 3', 'https://www.risingshadow.net/libdb/images/books/4054.jpg'],
  ['Esther Forbes', 'Johnny Tremain', 'https://images-na.ssl-images-amazon.com/images/I/519ff82b1AL._SX338_BO1,204,203,200_.jpg'],
  ['Eva Ibbotson', 'Which Witch', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363529675l/1892773.jpg'],
  ['Evan Harris Walker', 'The Physics of Consciousness', 'https://images-na.ssl-images-amazon.com/images/I/41MWF40QK8L._SX307_BO1,204,203,200_.jpg'],
  ['F. Scott Fitzgerald', 'The Great Gatsby', 'https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg'],
  ['Franz Kafka', 'The Metamorphosis', 'https://images-na.ssl-images-amazon.com/images/I/91yukC1q-pL.jpg'],
  ['Frederick Douglass', 'Narrative of the Life of Frederick Douglass', 'https://images-na.ssl-images-amazon.com/images/I/41sRYV05b6L._SX332_BO1,204,203,200_.jpg'],
  ['Fritjof Capra', 'The Tao of Physics', 'https://upload.wikimedia.org/wikipedia/en/3/35/The_Tao_of_Physics_%28first_edition%29.jpg'],
  ['Gary McCord', 'Golf for Dummies', 'https://images-na.ssl-images-amazon.com/images/I/51nmJdMWiwL._SX258_BO1,204,203,200_.jpg'],
  ['Gary Paulsen', 'Hatchet', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1174607916l/423187.jpg'],
  ['George Orwell', '1984', 'https://i.ebayimg.com/images/g/pq8AAOSwOZRfGfTY/s-l640.jpg'],
  ['George Orwell', 'Animal Farm', 'https://images.bwbcovers.com/045/Animal-Farm-9780451524669.jpg'],
  ['Gregory Maguire', 'Wicked', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437733293l/37442._SY475_.jpg'],
  ['H.G. Wells', 'The Time Machine', 'https://vignette.wikia.nocookie.net/spec-evo/images/4/45/The_Time_Machine.jpg/revision/latest/scale-to-width-down/340?cb=20140907221509'],
  ['Henry David Thoreau', 'Walden', 'https://m.media-amazon.com/images/I/51MrMF9K4uL._SL350_.jpg'],
  ['Henry David Thoreau', 'Civil Disobedience', 'https://prodimage.images-bn.com/pimages/9783748500674_p0_v2_s550x406.jpg'],
  ['Hermann Hesse', 'Siddhartha', 'https://images.penguinrandomhouse.com/cover/9780142437186'],
  ['Homer', 'The Iliad', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL2jahOoGTvAUAV1S5lYpAEF2VjftCqsPm5w&usqp=CAU'],
  ['Homer', 'The Odyssey', 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/8722/9780872204843.jpg'],
  ['Ian Stewart', 'Nature\'s Numbers', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1208050552l/287898.jpg'],
  ['J.D. Salinger', 'The Catcher in the Rye', 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg'],
  ['J.K. Rowling', 'Harry Potter 1', 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter 2', 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter 3', 'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg'],
  ['J.K. Rowling', 'Harry Potter 4', 'https://prodimage.images-bn.com/pimages/9780439139601_p0_v1_s550x406.jpg'],
  ['J.K. Rowling', 'Harry Potter 5', 'https://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s1200x630.jpg'],
  ['J.K. Rowling', 'Harry Potter 6', 'https://images-na.ssl-images-amazon.com/images/I/51uO1pQc5oL._SX329_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter 7', 'https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg'],
  ['J.K. Rowling', 'Harry Potter and the Cursed Child', 'https://images-na.ssl-images-amazon.com/images/I/51NRPISnBuL._SX341_BO1,204,203,200_.jpg'],
  ['J.R.R. Tolkien', 'The Hobbit', 'https://images-na.ssl-images-amazon.com/images/I/51e5yIs332L._SX284_BO1,204,203,200_.jpg'],
  ['J.R.R. Tolkien', 'The Lord of the Rings 1', 'https://images-na.ssl-images-amazon.com/images/I/51Jp4bJahDL.jpg'],
  ['Jack Kerouac', 'On the Road', 'https://images-na.ssl-images-amazon.com/images/I/71R58qqYzDL.jpg'],
  ['Jack London', 'The Call of the Wild', 'https://images-na.ssl-images-amazon.com/images/I/81+9w5nFMDL.jpg'],
  ['James Cone', 'Black Theology and Black Power', 'https://images-na.ssl-images-amazon.com/images/I/51vh-iANb0L._SX322_BO1,204,203,200_.jpg'],
  ['James Gleick', 'The Information', 'https://images-na.ssl-images-amazon.com/images/I/510E4q8npXL._SX321_BO1,204,203,200_.jpg'],
  ['James Lincoln Collier and Christopher Collier', 'My Brother Sam is Dead', 'https://images-na.ssl-images-amazon.com/images/I/51CJlTMQqAL._SX316_BO1,204,203,200_.jpg'],
  ['James Redfield', 'The Celestine Prophecy', 'https://books.images.hpb.com/9780446518628/product.jpg'],
  ['James Swain', 'Deadman\'s Poker', 'https://images-na.ssl-images-amazon.com/images/I/51knSqmFRCL._SX303_BO1,204,203,200_.jpg'],
  ['James Swain', 'Deadman\'s Bluff', 'https://images-na.ssl-images-amazon.com/images/I/51-9WNPT8gL.__BG0,0,0,0_FMpng_AC_UL600_SR366,600_.jpg'],
  ['Jean Craighead George', 'My Side of the Mountain', 'https://images-na.ssl-images-amazon.com/images/I/513C4KTMW5L.jpg'],
  ['Jeff Abbott', 'Panic', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Panic_%28novel%29.jpg/220px-Panic_%28novel%29.jpg'],
  ['Jim Al-Khalili', 'Quantum', 'https://images-na.ssl-images-amazon.com/images/I/71rnrzOP7oL.jpg'],
  ['John Feinstein', 'A Good Walk Spoiled', 'https://images-na.ssl-images-amazon.com/images/I/51WTmSvDxiL._SX332_BO1,204,203,200_.jpg'],
  ['John Grisham', 'A Painted House', 'https://nationalbookswap.com/pbs/xl/28/7228/9780440237228.jpg'],
  ['John Grisham', 'The Appeal', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/The_Appeal_John_Grisham_Novel.JPG/220px-The_Appeal_John_Grisham_Novel.JPG'],
  ['John Grisham', 'The Broker', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388197990l/228011.jpg'],
  ['John Le Carre', 'The Spy Who Came in from the Cold', 'https://i.ebayimg.com/images/g/XPQAAOSwTlBZ4JTc/s-l640.jpg'],
  ['John Steinbeck', 'The Pearl', 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-book/pearl-book-image.jpg?itok=DYYEkeLX'],
  ['Jon Krakauer', 'Into Thin Air', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Into_Thin_Air.jpg/220px-Into_Thin_Air.jpg'],
  ['Joseph Conrad', 'Heart of Darkness', 'https://miro.medium.com/max/645/1*t9EGFixZjb05VqzTLsICTw.jpeg'],
  ['Kai Fu Lee', 'AI Superpowers', 'https://images-na.ssl-images-amazon.com/images/I/81JjMSKLeLL.jpg'],
  ['Kenneth Thomasma', 'Pathki Nana', 'https://m.media-amazon.com/images/I/51G+884uijL.jpg'],
  ['Kurt Vonnegut', 'Bluebeard', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387704700l/525912.jpg'],
  ['Kurt Vonnegut', 'Breakfast of Champions', 'https://prodimage.images-bn.com/pimages/9780385334204_p0_v1_s550x406.jpg'],
  ['Kurt Vonnegut', 'Cat\'s Cradle', 'https://images-na.ssl-images-amazon.com/images/I/81NIfUlv2DL.jpg'],
  ['Kurt Vonnegut', 'Galapagos', 'https://i412.photobucket.com/albums/pp206/Nymeth_2/Galapagos.jpg'],
  ['Kurt Vonnegut', 'God Bless You, Mr. Rosewater', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328311538l/6389247.jpg'],
  ['Kurt Vonnegut', 'Slaughterhouse Five', 'https://images-na.ssl-images-amazon.com/images/I/71QcX1DbklL.jpg'],
  ['Lao Tzu', 'Tao te Ching', 'https://m.media-amazon.com/images/I/51ae2WNHXqL.jpg'],
  ['Lawrence Goldstone', 'Off-Line', 'https://images-na.ssl-images-amazon.com/images/I/419vg91jQ2L._SX314_BO1,204,203,200_.jpg'],
  ['Lee Child', 'The Enemy', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388210939l/231562.jpg'],
  ['Lee Smolin', 'The Trouble with Physics', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390467381l/782057.jpg'],
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
  ['Louis Sachar', 'Holes', 'https://upload.wikimedia.org/wikipedia/en/c/c3/Sachar_-_Holes_Coverart.png'],
  ['Madeleine L\'Engle', 'A Wrinkle in Time', 'https://i.ebayimg.com/images/g/NOQAAOSwSlVeIAXG/s-l640.jpg'],
  ['Malcolm Gladwell', 'Outliers', 'https://images-na.ssl-images-amazon.com/images/I/41LO6QRvIuL._SX331_BO1,204,203,200_.jpg'],
  ['Malcolm Gladwell', 'David and Goliath', 'https://images-na.ssl-images-amazon.com/images/I/41H9ZCmjenL.jpg'],
  ['Mark Manson', 'The Subtle Art of Not Giving a F*ck', 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg'],
  ['Mark Twain', 'Adventures of Huckleberry Finn', 'https://m.media-amazon.com/images/I/51Ug1JktPpL._SL350_.jpg'],
  ['Mary Shelley', 'Frankenstein', 'https://prod-cat-files.macmillan.cloud/MediaResources/Jackets/258W/9780312463182.jpg'],
  ['Matthew B. Crawford', 'Shop Class as Soulcraft', 'https://images-na.ssl-images-amazon.com/images/I/514FGVRnh8L._SX325_BO1,204,203,200_.jpg'],
  ['Megan Whalen Turner', 'The Thief', 'https://pictures.abebooks.com/isbn/9780140388343-us-300.jpg'],
  ['Michael Cadnum', 'Forbidden Forest', 'https://images-na.ssl-images-amazon.com/images/I/51CHPBS1SCL._SX317_BO1,204,203,200_.jpg'],
  ['Michael Chabon', 'Summerland', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Chabon_summerland.jpg/220px-Chabon_summerland.jpg'],
  ['Michael Crichton', 'The Andromeda Strain', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516465304l/18726080._SY475_.jpg'],
  ['Michael Crichton', 'Jurassic Park', 'https://prodimage.images-bn.com/pimages/9780345538987_p0_v2_s550x406.jpg'],
  ['Michael Crichton', 'State of Fear', 'https://images-na.ssl-images-amazon.com/images/I/71AEIuKNv2L.jpg'],
  ['Michael Frayn', 'Copenhagen', 'https://images-na.ssl-images-amazon.com/images/I/71qWYNUbwuL.jpg'],
  ['Michio Kaku', 'Physics of the Impossible', 'https://images-na.ssl-images-amazon.com/images/I/51l28XOeOnL._SX327_BO1,204,203,200_.jpg'],
  ['Milan Kundera', 'The Unbearable Lightness of Being', 'https://images-na.ssl-images-amazon.com/images/I/415nLlgdz8L._SX337_BO1,204,203,200_.jpg'],
  ['Naguib Mahfouz', 'Akhenaten Dweller in Truth', 'https://m.media-amazon.com/images/I/414E3qKVTAL.jpg'],
  ['Neal Stephenson', 'Cryptonomicon', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387758151l/19785919.jpg'],
  ['Neal Stephenson', 'Snow Crash', 'https://i.ebayimg.com/images/g/UokAAOSwIYxfA4Pp/s-l300.jpg'],
  ['Norton Juster', 'The Phantom Tollbooth', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Phantomtollbooth.PNG/220px-Phantomtollbooth.PNG'],
  ['Oscar Wilde', 'The Importance of Being Earnest', 'https://prodimage.images-bn.com/pimages/9781250101662_p0_v3_s550x406.jpg'],
  ['Pamela Glintenkamp', 'Industrial Light and Magic', 'https://images-na.ssl-images-amazon.com/images/I/61oZYwPA5DL.jpg'],
  ['Paul Kalanithi', 'When Breath Becomes Air', 'https://images-na.ssl-images-amazon.com/images/I/81wUspzxnkL.jpg'],
  ['Paulo Coehlo', 'The Alchemist', 'https://images-na.ssl-images-amazon.com/images/I/41ybG235TcL._SX329_BO1,204,203,200_.jpg'],
  ['Pearl S. Buck', 'The Good Earth', 'https://images-na.ssl-images-amazon.com/images/I/51zRzieodBL._SX320_BO1,204,203,200_.jpg'],
  ['Pierre Spierckel', 'La Farce de Maitre Pathelin', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347635739l/984624.jpg'],
  ['Plato', 'The Republic', 'https://pictures.abebooks.com/isbn/9780140455113-us.jpg'],
  ['Rhonda Byrne', 'The Secret', 'https://i5.walmartimages.com/asr/1beb206f-6c80-4c85-840f-61e7dc2509f9_1.17a7fc26115afa2a0a671ed8914b16b1.jpeg'],
  ['Roald Dahl', 'Danny the Champion of the World', 'https://www.scholastic.com/content5/media/products/43/9780141301143_mres.jpg'],
  ['Roald Dahl', 'Charlie and the Great Glass Elevator', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1190183083l/1910094.jpg'],
  ['Robert Louis Stevenson III', 'Torchlight', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427214506l/6966166.jpg'],
  ['Robert Ludlum', 'The Bourne Identity', 'https://i.ebayimg.com/images/g/~HEAAOSwTEteOzdB/s-l640.jpg'],
  ['Robert M. Pirsig', 'Zen and the Art of Motorcycle Maintenance', 'https://m.media-amazon.com/images/I/51y4OhDDi3L._SL350_.jpg'],
  ['Roger Lancelyn Green', 'King Arthur', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328306152l/10190501.jpg'],
  ['Salman Rushdie', 'Haroun and the Sea of Stories', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1277683566l/471966.jpg'],
  ['Sidney W. Mintz', 'Sweetness and Power', 'https://images-na.ssl-images-amazon.com/images/I/51cpqGQ0rLL._SX325_BO1,204,203,200_.jpg'],
  ['Sophocles', 'Antigone', 'https://images-na.ssl-images-amazon.com/images/I/41LaSiewAyL._SX317_BO1,204,203,200_.jpg'],
  ['Stephen Coonts', 'The Traitor', 'https://images-na.ssl-images-amazon.com/images/I/51IiaowuD9L.jpg'],
  ['Stephen Hawking', 'A Brief History of Time', 'https://prodimage.images-bn.com/pimages/9784871871150_p0_v1_s550x406.jpg'],
  ['Stephen Mitchell', 'The Book of Job', 'https://images-na.ssl-images-amazon.com/images/I/51BNAD8p6pL.jpg'],
  ['Stephen Pincock', 'Codebreaker', 'https://images-na.ssl-images-amazon.com/images/I/5162ubzA45L.jpg'],
  ['Stieg Larsson', 'The Girl with the Dragon Tattoo 1', 'https://images-na.ssl-images-amazon.com/images/I/51AA0MWoCIL._SX277_BO1,204,203,200_.jpg'],
  ['Stieg Larsson', 'The Girl with the Dragon Tattoo 2', 'https://m.media-amazon.com/images/I/61PlJJX191L.jpg'],
  ['Stieg Larsson', 'The Girl with the Dragon Tattoo 3', 'https://images-na.ssl-images-amazon.com/images/I/814hdIxmkgL.jpg'],
  ['Suzanne Collins', 'The Hunger Games 1', 'https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg'],
  ['Tara Westover', 'Educated', 'https://images-na.ssl-images-amazon.com/images/I/81Mr22-LgbL._AC_UL320_SR210,320_.jpg'],
  ['Tom Clancy', 'Patriot Games', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/PatriotGames.JPG/220px-PatriotGames.JPG'],
  ['Tom Clancy', 'The Sum of All Fears', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/SOAF_movie.JPG/220px-SOAF_movie.JPG'],
  ['Tom Wolfe', 'The Electric Kool-Aid Acid Test', 'https://images-na.ssl-images-amazon.com/images/I/51UMpPPd53L._SX330_BO1,204,203,200_.jpg'],
  ['Theodore Taylor', 'The Cay', 'https://images-na.ssl-images-amazon.com/images/I/519481T83DL.jpg'],
  ['Thomas Friedman', 'The World is Flat', 'https://images-na.ssl-images-amazon.com/images/I/415MhuA57CL._AC_SY400_.jpg'],
  ['Unknown', 'Beowulf', 'https://images-na.ssl-images-amazon.com/images/I/51Jb3341SZL._SX325_BO1,204,203,200_.jpg'],
  ['Walter Isaacson', 'Einstein', 'https://images-na.ssl-images-amazon.com/images/I/816W3z2T3cL.jpg'],
  ['William Shakespeare', 'The Tempest', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546081115l/12985.jpg'],
  ['William Shakespeare', 'Hamlet', 'https://images-na.ssl-images-amazon.com/images/I/81pl6ZLEFtL.jpg'],
  ['Wilson Rawls', 'Where the Red Fern Grows', 'https://images-na.ssl-images-amazon.com/images/I/51W5dPzWHvL._SX314_BO1,204,203,200_.jpg'],
];

// 15 Minutes - Gary Goldstein
// Seals Strategic Warfare - Mike Martell
// Poker - David A. Daniel
// Book of Bluffs - Matt Lessinger
// Caro's Book of Poker Tells - Mike Caro
// Hold 'Em Poker - Gary Carson
// The Gambling Time Guide to Casino Games - Len Miller
