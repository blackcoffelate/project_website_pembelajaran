<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Nilai" icon="military_tech" />
        </q-breadcrumbs>
      </q-card>

      <div class="row q-mt-lg">

        <div class="row col-12">
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
                    <div class="col-2 q-table__title">Master Data Nilai Siswa</div>
                    <p class="text-caption">Data nilai ujian siswa yang terdaftar di dalam sistem.</p>
                  </div>

                  <q-space />

                  <q-btn flat round color="primary" icon="search" @click="visible = !visible" size="md" class="q-mr-sm" />
                  <q-slide-transition>
                    <div v-show="visible">
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
                    <q-td key="sekolahAsal" :props="props">
                      {{ props.row.sekolahAsal }}
                    </q-td>
                    <q-td key="kelas" :props="props">
                      {{ props.row.kelas }}
                    </q-td>
                    <q-td key="nomorTelp" :props="props">
                      {{ props.row.nomorTelp }}
                    </q-td>
                    <q-td key="alamat" :props="props">
                      {{ props.row.alamat }}
                    </q-td>
                    <q-td key="aksi" :props="props">
                      <q-btn clickable :to="{ name: 'nilai_siswa_detail' }" outline color="primary" size="sm" label="Detail Nilai"  no-caps />
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

export default {
  name: 'PageIndex',
  data () {
    return {
      visible: false,
      filter: null,
      ujian: {
        columns: [
          { name: 'siswa_id', required: true, label: 'ID Siswa', align: 'left', field: 'siswa_id', sortable: true },
          { name: 'namaLengkap', required: true, label: 'Nama lengkap', align: 'left', field: 'namaLengkap', sortable: true },
          { name: 'sekolahAsal', required: true, label: 'Sekolah asal', align: 'left', field: 'sekolahAsal', sortable: true },
          { name: 'kelas', required: true, label: 'kelas', align: 'left', field: 'kelas', sortable: true },
          { name: 'nomorTelp', required: true, label: 'Nomor telp.', align: 'left', field: 'nomorTelp', sortable: true },
          { name: 'alamat', required: true, label: 'Alamat', align: 'left', field: 'alamat', sortable: true },
          { name: 'aksi', label: 'Actions', field: 'aksi', align: 'center' }
        ],
        rows: [
          {
            siswa_id: 'ID-8911198',
            namaLengkap: 'Bella Shusi',
            sekolahAsal: 'SMAN 3 Bandar Lampung',
            kelas: 'XII',
            nomorTelp: '087611221616',
            alamat: 'Gg. Mangga Dua',
            aksi: ''
          }
        ]
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped>

</style>
