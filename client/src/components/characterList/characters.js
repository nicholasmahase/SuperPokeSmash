// available characters
characters = [
    {
      name: "pikachu",
      type: 'electric',
      weakness: ['fighting'],
      resistance: ['steel'],
      img: {
        default: "http://vignette2.wikia.nocookie.net/all-anime-characters/images/7/7b/Cute_pikachu_with_hat_by_mlpochea-d63xlom.png/revision/latest?cb=20150108111832",
        front: "http://rs1263.pbsrc.com/albums/ii631/Pokemon-Vampire-Knight-lover/pikachu_.gif~c200",
        back: "http://vignette4.wikia.nocookie.net/pokemon/images/5/5b/Pikachu_Back_XY.gif/revision/latest?cb=20141009080948"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "thunder jolt",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "electro ball",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "volt tackle",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "thunder crack",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "charmander",
      type: 'fire',
      weakness: ['water'],
      resistance: ['grass'],
      img: {
        default: "http://img3.wikia.nocookie.net/__cb20150330015216/pokemon/images/f/f5/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png",
        front: "http://rs772.pbsrc.com/albums/yy9/HybridRainbow88/Charmander.gif~c200",
        back: "http://vignette1.wikia.nocookie.net/pokemon/images/2/23/Charmander_Back_XY.gif/revision/latest?cb=20141009063457"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "ember",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "flamethrower",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "burning tail",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "fire spin",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "squirtle",
      type: 'water',
      weakness: ['electric','grass'],
      resistance: ['normal','fire'],
      img: {
        default: "http://vignette3.wikia.nocookie.net/ssbb/images/7/79/Squirtle_Rojo_Fuego_y_Verde_Hoja.png/revision/latest?cb=20130907041944&path-prefix=es",
        front: "https://66.media.tumblr.com/ddd22fe10a485ed56a46d958c058a970/tumblr_n9lnpepqkW1scncwdo1_500.gif",
        back: "http://vignette3.wikia.nocookie.net/pokemon/images/d/d8/Squirtle_XY_Back_Sprite.gif/revision/latest?cb=20141031154426"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "bubble",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "water gun",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "shell attack",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "hydro pump",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "bulbasaur",
      type: 'grass',
      weakness: ['fire'],
      resistance: ['water','psychic'],
      img: {
        default: "http://vignette4.wikia.nocookie.net/pokemon/images/8/81/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105223818",
        front: "https://media.giphy.com/media/iIWW4BM6nNWTu/giphy.gif",
        back: "http://rs425.pbsrc.com/albums/pp335/Grasaldrea/ShinyBulbasauranimatedback.gif~c200",
        deranged: "http://rs522.pbsrc.com/albums/w348/Richtoon18/b3617568f13aa750c57eacc45d0b2da7.gif~c200",
        sleep: "https://31.media.tumblr.com/4dd7682db26ac687ef81f0dd06794652/tumblr_msesq5uAIk1r93jsro1_500.gif"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "tackle",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "vine whip",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "razor leaf",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "solar beam",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
      name: "machop",
      type: 'fighting',
      weakness: ['psychic','electric'],
      resistance: [],
      img: {
        default: "http://clipart.toonarific.com/data/media/11/pokemon066.gif",
        front: "http://graphics.tppcrpg.net/xy/normal/066F.gif",
        back:  "http://pokeunlock.com/wp-content/uploads/2015/01/machop-2.gif"
      },
      hp: {
        current: 500,
        total: 500
      },
      attacks: [
        {
          name: "low kick",
          hp: randomNum(40,20),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "karate chop",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "seismic toss",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "hundred furious punches",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    }
  ];

