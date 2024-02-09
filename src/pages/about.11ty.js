class About {
    data() {

        var globes = ["americas", "asia-australia", "central-south-asia", "europe-africa"]
        var globe = globes[Math.floor(Math.random() * globes.length)]

        return {
            "permalink": "/about",
            "layout": "default.liquid",
            "title": "About Mini",
            "title_mini": "de Mini",
            "description": "Mini was created to be a more suitable international language than English. It has succeeded in this endeavour, and is better for the reasons listed below.",
            "icon": false,
            "noScroll": false,
            "items": [
                {
                    "title": "Mini is <i>small</i>",
                    "title_mini": "Mini e <strong>mini</strong>",
                    "description": "Mini's vocabulary only has about 1000 words total, and is split into two parts: <i>Mini Kore</i>, the 120 words that are necessary to speak Mini, and <i>Mini Mundo</i>, the remaining vocabulary that makes Mini easier to talk in.",
                    "button": "View the vocab",
                    "icon": "bi-arrows-collapse",
                    "url": "https://jprogr.github.io/buku-name/"
                },
                {
                    "title": "Mini is <i>consistent</i>",
                    "title_mini": "Mini e <strong>sama-jura</strong>",
                    "description": "Unlike English, in which a lot of the grammar is inconsistent and has exceptions, Mini has simple and easy to grasp grammar with almost no exception.",
                    "button": "Learn Mini",
                    "icon": "bi-check2-all",
                    "url": "/learn"
                },
                {
                    "title": "Mini is <i>easy</i>",
                    "title_mini": "Mini e <strong>fasile</strong>",
                    "description": "While normal languages can take months or even years to learn, you can learn to speak Mini comfortably in a matter of weeks!",
                    "button": "Learn Mini",
                    "icon": "bi-fast-forward",
                    "url": "https://jprogr.github.io/mini-lessons"
                },
                {
                    "title": "Mini is <i>international</i>",
                    "title_mini": "Mini e <strong>ale-mundo</strong>",
                    "description": "While languages like English are peculiar to one nationality, Mini aims to be the language that is not specific to any country, ethnicity, or race. Mini's members are from all over the world, including China, India, Mexico, America, and more!",
                    "button": "Visit the reddit",
                    "icon": "bi-globe-" + globe,
                    "url": "https://www.reddit.com/r/MiniLang/"
                },
                {
                    "title": "Mini is <i>pronouncable</i>",
                    "title_mini": "Mini e <strong>pale-kan</strong>",
                    "description": "English contains many sounds and combinations that may be hard to pronounce for some people. Mini tries to only use letters that most people can pronounce, and words follow a strict consonant-vowel structure for pronouncability.",
                    "button": "Listen",
                    "icon": "bi-megaphone",
                    "url": "https://jprogr.github.io/buku-name"
                }
            ]
        }
    }
}

module.exports = About