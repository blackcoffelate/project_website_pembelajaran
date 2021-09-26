<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Materi belajar" icon="biotech" />
          <q-breadcrumbs-el label="Tambah Materi" icon="library_add" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg q-gutter-md">

        <div class="row col-7">
          <q-card class="my-card col" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col q-pa-lg">
                <div class="col">
                  <div class="col-2 q-table__title">Tambah Materi Pembelajaran</div>
                  <p class="text-caption">Form input data materi.</p>
                </div>
                <q-form @submit="onSubmit" @reset="onReset">

                  <div class="row q-gutter-sm">
                    <div class="col">
                      <q-input
                        filled
                        v-model="id_materi"
                        label="Materi ID"
                        lazy-rules
                        dense
                        readonly
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                    </div>
                    <div class="col">
                        <q-input
                        filled
                        v-model="judul"
                        label="Judul materi"
                        lazy-rules
                        dense
                        :rules="[ val => val && val.length > 0 || 'Lengkapi data pelanggan']"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm">
                    <div class="col">
                        <q-input
                        filled
                        v-model="deskripsi"
                        label="Deskripsi materi"
                        lazy-rules
                        dense
                        :rules="[ val => val && val.length > 0 || 'Lengkapi data pelanggan']"
                      />
                    </div>
                    <div class="col">
                      <q-file filled bottom-slots dense v-model="image" label="Thumbnail" >
                        <template v-slot:before>
                          <q-icon name="collections" />
                        </template>
                      </q-file>
                    </div>
                  </div>

                  <q-separator />

                  <div class="row q-gutter-sm q-mt-md q-mb-md">
                    <div class="col">
                      <q-editor
                        v-model="qeditor"
                        :dense="$q.screen.lt.md"
                        :toolbar="[
                            [
                            {
                                label: $q.lang.editor.align,
                                icon: $q.iconSet.editor.align,
                                fixedLabel: true,
                                list: 'only-icons',
                                options: ['left', 'center', 'right', 'justify']
                            },
                            {
                                label: $q.lang.editor.align,
                                icon: $q.iconSet.editor.align,
                                fixedLabel: true,
                                options: ['left', 'center', 'right', 'justify']
                            }
                            ],
                            ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                            ['token', 'hr', 'link', 'custom_btn'],
                            ['print', 'fullscreen', 'handler'],
                            [
                            {
                                label: $q.lang.editor.formatting,
                                icon: $q.iconSet.editor.formatting,
                                list: 'no-icons',
                                options: [
                                'p',
                                'h1',
                                'h2',
                                'h3',
                                'h4',
                                'h5',
                                'h6',
                                'code'
                                ]
                            },
                            {
                                label: $q.lang.editor.fontSize,
                                icon: $q.iconSet.editor.fontSize,
                                fixedLabel: true,
                                fixedIcon: true,
                                list: 'no-icons',
                                options: [
                                'size-1',
                                'size-2',
                                'size-3',
                                'size-4',
                                'size-5',
                                'size-6',
                                'size-7'
                                ]
                            },
                            {
                                label: $q.lang.editor.defaultFont,
                                icon: $q.iconSet.editor.font,
                                fixedIcon: true,
                                list: 'no-icons',
                                options: [
                                'default_font',
                                'arial',
                                'arial_black',
                                'comic_sans',
                                'courier_new',
                                'impact',
                                'lucida_grande',
                                'times_new_roman',
                                'verdana'
                                ]
                            },
                            'removeFormat'
                            ],
                            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                            ['undo', 'redo'],
                            ['viewsource']
                        ]"
                        :fonts="{
                            arial: 'Arial',
                            arial_black: 'Arial Black',
                            comic_sans: 'Comic Sans MS',
                            courier_new: 'Courier New',
                            impact: 'Impact',
                            lucida_grande: 'Lucida Grande',
                            times_new_roman: 'Times New Roman',
                            verdana: 'Verdana'
                        }"
                        />
                    </div>
                  </div>

                  <div>
                    <q-btn label="Submit" outline type="submit" color="green" style="width:150px" />
                    <q-btn label="Reset" type="reset" color="red" outline class="q-ml-sm" style="width:150px" />
                  </div>
                </q-form>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

        <div class="row col fit">
          <q-card class="my-card col" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col q-pa-lg">
                <div class="col">
                  <div class="col-2 q-table__title">Petunjuk penggunaan</div>
                  <p class="text-caption">Cara pengisian form materi.</p>
                </div>

                <div class="row q-gutter-sm items-center">
                  <div class="col">
                    <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" style="height: 250px" />
                  </div>
                  <div class="col">
                    <q-timeline color="secondary">

                      <q-timeline-entry subtitle="Tahap I" side="left">
                        <div>
                          Silahkan masukan judul materi yang ingin di daftarkan.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 2" side="right">
                        <div>
                          Isikan materi sesuai topik yang ingin di bahas.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 3" side="right">
                        <div>
                          Berikan deskripsi serta gambar sebagai penjelas dari setiap materi.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 4" side="right">
                        <div>
                          Tekan tombol submit untuk mendaftarkan materi.
                        </div>
                      </q-timeline-entry>

                    </q-timeline>
                  </div>
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
import Lottie from 'components/lottie'
import * as animationData from 'assets/lottie.json'

export default {
  components: {
    lottie: Lottie
  },
  data () {
    const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
    return {
      qeditor: null,
      inputs: [
        {
          nama_product: '',
          kategori_product: '',
          jenis_product: '',
          harga_jual: '',
          jumlah_penjualan: '',
          total_penjualan: ''
        }
      ],
      id_materi: 'ID-981198',
      options,
      date: null,
      image: null,
      alamat_penagihan: null,
      nomor_telepon: null,
      judul: null,
      deskripsi: null,
      status_penjualan: null,
      options_status: [
        'Lunas', 'Hutang'
      ],
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = options
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = options.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      },
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2
    }
  },
  methods: {
    onBlur (evt) {
      console.log(evt)
    },
    onFocus (evt) {
      console.log(evt)
    },
    onContentDom (evt) {
      console.log(evt)
    },
    onDialogDefinition (evt) {
      console.log(evt)
    },
    onFileUploadRequest (evt) {
      console.log(evt)
    },
    onFileUploadResponse (evt) {
      console.log(evt)
    },
    handleAnimation: function (anim) {
      this.anim = anim
    },
    stop: function () {
      this.anim.stop()
    },
    play: function () {
      this.anim.play()
    },
    pause: function () {
      this.anim.pause()
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    },
    onSubmit () {

    },
    onReset () {

    },
    add (index) {
      this.inputs.push({
        nama_product: '',
        kategori_product: '',
        jenis_product: '',
        harga_jual: '',
        jumlah_penjualan: '',
        total_penjualan: ''
      })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
