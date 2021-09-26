<template>
    <q-page class="q-pr-md q-pl-md q-pa-md">
        <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
            <q-card class="my-card q-pa-md">
                <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
                    <q-breadcrumbs-el label="Main Menu" icon="widgets" />
                    <q-breadcrumbs-el label="Materi belajar" icon="biotech" />
                    <q-breadcrumbs-el label="Semua materi video" icon="movie_filter" />
                </q-breadcrumbs>
            </q-card>

            <div class="row q-mt-lg">

                <div class="row col-12 q-mt-md">
                    <q-card class="my-card col" flat bordered>
                        <q-card-section horizontal>
                            <q-card-section class="col-12 q-pa-sm">

                            <div class="q-gutter-md row">
                                <div class="col">
                                    <q-card class="my-card">
                                        <q-video src="https://www.youtube.com/embed/Jbt9HbxQdFo" />

                                        <q-card-section>
                                            <div class="text-h6">Sample materi</div>
                                            <div class="text-subtitle2">by Administrator</div>
                                        </q-card-section>

                                        <q-card-section class="q-pt-none">
                                            Sample deskripsi materi video.
                                        </q-card-section>
                                    </q-card>
                                </div>
                                <div class="col">
                                    <q-card class="my-card">
                                        <q-video src="https://www.youtube.com/embed/D29JlSh89Tk" />

                                        <q-card-section>
                                            <div class="text-h6">Sample materi</div>
                                            <div class="text-subtitle2">by Administrator</div>
                                        </q-card-section>

                                        <q-card-section class="q-pt-none">
                                            Sample deskripsi materi video.
                                        </q-card-section>
                                    </q-card>
                                </div>
                                <div class="col">
                                    <q-card class="my-card">
                                        <q-video src="https://www.youtube.com/embed/GGx6lba75gI" />

                                        <q-card-section>
                                            <div class="text-h6">Sample materi</div>
                                            <div class="text-subtitle2">by Administrator</div>
                                        </q-card-section>

                                        <q-card-section class="q-pt-none">
                                            Sample deskripsi materi video.
                                        </q-card-section>
                                    </q-card>
                                </div>
                                <div class="col">
                                    <q-card class="my-card">
                                        <q-video src="https://www.youtube.com/embed/lz9eGlQ8pHQ" />

                                        <q-card-section>
                                            <div class="text-h6">Sample materi</div>
                                            <div class="text-subtitle2">by Administrator</div>
                                        </q-card-section>

                                        <q-card-section class="q-pt-none">
                                            Sample deskripsi materi video.
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>

                            <div class="column q-mt-lg items-center">
                                <q-pagination
                                    v-model="current"
                                    :max="5"
                                    direction-links
                                    outline
                                    color="orange"
                                    active-color="primary"
                                />
                            </div>

                            </q-card-section>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
  </q-page>

</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      current: 3,
      visibles: false,
      filter: null
    }
  }
}
</script>

<style scoped>

</style>
