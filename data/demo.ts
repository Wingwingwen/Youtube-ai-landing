import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "AI播客生成器",
      avatar: {
        src: "/imgs/logo.png",
        title: "AI播客生成器",
      },
      url: "/",
    },
    nav: {
      items: [
        // {
        //   title: "Pricing",
        //   url: "https://pagen.so/pricing",
        //   target: "_blank",
        // },
        // {
        //   title: "Youtube title generator",
        //   url: "https://pagen.so/landing-page-generator",
        //   target: "_blank",
        // },
        // {
        //   title: "Youtube content generators",
        //   url: "https://pagen.so/showcases",
        //   target: "_blank",
        // },
        // {
        //   title: "Blog",
        //   url: "https://pagen.so/templates",
        //   target: "_blank",
        // },
      ],
    },
    buttons: [
      {
        title: "登录",
        url: "https://pagen.so/api/auth/signin?callbackUrl=%2Flanding-page-generator",
        target: "_blank",
      },
    ],
  },
  hero: {
    title: "AI博客生成器",
    description:
      "一个想法AI生成完整的播客.",
    // image: {
    //   src: "/imgs/hero.png",
    // },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "开始生成AI播客",
        url: "https://pagen.so/landing-page-generator",
        target: "_blank",
      },
      // {
      //   title: "Vote on ProductHunt",
      //   url: "https://www.producthunt.com/posts/pagen",
      //   target: "_blank",
      //   theme: "outline",
      // },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "什么是AI播客生成器",
        description:
          "AI播客生成器是一个强大的工具，利用先进的AI技术将您的想法在10s内制作出专业质量的AI播客",
        image: {
          src: "/imgs/section1.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "AI加持",
            description:
              "强大的AI播客生成器，轻松将文本和想法转换为专业播客，帮助内容创作者提升生产力。",
          },
          {
            title: "精美的音频",
            description:
              "一键将您的内容或想法转换为精美的完整AI播客",
          },
          {
            title: "革新的创作生成工具",
            description:
              "您需要的只是点击",
          },
        ],
      },
      {
        name: "why",
        title: "为什么选择AI播客生成器",
        description:
          "轻松提高播客生产力和点击率",
        image: {
          src: "/imgs/section2.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "加速您的创作过程",
            description: "一个想法或者一篇文章都可以立刻获得超高传播都的播客脚本及音频",
          },
          {
            title: "结合AI、观看次数预测算法和播客最佳实践",
            description: "通过先进的算法和直观的界面，您可以在几分钟内制作出专业质量的AI播客",
          },
          {
            title: "让您的内容获得应有的关注的标题",
            description: "不再让您的创作和期望落空",
          },
        ],
      },
      {
        name: "how",
        title: "如何使用AI播客生成器",
        description:
          "用一个想法来开始您的第一个AI播客吧！",
        image: {
          src: "/imgs/section3.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. 输入您的想法或者文本内容",
            description:
              "为您的AI播客选择希望创作的主题内容。",
          },
          {
            title: "2. 生成完整的AI播客",
            description:
              "等待数秒就可以获得超高质量的完整AI播客了",
          },
          {
            title: "3. 发布到您的平台或者使用我们的一键发布",
            description:
              "现在让您的创意来冲击用户的思想空间吧！",
          },
        ],
        buttons: [
          {
            title: "创作您的第一个播客 👉",
            url: "https://pagen.so/landing-page-generator",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "用AI驱动的播客生成器革新您的生产力",
    description:
      "我们的AI播客生成器旨在通过创建引人入胜、内容丰富的播客来改变您的内容创作，这些播客能吸引听众并提升在线影响力。体验结合自然语言处理与细致内容策略的尖端技术，重新定义您创作播客的方式。",
    items: [
      {
        title: "文本转化播客创作",
        description:
          "将您的书面内容或想法迅速转化为超高质量的AI播客。加持了GPT4O及Claude的超强算力帮助您生成吸引人的播客j脚本及稿件，提升创作效率，完美呈现您的思想。",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "openAI的语音能力",
        description:
          "通过多种逼真的AI语音选择，为播客配音，让您的音频内容更具个性和吸引力。不论是温柔的叙述还是激情澎湃的采访，AI播客生成器都能满足您的需求。",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "不浪费任何灵感和想法",
        description:
          "不要错过任何你的灵感和想法，将它放到AI播客生成器里变成超高质量的播客吧",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "超强的关键词洞悉",
        description:
          "使用我们先进的关键词工具来主导您的细分市场。发现热门关键词，了解其得分，并找到相关术语来提高您的知名度。利用这些数据来创建吸引目标受众并最大化您的覆盖面的内容",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
      {
        title: "革新级别的效率和准确性",
        description:
          "体验无与伦比的创作效率和速度，节省宝贵的时间。",
        avatar: {
          src: "/imgs/icons/5.svg",
        },
      },
      {
        title: "简洁方便的操作界面",
        description:
          "简单编辑的操作界面，从输入想法到输出完整AI播客只需点击一个按钮.",
        avatar: {
          src: "/imgs/icons/6.svg",
        },
      },
    ],
  },
  cta: {
    title: "让所有人都可以一键创作自己的AI播客",
    description: "让您的想法更快更简单地被所有人听到!",
    buttons: [
      {
        title: "Try Now",
        url: "https://pagen.so/landing-page-generator",
        target: "_blank",
      },
    ],
  },
  // testimonial: {
  //   title: "What Users Say About Pagen",
  //   description:
  //     "Hear from our satisfied users who have transformed their landing page creation process.",
  //   items: [
  //     {
  //       name: "Mike Jordan",
  //       title: "Full-stack Developer",
  //       description:
  //         "I love this tool so much, it's awesome! Pagen has made my landing page creation process so much easier.",
  //       avatar: {
  //         src: "/imgs/user/1.png",
  //       },
  //     },
  //     {
  //       name: "Sarah Lee",
  //       title: "Marketing Manager",
  //       description:
  //         "Pagen's AI technology is a game changer. I can create landing pages in minutes!",
  //       avatar: {
  //         src: "/imgs/user/2.png",
  //       },
  //     },
  //     {
  //       name: "Tom Smith",
  //       title: "Entrepreneur",
  //       description:
  //         "The templates are beautiful and customizable. I highly recommend Pagen!",
  //       avatar: {
  //         src: "/imgs/user/3.png",
  //       },
  //     },
  //     {
  //       name: "Emily Davis",
  //       title: "Content Creator",
  //       description:
  //         "Pagen has helped me increase my conversion rates significantly. It's a must-have tool!",
  //       avatar: {
  //         src: "/imgs/user/4.png",
  //       },
  //     },
  //     {
  //       name: "John Doe",
  //       title: "Business Owner",
  //       description:
  //         "I was able to create a professional landing page without any design skills. Thank you, Pagen!",
  //       avatar: {
  //         src: "/imgs/user/5.png",
  //       },
  //     },
  //     {
  //       name: "Lisa White",
  //       title: "Freelancer",
  //       description:
  //         "The user interface is so easy to navigate. I love using Pagen for my projects!",
  //       avatar: {
  //         src: "/imgs/user/6.png",
  //       },
  //     },
  //   ],
  // },
  faq: {
    title: "FAQ",
    description: "Find answers to common questions about using Pagen.",
    items: [
      {
        title: "什么是AI播客生成器",
        description:
          "是一款AI播客生成器，它可以帮助您把文字、网址或者您自己的想法轻松地转换成高质量的播客。只需要几分钟，您就可以拥有一个专业的播客",
      },
      {
        title: "我可以用AI播客生成器从哪些内容创建播客？",
        description:
          "您可以使用AI播客生成器从各种内容创建播客，包括任何网页的URL、您自己写的文本或者自定义的主题。这让创建播客变得非常灵活和方便。",
      },
      {
        title: "AI播客生成器的使用难度大吗",
        description:
          "非常简单！AI播客生成器的界面简单易用，任何人都可以轻松上手。无论您是初学者还是有经验的内容创作者，使用AI播客生成器快速制作出专业质量的播客就是我们的追求。 ",
      },
      {
        title: "提供免费试用吗？",
        description:
          "是的，目前提供免费试用，您可以在体验之前先试用一下软件，看看它是否符合您的需求。进入网站之后，您可以找到相关的免费试用链接。",
      },
    ],
  },
  footer: {
    brand: {
      title: "AI播客生成器",
      description:
        "AI播客生成器是一款AI播客生成器，通过简单的文件或文本输入，快速创建高质量播客，让所有内容创作者快速制作出专业质量的播客就是我们的追求者。",
      avatar: {
        src: "/imgs/logo.png",
        title: "tubGPT",
      },
      url: "https://pagen.so",
    },
    badge_disabled: false,
    copyright: "© 2024 • PodcastAI All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://x.com/aipagen",
          target: "_blank",
        },
        {
          title: "ProductHunt",
          url: "https://www.producthunt.com/posts/pagen",
          target: "_blank",
        },
        {
          title: "Discord",
          url: "https://discord.gg/ZUSutBR4Pv",
          target: "_blank",
        },
        {
          title: "Telegram",
          url: "https://t.me/+PCy10CEWOvA3Zjdl",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@pagen.so",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "AI播客创作者工具",
          children: [
            {
              title: "Sider",
              url: "https://sider.ai/",
              target: "_blank",
            },
            {
              title: "Grammarl",
              url: "https://www.grammarly.com/",
              target: "_blank",
            },
            {
              title: "AI tools directory",
              url: "https://www.toolify.ai/",
              target: "_blank",
            },
          ],
        },
        {
          title: "Services",
          children: [
            {
              title: "Privacy Policy",
              url: "/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/terms-of-service",
            },
          ],
        },
      ],
    },
  },
};
