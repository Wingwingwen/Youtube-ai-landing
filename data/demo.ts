import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "tubeGPT",
      avatar: {
        src: "/imgs/logo.png",
        title: "tubeGPT",
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
        title: "Login",
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
        title: "Get start",
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
        title: "What is tubeGPT",
        description:
          "tubeGPT is an innovative AI tool that transforms YouTube content creation through automation and deep insights.",
        image: {
          src: "/imgs/section1.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "Landing Page Generator",
            description:
              "Pagen can help to generate landing page quickly from your idea",
          },
          {
            title: "Page Content Generator",
            description:
              "Pagen can help to Generate high-quality page content with AI",
          },
          {
            title: "Variety Templates",
            description:
              "Pagen has multiple built-in page templates to make landing page looks great",
          },
        ],
      },
      {
        name: "why",
        title: "Why Choose tubeGPT",
        description:
          "Because most youtubers don't know what kind of video title and description is going to get 100k views, or only have a vague inspiration. Now all it takes is a link or inspirational vocabulary to get a complete professional youtube video title, description, and video outline!",
        image: {
          src: "/imgs/section2.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "Ship Fast",
            description: "Create landing page in seconds",
          },
          {
            title: "Easy to use",
            description: "Just need a product name from your idea",
          },
          {
            title: "AI Powered",
            description: "Generate high-quality page content with AI",
          },
        ],
      },
      {
        name: "how",
        title: "How to Use Pagen",
        description:
          "Follow these simple steps to leverage tubeGPT for your YouTube success.",
        image: {
          src: "/imgs/section3.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. Describe your Idea",
            description:
              "Give a target video url or your idea .",
          },
          {
            title: "2. Choose a Idea",
            description:
              "Select from a variety of professionally idea that suit your needs.",
          },
          {
            title: "3. Check the details and generate your Youtube video",
            description:
              "Use our AI tools to personalize your Youtube video title , description , tags and Video Outline",
          },
        ],
        buttons: [
          {
            title: "Boost your channel now 👉",
            url: "https://pagen.so/landing-page-generator",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "Make a Youtube video with AI in 5 Minutes",
    description:
      "The easiest way to generate Youtube content and boost your channel",
    items: [
      {
        title: "AI-Powered Design",
        description:
          "Harness the power of AI to automatically generate beautiful and responsive landing page designs tailored to your brand and target audience.",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "Customizable Templates",
        description:
          "Choose from a wide range of customizable templates that fit your brand's style and message.",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "SEO Optimization",
        description:
          "Built-in SEO tools to help your landing pages rank higher in search engines and attract more visitors.",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "Analytics Integration",
        description:
          "Track the performance of your landing pages with integrated analytics tools to optimize your campaigns.",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
      {
        title: "Mobile Responsiveness",
        description:
          "All landing pages created with Pagen are fully responsive, ensuring a seamless experience on any device.",
        avatar: {
          src: "/imgs/icons/5.svg",
        },
      },
      {
        title: "User-Friendly Interface",
        description:
          "An intuitive drag-and-drop interface that makes it easy for anyone to create stunning landing pages without any coding skills.",
        avatar: {
          src: "/imgs/icons/6.svg",
        },
      },
    ],
  },
  cta: {
    title: "Grow your channel faster!",
    description: "Start your journey to YouTube success today!",
    buttons: [
      {
        title: "Try Now",
        url: "https://pagen.so/landing-page-generator",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "What Users Say About Pagen",
    description:
      "Hear from our satisfied users who have transformed their landing page creation process.",
    items: [
      {
        name: "Mike Jordan",
        title: "Full-stack Developer",
        description:
          "I love this tool so much, it's awesome! Pagen has made my landing page creation process so much easier.",
        avatar: {
          src: "/imgs/user/1.png",
        },
      },
      {
        name: "Sarah Lee",
        title: "Marketing Manager",
        description:
          "Pagen's AI technology is a game changer. I can create landing pages in minutes!",
        avatar: {
          src: "/imgs/user/2.png",
        },
      },
      {
        name: "Tom Smith",
        title: "Entrepreneur",
        description:
          "The templates are beautiful and customizable. I highly recommend Pagen!",
        avatar: {
          src: "/imgs/user/3.png",
        },
      },
      {
        name: "Emily Davis",
        title: "Content Creator",
        description:
          "Pagen has helped me increase my conversion rates significantly. It's a must-have tool!",
        avatar: {
          src: "/imgs/user/4.png",
        },
      },
      {
        name: "John Doe",
        title: "Business Owner",
        description:
          "I was able to create a professional landing page without any design skills. Thank you, Pagen!",
        avatar: {
          src: "/imgs/user/5.png",
        },
      },
      {
        name: "Lisa White",
        title: "Freelancer",
        description:
          "The user interface is so easy to navigate. I love using Pagen for my projects!",
        avatar: {
          src: "/imgs/user/6.png",
        },
      },
    ],
  },
  faq: {
    title: "FAQ",
    description: "Find answers to common questions about using Pagen.",
    items: [
      {
        title: "What is tubeGPT?",
        description:
          "tubeGPT is an online AI Youtube creativity tool that allows you to analytics target channel and genaerate better content using a user-friendly interface.",
      },
      {
        title: "How do I use a tubeGPT?",
        description:
          "Using tubeGPT is simple and straightforward. First enter your target video URL or your creative. Then, choose one of the dozens of creative ideas generated at once to see the title, description, video outline, and multiple AI-generated video covers. Once you're happy with the idea, you can start creating your Youtube videos quickly and become a breakout account fast!",
      },
      {
        title: "Can I use a idea for my business?",
        description:
          "Absolutely! You can confidently use an idea generated by tubeGPT for your business. ",
      },
      {
        title: "Why should I use tubeGPT?",
        description:
          "Because most youtubers don't know what kind of video title and description is going to get 100k views, or only have a vague inspiration. Now all it takes is a link or inspirational vocabulary to get a complete professional youtube video title, description, and video outline!",
      },
    ],
  },
  footer: {
    brand: {
      title: "tubeGPT",
      description:
        "tubeGPT is an AI-powered YouTube tool designed to optimize your video content, enhance audience engagement, and drive effective social media marketing.",
      avatar: {
        src: "/imgs/logo.png",
        title: "tubGPT",
      },
      url: "https://pagen.so",
    },
    badge_disabled: false,
    copyright: "© 2024 • tubeGPT All rights reserved.",
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
          title: "AI Youtuber tools",
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
            {
              title: "Tips For How To Get More YouTube Views.",
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
