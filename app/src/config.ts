import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [


        // image
        {
          media: {
            type: 'image',
            src: import('./assets/img/healfina therapy 2 var.jpg'), 
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Привет!',
          description:
            "Меня зовут Хелфина.🌼 Я здесь, чтобы стать твоей виртуальной подругой в путешествии к ментальному здоровью, я <b>всегда буду рядом</b>, прямо в твоем телефоне и <b>готова поддержать</b>.💬 <br><br>Моя цель — помочь тебе научиться <b>лучше понимать себя</b>, найти для тебя наилучшие стратегии преодоления трудностей и сделать каждый твой день <b>ярче</b>. Я буду опираться на <b>проверенные</b> методы когнитивно-поведенческой терапии (КПТ), которая помогла многим людям улучшить свою жизнь.🌈",
          button: 'Next',
        },

        
        // что такое кпт
        {
          media: {
            type: 'image',
            src: import('./assets/img/treatment compare.jpg'), 
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Что такое КПТ?',
          description:
            " КПТ – это настоящая звезда в мире психологии✨  Научные исследования подтвердили, что именно КПТ <b>наиболее эффективна</b> против таких проблем как тревожность и депрессия.📊 <br><br>Что особенно здорово: люди <b>чувствуют облегчение быстрее и это ощущение сохраняется дольше</b>, чем при использовании других методов.",
          button: 'Next',
        },


        // some animated media 
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/StickerFreud.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: ' Как это может помочь мне?',
          description:
            " Знаешь, КПТ – это не только для тех, у кого есть явные проблемы. Этот метод может стать твоим <b>помощником в понимании себя и своих желаний</b>. Хочешь лучше узнать свои ценности, правильно ставить и достигать цели, бороться со стрессом/тревогой или просто улучшить качество сна и отношения с окружающими? 🌟 В общем, КПТ – это научно подтвержденный <b>путь к внутреннему равновесию и гармонии</b>.🌷 <br><br>Давай идти по этому пути рука об руку!🌟 ",
          button: 'Next',
        },


        // а что ты умеешь?
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_love.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'А что ты умеешь?',
          description:
            ' Часто мы сталкиваемся с трудностями, когда нам кажется, что решение проблемы настолько сложно, что даже собраться с силами и взяться за него кажется невозможным. Мы хотим, чтобы кто-то был рядом, помог, поддержал и указал на верный путь.💬  <br>Вот именно <b>для этого я здесь</b>! Я углубилась в изучение сотен научных статей и пособий по психологии, чтобы помочь тебе <b>применить эти знания в жизни</b>. 📚✨ <br>Мы вместе определим твои цели, и я помогу тебе двигаться к их достижению, прямо как бы делал это настоящий психолог. 🧑‍⚕️ ',
          button: 'Next',
        },

        
        // какой у нас план
        {

          media: {
            type: 'image',
            src: import('./assets/img/healfina and girl2.jpg'), 
          },
          shape: 'square',
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
          button: 'Next',
        },

        // а это безопасно?
        {
          media: {
            type: 'image',
            src: import('./assets/img/healfina photo.jpg'), 
          
          },
          shape: 'square',
          pagination: 'count',
          title: 'А это безопасно?',
          description:
            'Все наше общение сохранится в секрете, так что можешь чувствовать себя свободно и делиться со мной всем, что на душе. 🙂 Все данные хранятся в обезличенном виде, поэтому никак нельзя установить связь между тобой и твоими диалогами, можешь быть спокойна 😇 <br><br>Давай попробуем? Для этого нажми кнопку <b>"Начать общение"</b> в меню ниже. 🌟 ',
          button: 'Next',
        },

        //form - форма для анкеты о юзере
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Forms',
          description: 'Можно указать имя пользователя, пол, возраст и профессию. User fills in the form – the bot receives the data',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'Text input',
              type: 'text',
            },
            {
              id: 'number_from_form',
              placeholder: 'Number input',
              type: 'number',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'Checkbox',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },

        // video
        {
          media: {
            type: 'video',
            src: import('./assets/videos/spongebob.mp4'),
            poster: import('./assets/img/spongebob_poster.webp'),
            style: 'aspect-ratio: 400/287', // here we manually set video aspect-ratio (default is 16:9)
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Videos',
          description:
            "Typically, video starts <b>automatically</b><br><br>However, on iOS, it will only autoplay upon any prior tap on the page ('Next' button doesn't count). If video doesn't autoplay, user will see preview and pretty animation, inviting them to tap to play the video",
          button: 'Next',
        },

        // "everything is customizable" slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Everything is customizable',
          description: '',
          textAlign: 'center',
          list: [
            '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
            'Button text and actions (look down)',
            'Use our carefully crafted <b>presets</b> or easily create your own',
          ],
          button: 'Super-Duper Next',
        },

        // slide with other features
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Some other features:',
          description: '',
          list: [
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
            "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
          ],
          button: 'Next',
        },

        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'But onboarding slides are not enough...',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
