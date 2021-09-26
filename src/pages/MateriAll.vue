<template>
    <q-page class="q-pr-md q-pl-md q-pa-md">
        <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
            <q-card class="my-card q-pa-md">
                <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
                    <q-breadcrumbs-el label="Main Menu" icon="widgets" />
                    <q-breadcrumbs-el label="Materi belajar" icon="biotech" />
                    <q-breadcrumbs-el label="Semua materi" icon="document_scanner" />
                </q-breadcrumbs>
            </q-card>

            <div class="row q-mt-lg">

                <div class="row col-12 q-mt-md">
                    <q-card class="my-card col" flat bordered>
                        <q-card-section horizontal>
                            <q-card-section class="col-12 q-pa-sm">

                            <div class="q-gutter-md row">
                                <div class="col">
                                    <q-card class="my-card" flat bordered>
                                        <q-card-section horizontal>
                                            <q-card-section class="q-pt-xs">
                                            <div class="text-overline">Overline</div>
                                            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            </q-card-section>

                                            <q-card-section class="col-5 flex flex-center">
                                            <q-img
                                                class="rounded-borders"
                                                src="https://cdn.quasar.dev/img/parallax2.jpg"
                                            />
                                            </q-card-section>
                                        </q-card-section>

                                        <q-separator />

                                        <q-card-actions>
                                            <q-btn flat round icon="event" />
                                            <q-btn flat>
                                            7:30PM
                                            </q-btn>
                                            <q-btn flat color="primary" clickable :to="{ name: 'materi_detail' }">
                                            Baca Selengkapnya
                                            </q-btn>
                                        </q-card-actions>
                                    </q-card>
                                </div>
                                <div class="col">
                                    <q-card class="my-card" flat bordered>
                                        <q-card-section horizontal>
                                            <q-card-section class="q-pt-xs">
                                            <div class="text-overline">Overline</div>
                                            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            </q-card-section>

                                            <q-card-section class="col-5 flex flex-center">
                                            <q-img
                                                class="rounded-borders"
                                                src="https://cdn.quasar.dev/img/parallax2.jpg"
                                            />
                                            </q-card-section>
                                        </q-card-section>

                                        <q-separator />

                                        <q-card-actions>
                                            <q-btn flat round icon="event" />
                                            <q-btn flat>
                                            7:30PM
                                            </q-btn>
                                            <q-btn flat color="primary" clickable :to="{ name: 'materi_detail' }">
                                            Baca Selengkapnya
                                            </q-btn>
                                        </q-card-actions>
                                    </q-card>
                                </div>
                                <div class="col">
                                    <q-card class="my-card" flat bordered>
                                        <q-card-section horizontal>
                                            <q-card-section class="q-pt-xs">
                                            <div class="text-overline">Overline</div>
                                            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            </q-card-section>

                                            <q-card-section class="col-5 flex flex-center">
                                            <q-img
                                                class="rounded-borders"
                                                src="https://cdn.quasar.dev/img/parallax2.jpg"
                                            />
                                            </q-card-section>
                                        </q-card-section>

                                        <q-separator />

                                        <q-card-actions>
                                            <q-btn flat round icon="event" />
                                            <q-btn flat>
                                            7:30PM
                                            </q-btn>
                                            <q-btn flat color="primary" clickable :to="{ name: 'materi_detail' }">
                                            Baca Selengkapnya
                                            </q-btn>
                                        </q-card-actions>
                                    </q-card>
                                </div>
                                <div class="col">
                                    <q-card class="my-card" flat bordered>
                                        <q-card-section horizontal>
                                            <q-card-section class="q-pt-xs">
                                            <div class="text-overline">Overline</div>
                                            <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                                            <div class="text-caption text-grey">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </div>
                                            </q-card-section>

                                            <q-card-section class="col-5 flex flex-center">
                                            <q-img
                                                class="rounded-borders"
                                                src="https://cdn.quasar.dev/img/parallax2.jpg"
                                            />
                                            </q-card-section>
                                        </q-card-section>

                                        <q-separator />

                                        <q-card-actions>
                                            <q-btn flat round icon="event" />
                                            <q-btn flat>
                                            7:30PM
                                            </q-btn>
                                            <q-btn flat color="primary" clickable :to="{ name: 'materi_detail' }">
                                            Baca Selengkapnya
                                            </q-btn>
                                        </q-card-actions>
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
