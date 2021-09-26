<template>
  <q-page class="q-pr-md q-pl-md q-pa-md">
    <div class="col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md">
      <q-card class="my-card q-pa-md">
        <q-breadcrumbs separator="---" class="text-blue-10" active-color="secondary">
          <q-breadcrumbs-el label="Main Menu" icon="widgets" />
          <q-breadcrumbs-el label="Semua Soal" icon="quiz" />
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
                    <div class="col-2 q-table__title">Master Data Soal</div>
                    <p class="text-caption">Data soal yang terdaftar di dalam sistem.</p>
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
                    <q-td key="soal_id" :props="props">
                      {{ props.row.soal_id }}
                    </q-td>
                    <q-td key="judulUjian" :props="props">
                      {{ props.row.judulUjian }}
                    </q-td>
                    <q-td key="judulSoal" :props="props">
                      {{ props.row.judulSoal }}
                    </q-td>
                    <q-td key="jawabanA" :props="props">
                      {{ props.row.jawabanA }}
                    </q-td>
                    <q-td key="jawabanB" :props="props">
                      {{ props.row.jawabanB }}
                    </q-td>
                    <q-td key="jawabanC" :props="props">
                      {{ props.row.jawabanC }}
                    </q-td>
                    <q-td key="jawabanD" :props="props">
                      {{ props.row.jawabanD }}
                    </q-td>
                    <q-td key="jawabanBenar" :props="props">
                      {{ props.row.jawabanBenar }}
                    </q-td>
                    <q-td key="bobot" :props="props">
                      {{ props.row.bobot }}
                    </q-td>
                    <q-td key="aksi" :props="props">
                      <q-btn round outline color="green" size="sm" icon="edit"  no-caps />
                      <q-btn round outline color="red" size="sm" icon="delete" no-caps class="q-ml-sm" />
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
          { name: 'soal_id', required: true, label: 'ID Soal', align: 'left', field: 'soal_id', sortable: true },
          { name: 'judulUjian', required: true, label: 'Judul ujian', align: 'left', field: 'judulUjian', sortable: true },
          { name: 'judulSoal', required: true, label: 'Judul soal', align: 'left', field: 'judulSoal', sortable: true },
          { name: 'jawabanA', required: true, label: 'Jawaban A', align: 'left', field: 'jawabanA', sortable: true },
          { name: 'jawabanB', required: true, label: 'Jawaban B', align: 'left', field: 'jawabanB', sortable: true },
          { name: 'jawabanC', required: true, label: 'Jawaban C', align: 'left', field: 'jawabanC', sortable: true },
          { name: 'jawabanD', required: true, label: 'Jawaban D', align: 'left', field: 'jawabanD', sortable: true },
          { name: 'jawabanBenar', required: true, label: 'Jawaban benar', align: 'left', field: 'jawabanBenar', sortable: true },
          { name: 'bobot', required: true, label: 'Bobot', align: 'left', field: 'bobot', sortable: true },
          { name: 'aksi', label: 'Actions', field: 'aksi', align: 'center' }
        ],
        rows: [
          {
            soal_id: 'ID-091899',
            judulUjian: 'Ujian Semester Ganjil',
            judulSoal: 'Muatan PPKN',
            jawabanA: 'menolong tetangga yang membutuhkan',
            jawabanB: 'menghadiri undangan',
            jawabanC: 'bersikap acuh ketika tetangga butuh',
            jawabanD: 'ikut serta',
            jawabanBenar: 'C',
            bobot: '10',
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
