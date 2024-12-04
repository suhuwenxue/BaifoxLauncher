import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import AutoImport from 'unplugin-auto-import/rspack'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/rspack'

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    base: '/',
	  host: "0.0.0.0",
	  port: 24680,
  },
  html: {
    title({ entryName }) {
      const titles = {
        main: 'Baifox Launcher',
        worker: 'Baifox Launcher Worker',
        plugin: 'Baifox Launcher Plugins',
        settings: 'Baifox Launcher Settings',
        about: 'Baifox Launcher About'
      };
      return titles[entryName];
    },
    favicon: './public/assets/AppIcon.png',
    appIcon: {
      name: 'My Website',
      icons: [
        { src: './public/assets/AppIcon-192x192.png', size: 192 },
        { src: './public/assets/AppIcon-512x512.png', size: 512 },
      ],
    },
    meta: {
      description: 'Baifox Launcher',
    },
    tags: [
      // { tag: 'script', attrs: { src: 'https://cdn.example.com/my-script.js' } },
    ],
  },
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          dts: 'src/types/auto-imports.d.ts',
          dirs: ['src/composables', 'src/utils'],
          imports: [
            'vue',
            'vue-router',
            'pinia',
            {
              'naive-ui': [
                'useDialog',
                'useMessage',
                'useNotification',
                'useLoadingBar'
              ]
            }
          ]
        }),
        Components({
          // allow auto load markdown components under `./src/components/`
          extensions: ['vue', 'md'],
          // allow auto import and register components used in markdown
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          dirs: ['src/components/', 'src/layout/', 'src/views', 'src/assets'],
          dts: 'src/types/components.d.ts',
          resolvers: [NaiveUiResolver()]
        })
      ],
    },
  },
});
