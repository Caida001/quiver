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
          password: "superdarkgrumpster"
)

Channel.find_by_owner_id(batman.id).update_attributes!(
          name: 'jukes',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_jukes-320x180.jpg',
          cate: 'League of Legends',
          category_id: league.id
)

shadow = User.create!(
          username: "Shadowter",
          password: "supershadow"
)

Channel.find_by_owner_id(shadow.id).update_attributes!(
          name: 'Sons of the Patriots',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_th3antonio-320x180.jpg',
          cate: 'League of Legends',
          category_id: league.id
)

dbz = User.create!(
          username: "Deryl Weevly",
          password: "weebly5000"
)

Channel.find_by_owner_id(dbz.id).update_attributes!(
          name: 'Fighters of Z',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_vaporadark-320x180.jpg',
          cate: 'League of Legends',
          category_id: league.id
)

spidey = User.create!(
          username: "Excelsior",
          password: "gomahvel"
)

Channel.find_by_owner_id(spidey.id).update_attributes!(
          name: 'Mahvel',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_gotaga-320x180.jpg',
          cate: 'Fortnite',
          category_id: fortnite.id
)

dio = User.create!(
          username: "Dio",
          password: "itisidio"
)

Channel.find_by_owner_id(dio.id).update_attributes!(
          name: 'It is I, Dio!',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_wintrrz-320x180.jpg',
          cate: 'Fortnite',
          category_id: fortnite.id
)

zelda = User.create!(
          username: "Mogambo",
          password: "jambojambo"
)

Channel.find_by_owner_id(zelda.id).update_attributes!(
          name: 'For Heart and Soul',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_lyndonfps-320x180.jpg',
          cate: 'Call of Duty',
          category_id: call.id
)

inside = User.create!(
          username: "mackey",
          password: "mackster12"
)

Channel.find_by_owner_id(inside.id).update_attributes!(
          name: 'Mind Channel',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_kuavoken-320x180.jpg',
          cate: 'Call of Duty',
          category_id: call.id
)

john = User.create!(
          username: "potato monster",
          password: "potatoes"
)

Channel.find_by_owner_id(john.id).update_attributes!(
          name: 'John Freeman',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_poneyrasta-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)



dallas = User.create!(
          username: "Dallas",
          password: "supersecretpassword"
)

Channel.find_by_owner_id(dallas.id).update_attributes!(
          name: 'JL TOMA',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_jltomy-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)

ganymede = User.create!(
          username: "Ganymede",
          password: "jupiterbestplanet"
)

Channel.find_by_owner_id(ganymede.id).update_attributes!(
          name: 'sura',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_sura-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)

mikey = User.create!(
          username: "mikey",
          password: "mikeyboy96"
)

Channel.find_by_owner_id(mikey.id).update_attributes!(
          name: 'kyle',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_kyle-320x180.jpg',
          cate: 'Grand Theft Auto',
          category_id: grand.id
)

terrance = User.create!(
          username: "Terrance",
          password: "appacademy"
)

Channel.find_by_owner_id(terrance.id).update_attributes!(
          name: 'vale',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_vale-320x180.jpg',
          cate: 'Overwatch',
          category_id: overwatch.id
)

joey = User.create!(
          username: "Joey",
          password: "joeyjoey"
)

Channel.find_by_owner_id(joey.id).update_attributes!(
          name: 'headcola',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_serganikari-320x180.jpg',
          cate: 'Warframe',
          category_id: warframe.id
)

howard = User.create!(
          username: "Howard",
          password: "howieisgreat"
)

Channel.find_by_owner_id(howard.id).update_attributes!(
          name: 'DropDeadRed',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_dropdeadred-320x180.jpg',
          cate: 'Warframe',
          category_id: warframe.id
)

ade = User.create!(
          username: "Ade",
          password: "frigginjoey"
)

Channel.find_by_owner_id(ade.id).update_attributes!(
          name: 'wintergaming',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_wintergaming-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

virginia = User.create!(
          username: "Virginia",
          password: "beststate"
)

Channel.find_by_owner_id(virginia.id).update_attributes!(
          name: 'Dragon',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_dragon-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

naum = User.create!(
          username: "Naum31",
          password: "numlet"
)

Channel.find_by_owner_id(naum.id).update_attributes!(
          name: 'cosmos',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_sefirofe-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)

zpants = User.create!(
          username: "Z Pants",
          password: "pantsareus"
)

Channel.find_by_owner_id(zpants.id).update_attributes!(
          name: 'djorjix',
          pic_url: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_djorjx-320x180.jpg',
          cate: 'StarCraft II',
          category_id: star.id
)



User.create!(
  username: "guest",
  password: "guestpassword"
)
