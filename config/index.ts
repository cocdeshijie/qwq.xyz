import { BlogConfig } from "@/config/type";
import { FaGithub, FaBilibili } from "react-icons/fa6";
import { BsSteam, BsTelegram, BsDiscord, BsTencentQq } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const { createElement } = require("react");
const colors = require("tailwindcss/colors");


/**
 * Configure file for the blog.
 *
 */

export const blogConfig: BlogConfig = {
    url: 'https://qwq.xyz',
    title: "cocdeshijieのBlog",
    description: "qwq",
    author: "cocdeshijie",
    typewriter: "誰でも大好き!",
    articles_per_load: 6,

    navigation: [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "All Articles",
            href: "/articles"
        },
        {
            title: "Anime List",
            href: "/anime-list"
        },

        {
            title: "About Me",
            href: "/about-me"
        },
    ],

    header: {
        option: "FloatingHeader",
    },

    background_image: {
        option: "APIBackgroundImage",
        settings: {
            url: "https://www.loliapi.com/acg/pc/",
            filter: "grid"
        }
    },

    hero: {
        option: "IconHero",
        settings: {
            icon_path: "/cocdeshijie.gif"
        }
    },

    header_logo: {
        option: "TextLogo",
        settings: {
            text_front: "cocdeshijie",
            text_middle: "の",
            text_end: "Blog",
            text_bottom: "qwq~"
        }
    },

    social: [
        {
            title: "GitHub",
            icon: createElement(FaGithub),
            href: "https://github.com/cocedshijie"
        },
        {
            title: "Bilibili",
            icon: createElement(FaBilibili),
            href: "https://space.bilibili.com/60559166"
        },
        {
            title: "Steam",
            icon: createElement(BsSteam),
            href: "https://steamcommunity.com/id/cocdeshijie"
        },
        {
            title: "Telegram",
            icon: createElement(BsTelegram),
            href: "https://telegram.me/cocdeshijie"
        },
        {
            title: "Twitter",
            icon: createElement(AiFillTwitterCircle),
            href: "https://twitter.com/cocdeshijie"
        },
        {
            title: "Discord",
            icon: createElement(BsDiscord),
            href: "https://discordapp.com/channels/@me/390338482951815178/"
        },
        {
            title: "Tencent QQ",
            icon: createElement(BsTencentQq),
            href: "tencent://message/?uin=2049302246"
        }
    ],

    colors: {
        theme_color: colors.pink[500]
    },

    footer: "© cocdeshijie. All rights reserved.",

    comment: {
        option: "GiscusComment",
        settings: {
            repo: "cocdeshijie/qwq.xyz",
            repo_id: "R_kgDOJ4T77A",
            category: "Comments",
            category_id: "DIC_kwDOJ4T77M4CXyVs",
            mapping: "url",
            input_position: "top",
            language: "en"
        }
    }
}
