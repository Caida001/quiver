# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all

batman = User.create!(
          username: "xXxDarkKnightxXx",
          password: "superdarkgrumpster"
)

Channel.find_by_owner_id(batman.id).update_attributes!(
          name: 'Darkest Night',
          pic_url: 'https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg'
)

shadow = User.create!(
          username: "Shadowter",
          password: "supershadow"
)

Channel.find_by_owner_id(shadow.id).update_attributes!(
          name: 'Sons of the Patriots',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1501352308/71853_rvcp6m.jpg'
)

dbz = User.create!(
          username: "Deryl Weevly",
          password: "weebly5000"
)

Channel.find_by_owner_id(dbz.id).update_attributes!(
          name: 'Fighters of Z',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/c_crop,h_720,q_100,w_720,x_170/v1503518664/maxresdefault_tvcdi6.jpg'
)

spidey = User.create!(
          username: "Excelsior",
          password: "gomahvel"
)

Channel.find_by_owner_id(spidey.id).update_attributes!(
          name: 'Mahvel',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775111/Profiles/78244_g4ueq0.jpg'
)

dio = User.create!(
          username: "Dio",
          password: "itisidio"
)

Channel.find_by_owner_id(dio.id).update_attributes!(
          name: 'It is I, Dio!',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775126/Profiles/103_izqxma.png'
)

zelda = User.create!(
          username: "Mogambo",
          password: "jambojambo"
)

Channel.find_by_owner_id(zelda.id).update_attributes!(
          name: 'For Heart and Soul',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500851793/Profiles/25.jpg'
)

inside = User.create!(
          username: "mackey",
          password: "mackster12"
)

Channel.find_by_owner_id(inside.id).update_attributes!(
          name: 'Mind Channel',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500850453/Profiles/mlwVgO2L.jpg'
)

john = User.create!(
          username: "potato monster",
          password: "potatoes"
)

Channel.find_by_owner_id(john.id).update_attributes!(
          name: 'John Freeman',
          pic_url: 'https://res.cloudinary.com/zwitch/image/upload/q_100/v1500775093/Profiles/john-freeman_jezgoi.png'
)


User.create!(
  username: "guest",
  password: "guestpassword"
)

dallas = User.create!(
          username: "Dallas",
          password: "supersecretpassword"
)

ganymede = User.create!(
          username: "Ganymede",
          password: "jupiterbestplanet"
)

mikey = User.create!(
          username: "mikey",
          password: "mikeyboy96"
)

terrance = User.create!(
          username: "Terrance",
          password: "appacademy"
)

joey = User.create!(
          username: "Joey",
          password: "joeyjoey"
)

howard = User.create!(
          username: "Howard",
          password: "howieisgreat"
)

ade = User.create!(
          username: "Ade",
          password: "frigginjoey"
)

virginia = User.create!(
          username: "Virginia",
          password: "beststate"
)

naum = User.create!(
          username: "Naum31",
          password: "numlet"
)

zpants = User.create!(
          username: "Z Pants",
          password: "pantsareus"
)
