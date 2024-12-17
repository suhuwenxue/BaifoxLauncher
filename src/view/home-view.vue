<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home-view',
  setup() {
    return {
      date: '2024-12-17 16:35:00'
    }
  }
});
</script>

<template lang="pug">
  n-layout(embedded content-style="padding: 0;"
    style="height: 100%;width: 100%;")
    n-h5 {{ $t('main.home.header.title') }}
    n-grid(:cols="8" y-gap="6")
      n-gi(:span="8")
        n-card(size="small" hoverable)
          template(#header) {{ $t('main.home.card.notice_board.title') }}
          template(#header-extra)
            n-button-group
              n-button(size="small") {{ $t('main.home.card.notice_board.header_extra.refresh_notice_board') }}
              n-button(size="small") {{ $t('main.home.card.notice_board.header_extra.notice_detail') }}
              n-button(size="small") {{ $t('main.home.card.notice_board.header_extra.hide_notice_board') }}

          template(#default)
            n-ellipsis(expand-trigger="click" line-clamp="1" :tooltip="false") xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          template(#footer)
            n-p {{ $t('main.home.card.notice_board.footer.notice_date') + ' '+ date  }}

      n-gi(:span="8")
        n-card(size="small" hoverable)
          template(#header) {{ $t('main.home.card.account.title') }}
          template(#header-extra)
            n-button-group
              n-button(size="small") {{ $t('main.home.card.account.header_extra.edit_account') }}
              n-button(size="small") {{ $t('main.home.card.account.header_extra.refresh_account') }}

          template(#default)
            n-grid(:cols="4" x-gap="2" y-gap="2")
              n-gi(:span="1")
                n-avatar(size="small"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                )

      n-gi(:span="8")
        n-card(size="small" hoverable)
          template(#header) {{ $t('main.home.card.game.title') }}
          template(#header-extra)
            n-button-group
              n-button(size="small") {{ $t('main.home.card.game.header_extra.launch_game') }}
              n-button(size="small") {{ $t('main.home.card.game.header_extra.back_to_archive') }}
              n-button(size="small") {{ $t('main.home.card.game.header_extra.stop_game') }}
              n-button(size="small") {{ $t('main.home.card.game.header_extra.refresh_game') }}

          template(#default)
            n-grid(:cols="4" x-gap="2" y-gap="2")
              n-gi(:span="1")

      n-gi(:span="8")
        n-card(size="small" hoverable)
          template(#header) {{ $t('main.home.card.system.title') }}
          template(#header-extra)
            n-button(size="small") {{ $t('main.home.card.system.header_extra.refresh_system') }}

          template(#default)
            n-grid(:cols="4" x-gap="2" y-gap="2")
              n-gi(:span="1")

      n-gi(:span="8")
        n-card(size="small" hoverable)
          template(#header) {{ $t('main.home.card.resource.title') }}
          template(#header-extra)
            n-button-group
              n-button(size="small") {{ $t('main.home.card.resource.header_extra.game_folder') }}
              n-button(size="small") {{ $t('main.home.card.resource.header_extra.refresh_resource') }}

          template(#default)
            n-grid(:cols="4" x-gap="2" y-gap="2")
              n-gi(:span="1")

      n-gi(:span="8")
        n-card(size="small" hoverable)
          template(#header) {{ $t('main.home.card.launcher.title') }}
          template(#header-extra)
            n-button-group
              n-button(size="small") {{ $t('main.home.card.launcher.header_extra.check_for_updates') }}
              n-button(size="small") {{ $t('main.home.card.launcher.header_extra.hidden') }}

          template(#default)
            n-grid(:cols="4" x-gap="2" y-gap="2")
              n-gi(:span="1")

</template>

<style scoped>

</style>