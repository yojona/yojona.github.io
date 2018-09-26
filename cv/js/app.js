
moment.locale('es')

var birthday = moment([1993, 10, 8])
var age = moment().diff(birthday, 'year')

var info = {
  name: 'Jonathan Esteban Ayala Muñoz',
  shortname: 'Jonathan Ayala',
  age: age,
  place: 'Empalme, Sonora',
  edu: 'ITSON Guaymas',
  love: 'Javascript',
  phone: '044 622 112 5717',
  email: 'yojona@msn.com',
  picture: 'img/profile.jpg'
}

var string_es = {
  info: 'Información',
  years: 'años',
  about: 'Desarrollador de soluciones de Software.',
  experience: 'Experiencia laboral',
  in: 'en',
  projects: 'Proyectos recientes',
  tech: 'Tecnologías',
  nopublished: 'No publicado',
  downloads: 'descargas',
  made: 'Creado con Vue 2, MomentJS & Bootstrap',
  translatetospanish: 'Traducir al Español',
  about: 'Entusiasta de las tecnologías web con experiencia en el desarrollo de aplicaciones multiplataforma.',
  isw: 'Ingeniería de Software'
}

var string_en = {
  info: 'Info',
  years: 'years old',
  about: 'Software developer.',
  experience: 'Work experience',
  in: 'at',
  projects: 'Recent projects',
  tech: 'Technologies',
  nopublished: 'Not published yet',
  downloads: 'downloads',
  made: 'Made with Vue 2, MomentJS & Bootstrap',
  translatetospanish: 'Translate to Spanish',
  about: 'Web Tech enthusiast with experience building cross platform apps.',
  isw: 'Software Engineering'

}

var string = string_en

var techs = [
  'Javascript',
  'Node.js',
  'Express',
  'Vue 2',
  'React.js',
  'React Native',
  'PHP',
  'Mysql',
  'Mongo',
  'RethinkDB',
  'Doctrine',
  'Apache Cordova',
  'RESTful',
  'Bootstrap',
  'Jquery'
]

var apps = {
  rattabros: {
    name: 'Rata Bros',
    icon: 'img/rattabros.png',
    googleplay: 'https://play.google.com/store/apps/details?id=com.negas.ratabros',
    downloads: '90,000',
    published: true
  },
  ratta: {
    name: 'Niño Ratta',
    icon: 'img/ratta.png',
    googleplay: 'https://play.google.com/store/apps/details?id=com.ludeku.ratta',
    appstore: 'https://itunes.apple.com/mx/app/niño-ratta/id1170361068',
    downloads: '1,000,000',
    published: true
  },
  pinchimono: {
    name: 'Pinchimono',
    icon: 'img/pinchi.png',
    googleplay: 'https://play.google.com/store/apps/details?id=com.ludeku.pinchimono',
    appstore: 'https://itunes.apple.com/mx/app/pinkimono/id1244547705',
    downloads: '200,000',
    published: true
  },
  whiteman: {
    name: 'Whiteman',
    icon: 'img/whiteman.png',
    googleplay: 'https://play.google.com/store/apps/details?id=com.ludeku.whiteman',
    downloads: '800',
    published: true
  },
  mufer: {
    name: 'Museo Ferrocarrilero A. C.',
    icon: 'img/mufer.png',
    googleplay: 'https://play.google.com/store/apps/details?id=com.mufer.app',
    downloads: 10,
    published: true
  }
}

var experience = {
  ipssum: {
    name: 'IPSSUM',
    profile: 'Game Developer',
    link: 'https://www.facebook.com/jipssum/',
    start: moment('20180101').format('MMMM YYYY'),
    end: moment('20180613').format('MMMM YYYY')
  },
  ludeku: {
    name: 'Ludeku',
    profile: 'Game Developer',
    link: 'http://ludeku.net/',
    start: moment('20160501').format('MMMM YYYY'),
    end: moment('20170913').format('MMMM YYYY')
  },
  cuartoo: {
    name: 'CUARTOO',
    profile: 'Fullstack Developer',
    link: 'http://cuartoo.mx/',
    start: moment('20150501').format('MMMM YYYY'),
    end: moment('20160220').format('MMMM YYYY')
  },
  devadler: {
    name: 'Devadler',
    profile: 'PHP Developer',
    link: 'http://devadler.com/',
    start: moment('20120522').format('MMMM YYYY'),
    end: moment('20141102').format('MMMM YYYY')
  }
}
var app = new Vue({
  el: '#app',
  data: {
    dataLang: 'es',
    info: info,
    string: string,
    techs: techs,
    apps: apps,
    experience: experience
  }
})

function toggle (e) {
  if (e.checked) {
    app.dataLang = 'es'
    app.string = string_es
  } else {
    app.dataLang = 'en'
    app.string = string_en
  }
}
