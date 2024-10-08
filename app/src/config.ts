import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina1.mp4'), 
            poster: import('./assets/img/healfina therapy 2 var.jpg'), 
            style: 'aspect-ratio: 1024/1024',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Привет!',
          description:
            "Я хочу помочь тебе научиться лучше <b>понимать себя</b>, найти эффективные для тебя стратегии <b>преодоления трудностей</b> и направить тебя в путешествие к лучшей версии себя 💚 <br><br>Я буду опираться на <b>проверенные</b> методы когнитивно-поведенческой терапии (КПТ), которая помогла многим людям улучшить свою жизнь 🌈",
          button: 'Что такое КПТ?',
        },

        
        // что такое кпт
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina2.mp4'), 
            poster: import('./assets/img/treatment compare.jpg'),
            style: 'aspect-ratio: 1280/896'
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Что такое КПТ?',
          description:
            " КПТ – это настоящая звезда в мире психологии✨  Научные исследования подтвердили, что именно КПТ <b>наиболее эффективна</b> против таких проблем как тревожность и депрессия.📊 <br><br>Что особенно здорово: люди <b>чувствуют облегчение быстрее и это ощущение сохраняется дольше</b>, чем при использовании других методов.",
          button: 'Как это может помочь мне?',
        },


        // some animated media 
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina3.mp4'),
            poster: import('./assets/img/logo_brain.png'),
            style: 'aspect-ratio: 750/420',
          },
          shape: 'rounded',
          pagination: 'count',
          title: ' Как это может помочь мне?',
          description:
            " Знаешь, КПТ – это не только для тех, у кого есть явные проблемы. Этот метод может стать твоим <b>помощником в понимании себя и своих желаний</b>. Хочешь лучше узнать свои ценности, правильно ставить и достигать цели, бороться со стрессом/тревогой или просто улучшить качество сна и отношения с окружающими? 🌟 В общем, КПТ – это научно подтвержденный <b>путь к внутреннему равновесию и гармонии</b>.🌷 <br><br>Давай идти по этому пути рука об руку!🌟 ",
          button: 'А что ты умеешь?',
        },


        // а что ты умеешь?
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina4.mp4'),
            poster: import('./assets/img/site_img.png'),
            style: 'aspect-ratio: 1456/850',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'А что ты умеешь?',
          description:
            ' Часто мы сталкиваемся с трудностями, когда нам кажется, что решение проблемы настолько сложно, что даже собраться с силами и взяться за него кажется невозможным. Мы хотим, чтобы кто-то был рядом, помог, поддержал и указал на верный путь.💬  <br>Вот именно <b>для этого я здесь</b>! Я углубилась в изучение сотен научных статей и пособий по психологии, чтобы помочь тебе <b>применить эти знания в жизни</b>. 📚✨ <br>Мы вместе определим твои цели, и я помогу тебе двигаться к их достижению, прямо как бы делал это настоящий психолог. 🧑‍⚕️ ',
          button: 'Какой у нас план?',
        },

        
        // какой у нас план
        {

          media: {
            type: 'video',
            src: import('./assets/videos/Healfina5.mp4'), 
            poster: import('./assets/img/healfina and girl2.jpg'), 
            style: 'aspect-ratio: 908/878',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Какой у нас план?',
          description:
            'Мне важно твое благополучие, и я готова помочь тебе в путешествии к ментальному здоровью.🌼 Каждая наша встреча будет тщательно спланирована и <b>настроена под тебя</b>, чтобы приносить максимальную пользу именно в твоей уникальной ситуации.👩‍💻✨ ',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'еженедельные консультации',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'медитации',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: ' инструменты для самоанализа и отслеживания твоего психологического состояния',
            }
            ],
            button: 'А это безопасно?',
        },

        // а это безопасно?
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina6.mp4'), 
            poster: import('./assets/img/healfina photo.jpg'), 
            style: 'aspect-ratio: 640/640',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'А это безопасно?',
          description:
            'Все наше общение сохранится в секрете, так что можешь чувствовать себя свободно и делиться со мной всем, что на душе. 🙂 Все данные хранятся в обезличенном виде, поэтому никак нельзя установить связь между тобой и твоими диалогами, можешь быть спокойна 😇 <br><br>Давай попробуем? Для этого вернись в чат с ботом и нажми кнопку <b>"Начать общение"</b> в меню ниже. 🌟 ',
          button: {
            content: 'Вернуться в чат',
            href: 'https://t.me/Helfina_bot',
          }
        },
      ],
    },
  ],
});
