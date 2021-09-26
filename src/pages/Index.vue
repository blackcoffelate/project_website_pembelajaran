<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el icon="inbox" label="Dashboard" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg">

        <transition
          appear
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
        >

        <div class="row q-gutter-sm fit">

          <q-card class="my-card col-md-3 col-sm col-lg-3" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h6" style="font-size: 14px">Data Materi</div>
                  <div class="text-caption text-grey" style="font-size: 11px">
                    Berisi semua data materi yang ada di dalam sistem.
                  </div>
                  <div class="text-h6 text-blue-13"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='2021' :duration='3' :autoinit='true' @finished='alert(`Counting finished!`)'/></div>
              </q-card-section>

              <q-card-section class="col-4 flex flex-center">
                <q-icon name="biotech" class="text-blue-10" style="font-size: 5.4em;" />
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card col-md-3 col-sm col-lg-3" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h6" style="font-size: 14px">Daftar Ujian</div>
                  <div class="text-caption text-grey" style="font-size:11px">
                    Berisi semua data ujian yang pernah didaftarkan.
                  </div>
                  <div class="text-h6 text-blue-13"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='1231' :duration='3' :autoinit='true' @finished='alert(`Counting finished!`)'/></div>
              </q-card-section>

              <q-card-section class="col-4 flex flex-center">
                <q-icon name="extension" class="text-blue-10" style="font-size: 5.4em;" />
              </q-card-section>
            </q-card-section>
          </q-card>

          <q-card class="my-card col-md-3 col-sm col-lg-3" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h6" style="font-size: 14px">Data Siswa</div>
                  <div class="text-caption text-grey" style="font-size: 11px">
                    Berisi semua data siswa yang terdaftar di dalam sistem.
                  </div>
                  <div class="text-h6 text-blue-13"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='945' :duration='3' :autoinit='true' @finished='alert(`Counting finished!`)'/></div>
              </q-card-section>

              <q-card-section class="col-4 flex flex-center">
                <q-icon name="tips_and_updates" class="text-blue-10" style="font-size: 5.4em;" />
              </q-card-section>
            </q-card-section>
          </q-card>

        </div>

        </transition>

        <div class="row col-12 q-mt-md">
          <q-card class="my-card col" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="col-12 q-pa-sm">
                  <q-table
                  title="Master Data Ujian"
                  aria-label="Text"
                  class="text-h5"
                  :rows="ujian.rows"
                  flat
                  :columns="ujian.columns"
                  row-key="name"
                  :filter="filter"
                >

                  <template v-slot:top>
                    <div class="col">
                      <div class="col-2 q-table__title">Master Data Siswa Terdaftar</div>
                      <p class="text-caption">Data siswa yang terdaftar di dalam sistem.</p>
                    </div>

                    <q-space />

                    <q-btn flat round color="primary" icon="search" @click="visibles = !visibles" size="md" class="q-mr-sm" />
                    <q-slide-transition>
                      <div v-show="visibles">
                        <q-input outlined debounce="300" placeholder="Cari.." style="width:300px" color="primary" v-model="filter" dense />
                      </div>
                    </q-slide-transition>
                  </template>

                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="siswa_id" :props="props">
                        {{ props.row.siswa_id }}
                      </q-td>
                      <q-td key="namaLengkap" :props="props">
                        {{ props.row.namaLengkap }}
                      </q-td>
                      <q-td key="nomorTelp" :props="props">
                        {{ props.row.nomorTelp }}
                      </q-td>
                      <q-td key="alamat" :props="props">
                        {{ props.row.alamat }}
                      </q-td>
                      <q-td key="asalSekolah" :props="props">
                        {{ props.row.asalSekolah }}
                      </q-td>
                      <q-td key="kelas" :props="props">
                        {{ props.row.kelas }}
                      </q-td>
                      <q-td key="tglDaftar" :props="props">
                        {{ props.row.tglDaftar }}
                      </q-td>
                    </q-tr>
                  </template>

                </q-table>
              </q-card-section>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>

</template>

<script>
import Vue3autocounter from 'vue3-autocounter'

export default {
  name: 'PageIndex',
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  data () {
    return {
      visibles: false,
      filter: null,
      ujian: {
        columns: [
          { name: 'siswa_id', required: true, label: 'ID Siswa', align: 'left', field: 'siswa_id', sortable: true },
          { name: 'namaLengkap', required: true, label: 'Nama lengkap', align: 'left', field: 'namaLengkap', sortable: true },
          { name: 'nomorTelp', required: true, label: 'Nomor telp', align: 'left', field: 'nomorTelp', sortable: true },
          { name: 'alamat', required: true, label: 'Alamat', align: 'left', field: 'alamat', sortable: true },
          { name: 'asalSekolah', required: true, label: 'Asal sekolah', align: 'left', field: 'asalSekolah', sortable: true },
          { name: 'kelas', required: true, label: 'kelas', align: 'left', field: 'kelas', sortable: true },
          { name: 'tglDaftar', label: 'Tgl daftar', field: 'tglDaftar', align: 'center' }
        ],
        rows: [
          {
            siswa_id: 'ID-091899',
            namaLengkap: 'Mirna Kumala Sari',
            nomorTelp: '087776859898',
            alamat: 'Gg. Jambu air',
            asalSekolah: 'SMK N 3 Bandar Lampung',
            kelas: 'XII',
            tglDaftar: '01 Januari 2021'
          }
        ]
      }
    }
  }
}

</script>

<style>
.bounce-enter-active{
  animation: bounce-in 0.5s;
}
.bounce-leave-active{
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.25);
  }
  100%{
    transform: scale(1);
  }
}
</style>
