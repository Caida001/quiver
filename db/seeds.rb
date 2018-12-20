# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Category.destroy_all

league = Category.create!(name: "League of Legends", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg")
fortnite = Category.create!(name: "Fortnite", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg")
call = Category.create!(name: "Call of Duty", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Black%20Ops%204-285x380.jpg")
grand = Category.create!(name: "Grand Theft Auto", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-285x380.jpg")
overwatch = Category.create!(name: "Overwatch", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-285x380.jpg")
warframe = Category.create!(name: "Warframe", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/Warframe-285x380.jpg")
star = Category.create!(name: "StarCraft II", category_url: "https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-285x380.jpg")



batman = User.create!(
          username: "xXxDarkKnightxXx",
          password: "superdarkgrumpster",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/jukes-profile_image-2cfa4ae41f439e5e-50x50.jpeg"
)

Channel.find_by_owner_id(batman.id).update_attributes!(
          name: 'jukes',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/5cb7c333dca3c46b1468_jukes_31720741664_1051171787/thumb/thumb0-320x180.jpg',
          cate: 'League of Legends',
          category_id: league.id
)

shadow = User.create!(
          username: "Shadowter",
          password: "supershadow",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/patopapao-profile_image-079284cdccee9d15-50x50.jpeg"
)

Channel.find_by_owner_id(shadow.id).update_attributes!(
          name: 'Sons of the Patriots',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/cf790136a918aa965d00_patopapao_31723104960_1051319493/thumb/thumb0-320x180.jpg',
          cate: 'League of Legends',
          category_id: league.id
)

dbz = User.create!(
          username: "Deryl Weevly",
          password: "weebly5000",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/d9f43602-fcf0-460c-a273-ef8640ac0233-profile_image-50x50.jpg"
)

Channel.find_by_owner_id(dbz.id).update_attributes!(
          name: 'Fighters of Z',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/c084abfeda/sgstyllee_10511238912_10511238912/thumb/thumb0-320x180.jpg',
          cate: 'League of Legends',
          category_id: league.id
)

spidey = User.create!(
          username: "Excelsior",
          password: "gomahvel",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/320226c6-f422-4baf-8ed2-1be7eb3757e6-profile_image-50x50.png"
)

Channel.find_by_owner_id(spidey.id).update_attributes!(
          name: 'Mahvel',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/388c4669b47d6b31bad1_cloakzy_31717243024_1050953122/thumb/thumb0-320x180.jpg',
          cate: 'Fortnite',
          category_id: fortnite.id
)

dio = User.create!(
          username: "Dio",
          password: "itisidio",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/1aba0e3b-069c-486f-af71-5371308eeee1-profile_image-50x50.jpg"
)

Channel.find_by_owner_id(dio.id).update_attributes!(
          name: 'It is I, Dio!',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/16c4f289671e34594b92_rubius_31143984320_1015124451//thumb/thumb333054537-320x180.jpg',
          cate: 'Fortnite',
          category_id: fortnite.id
)

zelda = User.create!(
          username: "Mogambo",
          password: "jambojambo",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-50x50.jpeg"
)

Channel.find_by_owner_id(zelda.id).update_attributes!(
          name: 'For Heart and Soul',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/1baa3439ebd31c30d32b_joshog_30847389760_996587291//thumb/thumb324934405-320x180.jpg',
          cate: 'Call of Duty',
          category_id: call.id
)

inside = User.create!(
          username: "mackey",
          password: "mackster12",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/9813fa94-95d5-4cbd-b4d7-b36b89e39c42-profile_image-50x50.jpg"
)

Channel.find_by_owner_id(inside.id).update_attributes!(
          name: 'Mind Channel',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/828a64c4b397611112de_halifax_25660301712_672439349//thumb/thumb156446883-320x180.jpg',
          cate: 'Call of Duty',
          category_id: call.id
)

john = User.create!(
          username: "potato monster",
          password: "potatoes",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/06f887b00a7c87cb-profile_image-50x50.png"
)

Channel.find_by_owner_id(john.id).update_attributes!(
          name: 'John Freeman',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/c39403717190323738df_sheepdog59_26096281296_699687772//thumb/thumb177753315-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)



dallas = User.create!(
          username: "Dallas",
          password: "supersecretpassword",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/vader-profile_image-e591bfc7b87113ed-50x50.jpeg"
)

Channel.find_by_owner_id(dallas.id).update_attributes!(
          name: 'JL TOMA',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/77cf140b33_vaderrp_24113323408_575753215//thumb/thumb111605124-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)

ganymede = User.create!(
          username: "Ganymede",
          password: "jupiterbestplanet",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/02a27423-b097-4e51-9429-dc37959daab4-profile_image-50x50.png"
)

Channel.find_by_owner_id(ganymede.id).update_attributes!(
          name: 'sura',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/f188bae35d91d1ba76ce_venalis_30500312224_974894945//thumb/thumb314406280-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)

mikey = User.create!(
          username: "mikey",
          password: "mikeyboy96",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/dea7baef-31f5-4be4-bb71-c3c88f3b52ff-profile_image-50x50.jpg"
)

Channel.find_by_owner_id(mikey.id).update_attributes!(
          name: 'kyle',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/342d66149a1a76dec618_spaceboy_29452037520_909422508//thumb/thumb284098963-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)

terrance = User.create!(
          username: "Terrance",
          password: "appacademy",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/iddqd-profile_image-9dab0da1740cce94-50x50.png"
)

Channel.find_by_owner_id(terrance.id).update_attributes!(
          name: 'vale',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/a5878da11b8d2076dfb4_iddqd_29009864016_881786664//thumb/thumb272314853-320x180.jpg',
          cate: 'Overwatch',
          category_id: overwatch.id
)

joey = User.create!(
          username: "Joey",
          password: "joeyjoey",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/f86f0d47-a2fd-4ed8-a2c1-411ca7c2620d-profile_image-50x50.png"
)

Channel.find_by_owner_id(joey.id).update_attributes!(
          name: 'headcola',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/f2177d25c8d596c91be8_nyxx_tv_31696024960_1049626993/thumb/thumb0-320x180.jpg',
          cate: 'Warframe',
          category_id: warframe.id
)

howard = User.create!(
          username: "Howard",
          password: "howieisgreat",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/7e3a3a8e1b039f7b-profile_image-50x50.png"
)

Channel.find_by_owner_id(howard.id).update_attributes!(
          name: 'DropDeadRed',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/41b09d57187cb664bb70_nyxx_tv_31726658848_1051541611/thumb/thumb0-320x180.jpg',
          cate: 'Warframe',
          category_id: warframe.id
)

ade = User.create!(
          username: "Ade",
          password: "frigginjoey",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/1a1ddafe-8f80-4d06-bd57-3077eecf9ab0-profile_image-50x50.png"
)

Channel.find_by_owner_id(ade.id).update_attributes!(
          name: 'wintergaming',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/375e28d61fbc4014e7fe_x5_pig_31720539760_1051159168/thumb/thumb0-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

virginia = User.create!(
          username: "Virginia",
          password: "beststate",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/juggernautjason-profile_image-6deb7881dde54c7d-50x50.jpeg"
)

Channel.find_by_owner_id(virginia.id).update_attributes!(
          name: 'Dragon',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/3044f567e58814a562a5_x5_pig_31660010960_1047376118//thumb/thumb350716141-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

naum = User.create!(
          username: "Naum31",
          password: "numlet",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/215b25edaa9c1816-profile_image-50x50.png"
)

Channel.find_by_owner_id(naum.id).update_attributes!(
          name: 'cosmos',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/375e28d61fbc4014e7fe_x5_pig_31720539760_1051159168/thumb/thumb0-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

zpants = User.create!(
          username: "Z Pants",
          password: "pantsareus",
          image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/80cd163b-9951-49ed-a76b-ca0102183ad0-profile_image-50x50.png"
)

Channel.find_by_owner_id(zpants.id).update_attributes!(
          name: 'djorjix',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/ee207ae758cb49b03fb1_livibee_31711260064_1050579187/thumb/thumb0-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)


demo = User.create!(
  username: "guest",
  password: "guestpassword",
  image_url: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-70x70.jpg"
)

Channel.find_by_owner_id(demo.id).update_attributes!(
          name: 'noname',
          pic_url: 'https://static-cdn.jtvnw.net/s3_vods/ee207ae758cb49b03fb1_livibee_31711260064_1050579187/thumb/thumb0-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

Follow.create!(follower_id: demo.id, followed_channel_id: zpants.id)
Follow.create!(follower_id: demo.id, followed_channel_id: ade.id)
Follow.create!(follower_id: demo.id, followed_channel_id: joey.id)
Follow.create!(follower_id: demo.id, followed_channel_id: ganymede.id)
