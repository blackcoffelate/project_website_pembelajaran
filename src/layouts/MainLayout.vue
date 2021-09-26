<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-blue-10">
      <q-toolbar>
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu" />
        <q-toolbar-title style="font-family:customfont" class="text-h5">Educa</q-toolbar-title>
          <q-btn-dropdown flat label="Administrator" icon="manage_accounts" left stretch>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-btn outline color="primary" label="Profile" clickable size="sm" icon="manage_accounts" left />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="statics/img/icons.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Administrator</div>

                <q-btn
                  color="danger"
                  label="Logout"
                  flat
                  size="sm"
                  v-close-popup
                  @click="confirm = true"
                />

              </div>
            </div>

          </q-btn-dropdown>
        </q-toolbar>
    </q-header>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="sentiment_very_dissatisfied" text-color="primary" />
          <span class="q-ml-sm">Apakah anda yakin untuk keluar ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat @click="logout()" label="Logout" color="primary"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="300"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable :to="{ name: 'dashboard' }" v-ripple class="text-blue-10">

              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item>

              <q-item-section>
                MAIN MENU
              </q-item-section>

            </q-item>

            <q-list class="rounded-borders">
              <q-expansion-item
                expand-icon-toggle
                expand-separator
                icon="biotech"
                label="Materi Belajar"
                class="text-blue-10"
              >
                <q-card>
                  <q-card-section>
                    <q-item :to="{ name: 'materi_all' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="document_scanner" class="text-blue-10" />
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Semua materi
                      </q-item-section>
                    </q-item>

                    <q-item :to="{ name: 'materi_video_all' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="movie_filter" class="text-blue-10"/>
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Semua materi video
                      </q-item-section>
                    </q-item>

                    <q-item :to="{ name: 'materi_add' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="library_add" class="text-blue-10" />
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Tambah materi
                      </q-item-section>
                    </q-item>

                    <q-item :to="{ name: 'materi_video_add' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="shop_two" class="text-blue-10" />
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Tambah materi video
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-icon-toggle
                expand-separator
                icon="auto_fix_high"
                label="Ujian"
                class="text-blue-10"
              >
                <q-card>
                  <q-card-section>
                    <q-item :to="{ name: 'ujian_all' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="collections_bookmark" class="text-blue-10" />
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Semua ujian
                      </q-item-section>
                    </q-item>

                    <q-item :to="{ name: 'soal_all' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="quiz" class="text-blue-10"/>
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Semua soal
                      </q-item-section>
                    </q-item>

                    <q-item :to="{ name: 'nilai' }" clickable v-ripple>
                      <q-item-section avatar>
                        <q-icon name="military_tech" class="text-blue-10" />
                      </q-item-section>

                      <q-item-section class="text-blue-10">
                        Nilai
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-item>

              <q-item-section>
                EXTRAS
              </q-item-section>

              </q-item>

              <q-item @click="confirm = true" clickable v-ripple class="text-blue-10">
                <q-item-section avatar>
                  <q-icon name="sentiment_very_dissatisfied" />
                </q-item-section>

                <q-item-section>
                  Sign Out
                </q-item-section>
              </q-item>

            </q-list>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="statics/img/bg-header.jpg" style="height: 150px;">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="statics/img/icons.png">
            </q-avatar>
            <div class="text-weight-bold">Administartor</div>
            <div>@admin_educa</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-3">
        <q-toolbar>
          <q-toolbar-title class="text-h6 text-body1 text-blue-10" style="font-size:13px">Copyright 2021</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
// import { LocalStorage } from 'quasar'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {

    }
  }
}
</script>
