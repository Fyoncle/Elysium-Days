// @ts-check
import catppuccin from "@catppuccin/starlight";
import { defineConfig } from "astro/config";
import Icons from "starlight-plugin-icons";
import UnoCSS from "unocss/astro";
// https://astro.build/config

export default defineConfig({
  site: "https://fyoncle.github.io",
  base: "/Elysium-Days",
  integrations: [
    UnoCSS(),
    Icons({
      sidebar: true,
      extractSafelist: true,
      starlight: {
        title: "Elysium Days Wiki",
        head: [
          {
            tag: "meta",
            attrs: {
              property: "og:image",
              content: "https://elysium-days-wiki.netlify.app/banner.png",
            },
          },
          {
            tag: "meta",
            attrs: { name: "theme-color", content: "#fde405" },
          },
        ],
        customCss: ["./src/styles/custom.css"],
        plugins: [
          catppuccin({
            dark: { flavor: "mocha", accent: "mauve" },
            light: { flavor: "latte", accent: "mauve" },
          }),
        ],
        logo: {
          src: "./src/assets/logo.png",
        },
        components: {
          SocialIcons: "./src/components/SocialIcons.astro",
        },
        social: [
          {
            icon: "github",
            label: "GitHub",
            href: "https://github.com/Fyoncle/Elysium-Days",
          },
          {
            icon: "discord",
            label: "Discord",
            href: "https://discord.gg/WFpDr7zY8Z",
          },
        ],
        sidebar: [
          {
            label: "Getting Started",
            items: [
              {
                icon: "i-basil:explore-solid",
                label: "Home",
                slug: "Elysium-Days/gettingstarted/home",
              },
              {
                icon: "i-basil:pin-solid",
                label: "Frequently Asked Questions",
                slug: "Elysium-Days/gettingstarted/faq",
              },
            ],
          },
          {
            label: "How To Install",
            items: [
              {
                icon: "i-basil:download-solid",
                label: "Modpack Installation",
                slug: "Elysium-Days/howtoinstall/modpackinstallation",
              },
              {
                icon: "i-basil:server-solid",
                label: "Server Installation",
                slug: "Elysium-Days/howtoinstall/serverinstallation",
              },
            ],
          },
          {
            label: "Guides",
            items: [
              {
                icon: "i-basil:info-rect-solid",
                label: "Common Issues",
                slug: "Elysium-Days/guides/commonissues",
              },
              {
                icon: "i-basil:save-solid",
                label: "Memory Allocation",
                slug: "Elysium-Days/guides/memoryallocation",
              },
              {
                icon: "i-basil:user-plus-solid",
                label: "Playing Multiplayer",
                slug: "Elysium-Days/guides/playingmultiplayer",
              },
              {
                icon: "i-basil:add-solid",
                label: "Recommended Tweaks",
                slug: "Elysium-Days/guides/recommendedtweaks",
              },
              {
                icon: "i-basil:heart-solid",
                label: "Trinkets",
                slug: "Elysium-Days/guides/trinkets",
              },
            ],
          },
        ],
      },
    }),
  ],
});
