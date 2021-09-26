<template>
    <q-page class="q-pr-md q-pl-md q-pa-md">
        <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
            <q-card class="my-card q-pa-md">
                <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
                    <q-breadcrumbs-el label="Main Menu" icon="widgets" />
                    <q-breadcrumbs-el label="Materi belajar" icon="biotech" />
                    <q-breadcrumbs-el label="Materi" icon="document_scanner" />
                </q-breadcrumbs>
            </q-card>

            <div class="row q-mt-lg">
                <div class="col q-mt-md">
                    <q-card class="my-card">
                        <q-card-section class="bg-grey-2 text-blue-10">
                            <div class="text-h6">Judul materi pembelajaran</div>
                            <div class="text-caption">posted : Senin, 01 Januari 2021 | Administrator</div>
                        </q-card-section>

                        <q-separator />

                        <q-card-actions class="q-pa-lg">
                            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height:250px; width:500px" class="q-mb-md" />
                            <q-label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-label>
                            <q-label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-label>
                            <q-label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-label>
                            <q-label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-label>
                            <q-video src="https://www.youtube.com/embed/lz9eGlQ8pHQ" style="width:550px; height:350px" class="q-mt-md" />
                        </q-card-actions>
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
