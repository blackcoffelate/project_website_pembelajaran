<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Ujian" icon="auto_fix_high" />
          <q-breadcrumbs-el label="Tambah Ujian" icon="add" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg q-gutter-md">

        <div class="row col fit">
          <q-card class="my-card col" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="col q-pa-lg">
                <div class="col">
                  <div class="col-2 q-table__title">Tambah Ujian</div>
                  <p class="text-caption">Form input data ujian.</p>
                </div>
                <q-form @submit="onSubmit" @reset="onReset">

                  <div class="row q-gutter-sm">
                    <div class="col">
                      <q-input
                        filled
                        v-model="id_ujian"
                        label="Ujian ID"
                        lazy-rules
                        dense
                        readonly
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        v-model="judul_ujian"
                        label="Judul ujian"
                        lazy-rules
                        dense
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                    </div>
                  </div>

                  <div class="row q-gutter-sm">
                    <div class="col">
                      <q-input filled v-model="date" mask="date" :rules="['date']" dense label="Tanggal mulai">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                              <q-date v-model="date">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-date>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                    <div class="col">
                    </div>
                  </div>

                  <div class="row q-gutter-sm">
                    <div class="col">
                      <q-input filled v-model="jamMulai" label="Jam mulai" dense mask="time" :rules="['time']">
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                              <q-time v-model="jamMulai">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                    <div class="col">
                      <q-input filled v-model="jamSelesai" label="Jam selesai" dense mask="time" :rules="['time']">
                        <template v-slot:append>
                          <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                              <q-time v-model="jamSelesai">
                                <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                              </q-time>
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                      </q-input>
                    </div>
                  </div>

                  <div class="row q-gutter-sm">
                    <div class="col">
                      <q-input
                        filled
                        v-model="jam_mulai"
                        label="Pengajar"
                        lazy-rules
                        dense
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                    </div>
                    <div class="col">
                      <q-input
                        filled
                        v-model="jam_selesai"
                        label="Deskripsi"
                        lazy-rules
                        dense
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
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
                  <p class="text-caption">Cara pengisian form soal.</p>
                </div>

                <div class="row q-gutter-sm items-center">
                  <div class="col">
                    <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" style="height: 250px" />
                  </div>
                  <div class="col">
                    <q-timeline color="secondary">

                      <q-timeline-entry subtitle="Tahap I" side="left">
                        <div>
                          Silahkan masukan judul soal sebagai kunci soal.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 2" side="right">
                        <div>
                          Selanjutnya masukan soal beserta jawaban dan gambar untuk setiap jawaban.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 3" side="right">
                        <div>
                          Tentukan jawaban yang benar dan masukan bobot untuk pemberian nilai setiap soal.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry subtitle="Tahap 4" side="right">
                        <div>
                          Tekan tombol submit untuk memasukan soal ke dalam sistem.
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
      id_ujian: 'ID-981198',
      id_soal: 'ID-981198',
      options,
      bobot: null,
      jamMulai: null,
      jamSelesai: null,
      image_c: null,
      image_d: null,
      judulSoal: null,
      jawaban: null,
      judul: null,
      deskripsi: null,
      status_penjualan: null,
      options_jawaban: [
        'Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D'
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
